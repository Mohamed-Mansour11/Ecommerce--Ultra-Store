import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UserDocument } from 'src/DB/models/user.model';
import { Connection, Types } from 'mongoose';
import { OrderRepository } from 'src/DB/repositories/order.repository';
import { CartService } from '../cart/cart.service';
import { ProductService } from '../product/product.service';
import { CouponService } from '../coupon/coupon.service';
import { PaymentService } from 'src/common/services/payment/payment.service';
import { OrderStatus, PaymentMethod } from 'src/DB/models/order.model';
import { ConfigService } from '@nestjs/config/dist/config.service';
import { Stripe } from 'stripe';
import { STRIPE_CLIENT } from 'src/common/constants';
import { InjectConnection } from '@nestjs/mongoose/dist/common/mongoose.decorators';

@Injectable()
export class OrderService {
  constructor(
    private readonly _OrderRepository: OrderRepository,
    private readonly _CartService: CartService,
    private readonly _ProductService: ProductService,
    private readonly _CouponService: CouponService,
    private readonly _PaymentService: PaymentService,
    private readonly _ConfigService: ConfigService,

    @Inject(STRIPE_CLIENT) private readonly stripe: Stripe,
    @InjectConnection() private readonly connection: Connection,
  ) {}

  async create(data: CreateOrderDto, user: UserDocument) {
    const userId = user._id;

    // 1. جلب العربة
    const cart = await this._CartService.getCart(userId);
    if (!cart || !cart.products.length) {
      throw new BadRequestException('Empty Cart! Please add products first.');
    }

    let originalPrice = 0;
    const products: any[] = [];

    // 2. التحقق من المخزون وتجهيز المنتجات (Snapshot)
    for (const prd of cart.products) {
      const product = await this._ProductService.checkProductExistence(
        prd.productId,
      );

      if (!this._ProductService.inStock(product, prd.quantity)) {
        throw new BadRequestException(
          `Sorry only ${product.stock} items are available for ${product.name}!`,
        );
      }

      originalPrice += product.finalPrice * prd.quantity;

      products.push({
        productId: prd.productId,
        name: product.name,
        price: product.finalPrice,
        quantity: prd.quantity,
        image: product.thumbnail?.secure_url,
      });
    }

    // 3. تجهيز بيانات الحسابات من العربة
    const discountAmount = cart.discount || 0;
    const finalPrice = cart.totalPriceAfterDiscount || originalPrice;
    const appliedCouponId = cart.coupon || null;

    let stripeCouponId: string | null = null;

    // 4. إنشاء كوبون Stripe إذا وجد خصم
    if (discountAmount > 0) {
      try {
        const stripeCoupon = await this._PaymentService.createCoupon({
          currency: 'egp',
          amount_off: Math.round(discountAmount * 100),
          name: `Discount Applied`,
        });
        stripeCouponId = stripeCoupon.id;
      } catch (error) {
        console.error('Stripe Coupon Error:', error);
      }
    }

    // 5. إنشاء الأوردر في قاعدة البيانات
    const order = await this._OrderRepository.create({
      ...data,
      user: userId,
      price: finalPrice,
      originalPrice,
      discount: discountAmount,
      coupon: appliedCouponId,
      products,
    } as any);

    // 6. التعامل مع طرق الدفع
    // أ: الدفع النقدي (Cash)
    if (data.paymentMethod === PaymentMethod.cash) {
      await Promise.all(
        products.map((item) =>
          this._ProductService.updateStock(
            item.productId as any,
            item.quantity,
            false,
          ),
        ),
      );

      if (appliedCouponId) {
        await this._CouponService.incrementUsage(appliedCouponId as any);
      }

      await this._CartService.clearCart(userId);

      return { message: 'Order placed successfully (Cash)', order };
    }

    // ب: الدفع بالبطاقة (Card)
    const session = await this.payWithCard(
      order._id,
      products,
      user.email,
      stripeCouponId,
    );

    // ملاحظة: لا نمسح العربة هنا في حالة الكريديت كارد، ننتظر الـ Webhook للتأكيد
    return {
      message: 'Checkout session initiated',
      data: session.url,
      orderId: order._id,
    };
  }

  async payWithCard(
    orderId: any,
    products: any[],
    userEmail: string,
    stripeCouponId?: string | null,
  ) {
    const line_items = products.map((product) => ({
      price_data: {
        currency: 'egp',
        product_data: {
          name: product.name,
          images: product.image ? [product.image] : [],
        },
        unit_amount: Math.round(product.price * 100),
      },
      quantity: product.quantity,
    }));

    const discounts = stripeCouponId ? [{ coupon: stripeCouponId }] : [];

    return this._PaymentService.createCheckoutSession({
      metadata: { orderId: orderId.toString() },
      customer_email: userEmail,
      line_items,
      discounts,
    });
  }

  async cancelOrder(orderId: Types.ObjectId, userId: Types.ObjectId) {
    const order = await this._OrderRepository.findOne({
      filter: { user: userId, _id: orderId },
    });

    if (!order) throw new NotFoundException('Order not found!');

    // 1. تحديد ما إذا كان يجب استرجاع المخزون أم لا
    // المخزون يتم خصمه في حالتين: إذا كان الأوردر "كاش"، أو إذا كان "كارد" وتم دفعه بالفعل
    const isStockDeducted =
      order.paymentMethod === PaymentMethod.cash ||
      (order.paymentMethod === PaymentMethod.card && order.paid);

    // 2. إذا كان المخزون قد خُصم، نقوم بإرجاعه
    if (isStockDeducted && order.products && order.products.length > 0) {
      await Promise.all(
        order.products.map((item: any) =>
          this._ProductService.updateStock(
            item.productId as any,
            item.quantity,
            true, // true تعني زيادة المخزون (إرجاع القطع) - وهذا سيمسح الكاش تلقائياً!
          ),
        ),
      );
    }

    // 3. التعامل مع المدفوعات (استرجاع الأموال للبطاقة إن لزم الأمر)
    if (order.paymentMethod === PaymentMethod.card) {
      if (order.paid && order.payment_intent) {
        await this._PaymentService.refund(order.payment_intent);
        order.orderStatus = OrderStatus.refunded;
      } else {
        order.orderStatus = OrderStatus.canceled;
      }
    } else {
      order.orderStatus = OrderStatus.canceled;
    }

    await order.save();
    return {
      message: 'Order status updated and stock returned successfully',
      status: order.orderStatus,
    };
  }
  async stripeWebhook(signature: string, rawBody: Buffer | undefined) {
    if (!signature || !rawBody) {
      throw new BadRequestException('Missing signature or raw body');
    }

    const webhookSecret = this._ConfigService.get<string>(
      'STRIPE_WEBHOOK_SECRET',
    );
    let event: Stripe.Event;

    try {
      // التحقق من صحة الطلب وأنه قادم من سترايب فعلاً
      event = this.stripe.webhooks.constructEvent(
        rawBody,
        signature,
        webhookSecret!,
      );
    } catch (err: any) {
      console.error(
        `⚠️ [Stripe Webhook] Signature verification failed:`,
        err.message,
      );
      throw new BadRequestException(`Webhook Error: ${err.message}`);
    }

    if (event.type !== 'checkout.session.completed') {
      console.log(`[Stripe Webhook] Event ignored: ${event.type}`);
      return;
    }

    const sessionStripe = event.data.object as Stripe.Checkout.Session;
    const orderId = sessionStripe.metadata?.orderId;

    if (!orderId) {
      console.error(' [Stripe Webhook] Missing orderId in session metadata.');
      return;
    }

    // ==========================================
    // 🚀 بداية الـ TRANSACTION لحماية الداتابيز
    // ==========================================
    const dbSession = await this.connection.startSession();
    dbSession.startTransaction();

    try {
      // 1. تمرير الجلسة للـ findOneAndUpdate
      const order = await this._OrderRepository.findOneAndUpdate(
        {
          _id: new Types.ObjectId(orderId),
          paid: false,
        },
        {
          paid: true,
          payment_intent: sessionStripe.payment_intent as string,
          orderStatus: OrderStatus.placed,
        },
        { returnDocument: 'after', session: dbSession }, // 👈 تمرير الـ session هنا
      );

      if (order) {
        const currentOrder = order as any;
        console.log(
          ` [Stripe Webhook] Processing final steps for Order: ${orderId}`,
        );

        // 2. تحديث المخزون (تمرير الجلسة)
        if (currentOrder.products && currentOrder.products.length > 0) {
          await Promise.all(
            currentOrder.products.map((item: any) =>
              this._ProductService.updateStock(
                item.productId as any,
                item.quantity,
                false,
                dbSession, // 👈 تمرير الـ session هنا
              ),
            ),
          );
        }

        // 3. تحديث الكوبون (تمرير الجلسة)
        if (currentOrder.coupon) {
          await this._CouponService.incrementUsage(
            currentOrder.coupon,
            dbSession,
          ); // 👈 تمرير الـ session هنا
        }

        // 4. مسح العربة (تمرير الجلسة)
        await this._CartService.clearCart(currentOrder.user, dbSession); // 👈 تمرير الـ session هنا

        // ==========================================
        // ✅ تأكيد جميع العمليات وحفظها في الداتابيز
        // ==========================================
        await dbSession.commitTransaction();
        console.log(
          `✅ [Stripe Webhook] Order ${orderId} finalized safely with Transaction.`,
        );
      } else {
        // إذا لم يجد الأوردر، تراجع عن أي شيء حدث داخل الجلسة
        await dbSession.abortTransaction();
        console.warn(
          ` [Stripe Webhook] Order ${orderId} was not found or already marked as paid.`,
        );
      }
    } catch (error) {
      // ==========================================
      // 🚨 التراجع عن كل العمليات في حال حدوث أي خطأ
      // ==========================================
      await dbSession.abortTransaction();
      console.error(
        `🚨 [Stripe Webhook] Transaction Aborted due to error:`,
        error,
      );
    } finally {
      // إغلاق الجلسة في جميع الحالات لتنظيف الذاكرة
      dbSession.endSession();
    }
  }
}

// import {
//   Injectable,
//   BadRequestException,
//   NotFoundException,
// } from '@nestjs/common';
// import { CreateOrderDto } from './dto/create-order.dto';
// import { CartService } from '../cart/cart.service';
// import { ProductService } from '../product/product.service';
// import { UserDocument } from 'src/DB/models/user.model';
// import { OrderRepository } from 'src/DB/repositories/order.repository';
// import { PaymentService } from 'src/common/services/payment/payment.service';
// import { OrderStatus, PaymentMethod } from 'src/DB/models/order.model';
// import { Types } from 'mongoose';
// // 1. استيراد خدمة الكوبونات
// import { CouponService } from '../coupon/coupon.service';

// @Injectable()
// export class OrderService {
//   constructor(
//     private readonly _CartService: CartService,
//     private readonly _ProductService: ProductService,
//     private readonly _OrderRepository: OrderRepository,
//     private readonly _PaymentService: PaymentService,
//     private readonly _CouponService: CouponService,
//   ) {}

//   async create(
//     data: CreateOrderDto, // لم نعد بحاجة لـ couponCode في الـ Body لأنه موجود في العربة
//     user: UserDocument,
//   ) {
//     const userId = user._id;

//     // 1. جلب العربة (يجب أن تكون الـ Coupon مغطاة بـ Populate أو موجودة بالكامل)
//     const cart = await this._CartService.getCart(userId);
//     if (!cart || !cart.products.length) {
//       throw new BadRequestException('Empty Cart! Please add products first.');
//     }

//     let originalPrice = 0;
//     const products: any[] = [];

//     // 2. التحقق من المخزون وتجهيز المنتجات
//     for (const prd of cart.products) {
//       const product = await this._ProductService.checkProductExistence(
//         prd.productId,
//       );

//       if (!this._ProductService.inStock(product, prd.quantity)) {
//         throw new BadRequestException(
//           `Sorry only ${product.stock} items are available for ${product.name}!`,
//         );
//       }

//       originalPrice += product.finalPrice * prd.quantity;

//       products.push({
//         productId: prd.productId,
//         name: product.name,
//         price: product.finalPrice,
//         quantity: prd.quantity,
//         image: product.thumbnail?.secure_url,
//       });
//     }

//     // 3. تجهيز بيانات الحسابات (من العربة مباشرة)
//     // نعتمد على الحسابات التي تمت في CartService.applyCoupon
//     const discountAmount = cart.discount || 0;
//     const finalPrice = cart.totalPriceAfterDiscount || originalPrice;
//     const appliedCouponId = cart.coupon || null;

//     let stripeCouponId: string | null = null;

//     // 4. إنشاء كوبون Stripe إذا كان هناك خصم مطبق
//     if (discountAmount > 0) {
//       try {
//         const stripeCoupon = await this._PaymentService.createCoupon({
//           currency: 'egp',
//           amount_off: Math.round(discountAmount * 100), // تحويل لـ "قروش" لـ Stripe
//           name: `Discount Applied`,
//         });
//         stripeCouponId = stripeCoupon.id;
//       } catch (error) {
//         // حماية: إذا فشل إنشاء كوبون سترايب لا نعطل الأوردر بل نسجل الخطأ
//         console.error('Stripe Coupon Creation Failed:', error.message);
//       }
//     }

//     // 5. إنشاء الأوردر في قاعدة البيانات (حفظ الـ Snapshot)
//     const order = await this._OrderRepository.create({
//       ...data,
//       user: userId,
//       price: finalPrice, // المبلغ النهائي المطلوب دفعه
//       originalPrice, // المبلغ قبل الخصم للتوثيق
//       discount: discountAmount, // قيمة الخصم المطبق
//       coupon: appliedCouponId, // ربط معرف الكوبون
//       products,
//     } as any);

//     // 6. التعامل مع طرق الدفع
//     // أ: الدفع النقدي (Cash)
//     if (data.paymentMethod === PaymentMethod.cash) {
//       // تحديث المخزون فوراً
//       await Promise.all(
//         products.map((item) =>
//           this._ProductService.updateStock(
//             item.productId as any,
//             item.quantity,
//             false, // false تعني تقليل المخزون
//           ),
//         ),
//       );

//       // زيادة عدد مرات استخدام الكوبون
//       if (appliedCouponId) {
//         await this._CouponService.incrementUsage(appliedCouponId as any);
//       }

//       // مسح العربة بعد نجاح العملية
//       await this._CartService.clearCart(userId);

//       return {
//         message: 'Order placed successfully (Cash on Delivery)',
//         order,
//       };
//     }

//     // ب: الدفع بالبطاقة (Card)
//     const session = await this.payWithCard(
//       order._id,
//       products,
//       user.email,
//       stripeCouponId,
//     );

//     // ملاحظة: في حالة الـ Card، يفضل مسح العربة وتحديث المخزون داخل الـ Webhook
//     // لضمان أن الدفع قد تم فعلياً. ولكن سأترك مسح العربة هنا كما في كودك الأصلي:
//     await this._CartService.clearCart(userId);

//     return {
//       message: 'Checkout session initiated',
//       data: session.url,
//       orderId: order._id,
//     };
//   }

//   // ✅ تم إضافة (| null) هنا لكي لا يعترض محرر الأكواد عند تمرير المتغير وهو فارغ
//   async payWithCard(
//     orderId: any,
//     products: any[],
//     userEmail: string,
//     stripeCouponId?: string | null,
//   ) {
//     const line_items = products.map((product) => ({
//       price_data: {
//         currency: 'egp',
//         product_data: {
//           name: product.name,
//           images: product.image ? [product.image] : [],
//         },
//         unit_amount: Math.round(product.price * 100),
//       },
//       quantity: product.quantity,
//     }));

//     // تجهيز مصفوفة الخصومات لـ Stripe
//     const discounts = stripeCouponId ? [{ coupon: stripeCouponId }] : [];

//     return this._PaymentService.createCheckoutSession({
//       metadata: { orderId: orderId.toString() },
//       customer_email: userEmail,
//       line_items,
//       discounts, // إرسال الخصم الديناميكي بدلاً من الـ 20% الثابتة
//     });
//   }

//   async cancelOrder(orderId: Types.ObjectId, userId: Types.ObjectId) {
//     const order = await this._OrderRepository.findOne({
//       filter: { user: userId, _id: orderId },
//     });

//     if (!order) throw new NotFoundException('Order invalid!');

//     const paymentintent = order.payment_intent;
//     console.log({ paymentintent });

//     if (order.paymentMethod == PaymentMethod.card) {
//       if (order.payment_intent) {
//         await this._PaymentService.refund(order.payment_intent);
//       }
//       order.orderStatus = OrderStatus.refunded;
//     } else {
//       order.orderStatus = OrderStatus.canceled;
//     }

//     await order.save();
//     return { message: 'Done' };
//   }

//   async stripeWebhook(info: any) {
//     if (info.type !== 'checkout.session.completed') {
//       console.log(`[Stripe] Ignored event: ${info.type}`);
//       return;
//     }

//     const { orderId } = info.data.object.metadata;

//     const order = await this._OrderRepository.findOneAndUpdate(
//       {
//         _id: Types.ObjectId.createFromHexString(orderId),
//         paid: false,
//         paymentMethod: PaymentMethod.card,
//       },
//       {
//         paid: true,
//         payment_intent: info.data.object.payment_intent,
//       },
//       { returnDocument: 'after' },
//     );

//     const currentOrder = order as any;

//     if (
//       currentOrder &&
//       currentOrder.products &&
//       currentOrder.products.length > 0
//     ) {
//       await Promise.all(
//         currentOrder.products.map((item: any) =>
//           this._ProductService.updateStock(
//             item.productId as any,
//             item.quantity,
//             false,
//           ),
//         ),
//       );

//       // 🔥 زيادة عداد الكوبون هنا بعد أن نتأكد من نجاح عملية الدفع بالفيزا
//       if (currentOrder.coupon) {
//         await this._CouponService.incrementUsage(currentOrder.coupon);
//       }

//       console.log(
//         `Stock and Coupon updated successfully for Order: ${orderId}`,
//       );
//     }
//   }
// }

// // import {
// //   Injectable,
// //   BadRequestException,
// //   NotFoundException,
// // } from '@nestjs/common';
// // import { CreateOrderDto } from './dto/create-order.dto';
// // import { CartService } from '../cart/cart.service';
// // import { ProductService } from '../product/product.service';
// // import { UserDocument } from 'src/DB/models/user.model';
// // import { OrderRepository } from 'src/DB/repositories/order.repository';
// // import { PaymentService } from 'src/common/services/payment/payment.service';
// // import { OrderStatus, PaymentMethod } from 'src/DB/models/order.model';
// // import { Types } from 'mongoose';

// // @Injectable()
// // export class OrderService {
// //   constructor(
// //     private readonly _CartService: CartService,
// //     private readonly _ProductService: ProductService,
// //     private readonly _OrderRepository: OrderRepository,
// //     private readonly _PaymentService: PaymentService,
// //   ) {}

// //   // async create(data: CreateOrderDto, user: UserDocument) {
// //   //   // user id
// //   //   const userId = user._id;

// //   //   // check cart
// //   //   const cart = await this._CartService.getCart(userId);
// //   //   // console.log({ cart });

// //   //   if (!cart || !cart.products.length)
// //   //     throw new BadRequestException('Empty Cart!');

// //   //   let price = 0;
// //   //   let products: any = [];
// //   //   // check products
// //   //   for (const prd of cart.products) {
// //   //     // check product in DB
// //   //     const product = await this._ProductService.checkProductExistence(
// //   //       prd.productId,
// //   //     );

// //   //     // check stock
// //   //     if (!this._ProductService.inStock(product, prd.quantity))
// //   //       throw new BadRequestException(
// //   //         `Sorry only ${product.stock} are only avaiable!`,
// //   //       );

// //   //     await this._ProductService.updateStock(
// //   //       prd.productId as any,
// //   //       prd.quantity,
// //   //       false,
// //   //     );

// //   //     price += product.finalPrice * prd.quantity;
// //   //     products.push({
// //   //       name: product.name,
// //   //       price: product.finalPrice,
// //   //       quantity: prd.quantity,
// //   //       image: product.thumbnail?.secure_url,
// //   //     });
// //   //   }

// //   //   // create order
// //   //   const order = await this._OrderRepository.create({
// //   //     ...data,
// //   //     cart: cart._id,
// //   //     user: userId,
// //   //     price,
// //   //   });

// //   //   // payment cash >>> update stock
// //   //   // card >> payment online >>>>

// //   //   // clear cart
// //   //   await this._CartService.clearCart(userId);
// //   //   return { message: 'done', order };

// //   //   const session = await this.payWithCard(order.id, products, user.email);

// //   //   return { message: 'done', data: session.url };
// //   // }

// //   async create(data: CreateOrderDto, user: UserDocument) {
// //     const userId = user._id;

// //     // 1. جلب العربة والتأكد من وجود منتجات
// //     const cart = await this._CartService.getCart(userId);
// //     if (!cart || !cart.products.length) {
// //       throw new BadRequestException('Empty Cart!');
// //     }

// //     let price = 0;
// //     let products: any = [];

// //     // 2. التحقق من وجود المنتجات وصلاحية المخزون (Validation Only)
// //     for (const prd of cart.products) {
// //       const product = await this._ProductService.checkProductExistence(
// //         prd.productId,
// //       );

// //       if (!this._ProductService.inStock(product, prd.quantity)) {
// //         throw new BadRequestException(
// //           `Sorry only ${product.stock} items are available for ${product.name}!`,
// //         );
// //       }

// //       // حساب السعر الإجمالي وتجهيز بيانات الأوردر
// //       price += product.finalPrice * prd.quantity;
// //       products.push({
// //         productId: prd.productId, // نحتاجه للخصم لاحقاً
// //         name: product.name,
// //         price: product.finalPrice,
// //         quantity: prd.quantity,
// //         image: product.thumbnail?.secure_url,
// //       });
// //     }

// //     // 3. إنشاء الأوردر في قاعدة البيانات (حفظ السجل أولاً لضمان سلامة البيانات)
// //     const order = await this._OrderRepository.create({
// //       ...data,
// //       cart: cart._id,
// //       user: userId,
// //       price,
// //     });

// //     // 4. الآن نقوم بخصم الكميات من المخزن الفعلي في قاعدة البيانات
// //     for (const item of products) {
// //       await this._ProductService.updateStock(
// //         item.productId as any,
// //         item.quantity,
// //         false, // false تعني خصم (Decrement)
// //       );
// //     }

// //     // 5. مسح محتويات العربة بعد نجاح العملية
// //     await this._CartService.clearCart(userId);

// //     // 6. منطق الرد النهائي وتحديد وسيلة الدفع

// //     // أ: في حالة الدفع النقدي (Cash)
// //     if (data.paymentMethod === PaymentMethod.cash) {
// //       return { message: 'Order created successfully (Cash)', order };
// //     }

// //     // ب: في حالة الدفع بالبطاقة (Card) - ننتقل لإنشاء جلسة Stripe
// //     const session = await this.payWithCard(order._id, products, user.email);

// //     return {
// //       message: 'Checkout session created',
// //       data: session.url,
// //       orderId: order._id,
// //     };
// //   }

// //   async payWithCard(orderId: any, products: any[], userEmail: string) {
// //     const line_items = products.map((product) => ({
// //       price_data: {
// //         currency: 'egp',
// //         product_data: {
// //           name: product.name,
// //           images: [product.image],
// //         },
// //         unit_amount: product.price * 100, // Stripe expects the amount in the smallest currency unit (e.g., piasters/cents)
// //       },
// //       quantity: product.quantity,
// //     }));
// //     const { id } = await this._PaymentService.createCoupon({
// //       currency: 'egp',
// //       percent_off: 20,
// //     });
// //     // card >> payment online >>>>
// //     return this._PaymentService.createCheckoutSession({
// //       metadata: { orderId },
// //       customer_email: userEmail,
// //       line_items,
// //       discounts: [{ coupon: id }],
// //     });
// //   }

// //   async cancelOrder(orderId: Types.ObjectId, userId: Types.ObjectId) {
// //     const order = await this._OrderRepository.findOne({
// //       filter: { user: userId, _id: orderId },
// //     });

// //     if (!order) throw new NotFoundException('Order invalid!');

// //     const paymentintent = order.payment_intent;
// //     console.log({ paymentintent });

// //     if (order.paymentMethod == PaymentMethod.card) {
// //       await this._PaymentService.refund(order.payment_intent);
// //       order.orderStatus = OrderStatus.refunded;
// //     }

// //     order.orderStatus = OrderStatus.canceled;
// //     await order.save();

// //     return { message: 'Done' };
// //   }

// //   async stripeWebhook(info: any) {
// //     const { orderId } = info.data.object.metadata;
// //     const order = await this._OrderRepository.update({
// //       filter: {
// //         _id: Types.ObjectId.createFromHexString(orderId),
// //         paid: false,
// //         paymentMethod: PaymentMethod.card,
// //       },
// //       update: {
// //         paid: true,
// //         payment_intent: info.data.object.payment_intent,
// //       },
// //     });

// //     await this._CartService.clearCart(order!.user);
// //   }
// // }
