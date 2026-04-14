import { HydratedDocument, Types } from 'mongoose';
import { ProductModelName } from './product.model';
import { MongooseModule, Prop, Schema } from '@nestjs/mongoose';
import { SchemaFactory } from '@nestjs/mongoose';
import { UserModelName } from './user.model';
// استيراد اسم موديل الكوبون لربطه بالعربة
import { CouponModelName } from './coupon.model';

// schema class
@Schema({ timestamps: true })
export class Cart {
  @Prop({ type: Types.ObjectId, ref: UserModelName, required: true })
  user!: Types.ObjectId;

  @Prop({
    type: [
      {
        productId: {
          type: Types.ObjectId,
          ref: ProductModelName,
          required: true,
        },
        quantity: { type: Number, default: 1 },
        price: { type: Number },
      },
    ],
  })
  products!: { productId: Types.ObjectId; quantity: number; price: number }[];

  @Prop({ type: Number, default: 0 })
  totalPrice!: number; // إجمالي سعر المنتجات الأصلي (قبل الكوبون)

  // ==========================================
  // --- الحقول الجديدة الخاصة بنظام الكوبونات ---
  // ==========================================

  @Prop({ type: Types.ObjectId, ref: CouponModelName, default: null })
  coupon!: Types.ObjectId | null; // ID الكوبون المُستخدم

  @Prop({ type: Number, default: 0 })
  discount!: number; // قيمة الخصم بالأموال التي وفرها العميل

  @Prop({ type: Number, default: 0 })
  totalPriceAfterDiscount!: number; // السعر النهائي المطلوب دفعه بعد تطبيق الخصم
}

// schema
export const CartSchema = SchemaFactory.createForClass(Cart);

// 🔥 تحديث الـ Hook ليتعامل مع الكوبون 🔥
CartSchema.pre('save', function () {
  if (!this.products) {
    this.products = [];
  }

  // 1. نقوم بحساب الإجمالي: جمع (سعر الوحدة × الكمية) لكل المنتجات
  this.totalPrice = this.products.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  // 2. التحقق من الكوبون:
  // إذا لم يقم المستخدم بإدخال كوبون (أو تم إزالته)، يجب أن نساوي السعر النهائي بالسعر الأصلي ونُصَفِّر الخصم.
  // (أما إذا كان هناك كوبون، فإن قيم discount و totalPriceAfterDiscount ستأتي جاهزة ومحسوبة من CartService)
  if (!this.coupon) {
    this.totalPriceAfterDiscount = this.totalPrice;
    this.discount = 0;
  }
});

export const CartModelName = Cart.name;

export const CartModel = MongooseModule.forFeature([
  { name: CartModelName, schema: CartSchema },
]);

export type CartDocument = HydratedDocument<Cart>;

// import { HydratedDocument, Types } from 'mongoose';
// import { ProductModelName } from './product.model';
// import { MongooseModule, Prop, Schema } from '@nestjs/mongoose';
// import { SchemaFactory } from '@nestjs/mongoose';
// import { UserModelName } from './user.model';

// // schema class
// @Schema({ timestamps: true })
// export class Cart {
//   @Prop({ type: Types.ObjectId, ref: UserModelName, required: true })
//   user!: Types.ObjectId;

//   @Prop({
//     type: [
//       {
//         productId: {
//           type: Types.ObjectId,
//           ref: ProductModelName,
//           required: true,
//         },
//         quantity: { type: Number, default: 1 },
//         price: { type: Number },
//       },
//     ],
//   })
//   products!: { productId: Types.ObjectId; quantity: number; price: number }[];

//   @Prop({ type: Number, default: 0 })
//   totalPrice!: number;
// }

// // schema
// export const CartSchema = SchemaFactory.createForClass(Cart);

// CartSchema.pre('save', function () {
//   if (!this.products) {
//     this.products = [];
//   }
//   // نقوم بحساب الإجمالي: جمع (سعر الوحدة × الكمية) لكل المنتجات
//   this.totalPrice = this.products.reduce((acc, item) => {
//     return acc + item.price * item.quantity;
//   }, 0);
// });

// export const CartModelName = Cart.name;

// export const CartModel = MongooseModule.forFeature([
//   { name: CartModelName, schema: CartSchema },
// ]);

// export type CartDocument = HydratedDocument<Cart>;
