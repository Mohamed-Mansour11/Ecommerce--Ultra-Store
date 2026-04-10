import { HydratedDocument, Types } from 'mongoose';
import { ProductModelName } from './product.model';
import { MongooseModule, Prop, Schema } from '@nestjs/mongoose';
import { SchemaFactory } from '@nestjs/mongoose';
import { UserModelName } from './user.model';

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
  totalPrice!: number;
}

// schema
export const CartSchema = SchemaFactory.createForClass(Cart);

CartSchema.pre('save', function () {
  // نقوم بحساب الإجمالي: جمع (سعر الوحدة × الكمية) لكل المنتجات
  this.totalPrice = this.products.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
});

export const CartModelName = Cart.name;

export const CartModel = MongooseModule.forFeature([
  { name: CartModelName, schema: CartSchema },
]);

export type CartDocument = HydratedDocument<Cart>;
