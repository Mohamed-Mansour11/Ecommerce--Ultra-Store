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
}

// schema
export const CartSchema = SchemaFactory.createForClass(Cart);

// model name
export const CartModelName = Cart.name;

// model
export const CartModel = MongooseModule.forFeature([
  { name: CartModelName, schema: CartSchema },
]);

// Cartdocument
export type CartDocument = HydratedDocument<Cart>;
