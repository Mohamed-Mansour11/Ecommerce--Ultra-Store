import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';

export type WishlistDocument = Wishlist & Document;

@Schema({ timestamps: true })
export class Wishlist {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  user!: Types.ObjectId;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  })
  product!: Types.ObjectId;
}

export const WishlistSchema = SchemaFactory.createForClass(Wishlist);

// منع تكرار المنتج لنفس المستخدم على مستوى قاعدة البيانات
WishlistSchema.index({ user: 1, product: 1 }, { unique: true });
