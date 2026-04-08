import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { CartService } from '../cart/cart.service';
import { ProductService } from '../product/product.service';
import { UserDocument } from 'src/DB/models/user.model';
import { OrderRepository } from 'src/DB/repositories/order.repository';
import { PaymentService } from 'src/common/services/payment/payment.service';
import { OrderStatus, PaymentMethod } from 'src/DB/models/order.model';
import { Types } from 'mongoose';

@Injectable()
export class OrderService {
  constructor(
    private readonly _CartService: CartService,
    private readonly _ProductService: ProductService,
    private readonly _OrderRepository: OrderRepository,
    private readonly _PaymentService: PaymentService,
  ) {}

  async create(data: CreateOrderDto, user: UserDocument) {
    // user id
    const userId = user._id;

    // check cart
    const cart = await this._CartService.getCart(userId);
    // console.log({ cart });

    if (!cart || !cart.products.length)
      throw new BadRequestException('Empty Cart!');

    let price = 0;
    let products: any = [];
    // check products
    for (const prd of cart.products) {
      // check product in DB
      const product = await this._ProductService.checkProductExistence(
        prd.productId,
      );

      // check stock
      if (!this._ProductService.inStock(product, prd.quantity))
        throw new BadRequestException(
          `Sorry only ${product.stock} are only avaiable!`,
        );

      price += product.finalPrice * prd.quantity;
      products.push({
        name: product.name,
        price: product.finalPrice,
        quantity: prd.quantity,
        image: product.thumbnail?.secure_url,
      });
    }

    // create order
    const order = await this._OrderRepository.create({
      ...data,
      cart: cart._id,
      user: userId,
      price,
    });

    // payment cash >>> update stock
    // card >> payment online >>>>

    // clear cart
    await this._CartService.clearCart(userId);
    return { message: 'done' };

    const session = await this.payWithCard(order.id, products, user.email);

    return { message: 'done', data: session.url };
  }

  async payWithCard(orderId: any, products: any[], userEmail: string) {
    const line_items = products.map((product) => ({
      price_data: {
        currency: 'egp',
        product_data: {
          name: product.name,
          images: [product.image],
        },
        unit_amount: product.price * 100, // Stripe expects the amount in the smallest currency unit (e.g., piasters/cents)
      },
      quantity: product.quantity,
    }));
    const { id } = await this._PaymentService.createCoupon({
      currency: 'egp',
      percent_off: 20,
    });
    // card >> payment online >>>>
    return this._PaymentService.createCheckoutSession({
      metadata: { orderId },
      customer_email: userEmail,
      line_items,
      discounts: [{ coupon: id }],
    });
  }

  async cancelOrder(orderId: Types.ObjectId, userId: Types.ObjectId) {
    const order = await this._OrderRepository.findOne({
      filter: { user: userId, _id: orderId },
    });

    if (!order) throw new NotFoundException('Order invalid!');

    const paymentintent = order.payment_intent;
    console.log({ paymentintent });

    if (order.paymentMethod == PaymentMethod.card) {
      await this._PaymentService.refund(order.payment_intent);
      order.orderStatus = OrderStatus.refunded;
    }

    order.orderStatus = OrderStatus.canceled;
    await order.save();

    return { message: 'Done' };
  }

  async stripeWebhook(info: any) {
    const { orderId } = info.data.object.metadata;
    const order = await this._OrderRepository.update({
      filter: {
        _id: Types.ObjectId.createFromHexString(orderId),
        paid: false,
        paymentMethod: PaymentMethod.card,
      },
      update: {
        paid: true,
        payment_intent: info.data.object.payment_intent,
      },
    });

    await this._CartService.clearCart(order!.user);
  }
}
