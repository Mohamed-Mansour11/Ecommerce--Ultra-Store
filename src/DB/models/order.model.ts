import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { UserModelName } from './user.model';
import { CartModelName } from './cart.model';
import { CouponModelName } from './coupon.model';
import type { Image } from 'src/common/types/image.type';

export enum OrderStatus {
  placed = 'placed',
  shipped = 'shipped',
  onWay = 'onWay',
  delivered = 'delivered',
  canceled = 'canceled',
  refunded = 'refunded',
}

export enum PaymentMethod {
  card = 'card',
  cash = 'cash', // COD cash on delivery
}

// Sub-Schema for Products
@Schema({ _id: false }) // نمنع Mongoose من إنشاء ID فرعي لكل منتج داخل الأوردر
export class OrderProduct {
  @Prop({ type: Types.ObjectId, ref: 'Product', required: true })
  productId!: Types.ObjectId;

  @Prop({ type: String, required: true })
  name!: string;

  @Prop({ type: Number, required: true })
  price!: number;

  @Prop({ type: Number, required: true })
  quantity!: number;

  @Prop({ type: String, required: false })
  image?: string;
}

export const OrderProductSchema = SchemaFactory.createForClass(OrderProduct);

// Main Order Schema
@Schema({ timestamps: true })
export class Order {
  @Prop({ type: Types.ObjectId, ref: UserModelName, required: true })
  user!: Types.ObjectId;

  // جعلنا العربة اختيارية (required: false) لأننا سنمسحها، والاعتماد الأساسي أصبح على مصفوفة المنتجات
  @Prop({ type: Types.ObjectId, ref: CartModelName, required: false })
  cart?: Types.ObjectId;

  // مصفوفة المنتجات التي ستحتفظ ببيانات الطلب حتى بعد مسح العربة
  @Prop({ type: [OrderProductSchema], required: true })
  products!: OrderProduct[];

  @Prop({ type: String, required: true })
  phone!: string;

  @Prop({ type: String, required: true })
  address!: string;

  @Prop({ type: String, enum: OrderStatus, default: OrderStatus.placed })
  orderStatus!: OrderStatus;

  @Prop({ type: Number, required: true })
  originalPrice!: number; // السعر الأصلي قبل تطبيق أي خصم (للتوثيق)

  @Prop({ type: Number, required: true })
  price!: number; // السعر النهائي بعد الخصم (وهو المبلغ الفعلي الذي تم دفعه)

  @Prop({ type: Number, default: 0 })
  discount!: number; // قيمة الخصم بالأموال

  @Prop({ type: Types.ObjectId, ref: CouponModelName, default: null })
  coupon!: Types.ObjectId | null; // ID الكوبون المُستخدم في هذا الطلب

  @Prop({ type: String, enum: PaymentMethod, default: PaymentMethod.cash })
  paymentMethod!: PaymentMethod;

  @Prop({ type: { secure_url: String, public_id: String } })
  invoice?: Image;

  @Prop({ type: Boolean, default: false })
  paid!: boolean;

  @Prop({ type: String })
  payment_intent?: string; // for stripe integration
}

// schema
export const OrderSchema = SchemaFactory.createForClass(Order);

// model name
export const OrderModelName = Order.name;

// model
export const OrderModel = MongooseModule.forFeature([
  { name: OrderModelName, schema: OrderSchema },
]);

// Orderdocument
export type OrderDocument = HydratedDocument<Order>;
