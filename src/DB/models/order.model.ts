import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { UserModelName } from './user.model';
import { CartModelName } from './cart.model';
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

// schema class
@Schema({ timestamps: true })
export class Order {
  @Prop({ type: Types.ObjectId, ref: UserModelName, required: true })
  user!: Types.ObjectId;

  // selection , products xxx
  // cart , all products >>> order
  @Prop({ type: Types.ObjectId, ref: CartModelName, required: true })
  cart!: Types.ObjectId;

  @Prop({ type: String, required: true })
  phone!: string;

  @Prop({ type: String, required: true })
  address!: string;

  @Prop({ type: String, default: OrderStatus.placed })
  orderStatus!: OrderStatus;

  @Prop({ type: Number, required: true })
  price!: number;

  @Prop({ type: String, default: PaymentMethod.cash })
  paymentMethod!: PaymentMethod;

  @Prop({ type: { secure_url: String, public_id: String } })
  invoice!: Image;

  @Prop({ type: Boolean, default: false })
  paid!: boolean;

  @Prop({ type: String })
  payment_intent!: string; // for stripe integration
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
