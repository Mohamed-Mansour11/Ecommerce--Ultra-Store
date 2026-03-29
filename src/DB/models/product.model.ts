import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import slugify from 'slugify';
import { CategoryModelName } from './category.model';
import { UserModelName } from './user.model';

@Schema({ timestamps: true })
export class Product {
  @Prop({
    type: String,
    required: true,
    unique: true,
    index: { name: 'Product_name_index' },
    set: function (value: string) {
      this.slug = slugify(value); // توليد الـ slug تلقائياً عند إدخال الاسم
      return value;
    }, //Category بدلا من الهوك في الـ
  })
  name: string;

  @Prop({ type: String, unique: true })
  slug: string;

  @Prop({ type: Types.ObjectId, ref: UserModelName, required: true })
  createdBy: Types.ObjectId;

  @Prop({
    raw: {
      secure_url: String,
      public_id: String,
    },
  })
  thumbnail: any; // الصورة المصغرة //  في حالة صورة ديفولت وليس صورة عشوائية من صور المنتج

  @Prop({
    type: [
      {
        secure_url: String,
        public_id: String,
      },
    ],
  })
  images: any[]; // مصفوفة صور المنتج

  @Prop({ type: String })
  cloudFolder: string;

  @Prop({ type: Types.ObjectId, ref: CategoryModelName, required: true })
  category: Types.ObjectId;

  @Prop({ type: Number, required: true, min: 1 })
  stock: number;

  @Prop({ type: Number, required: true })
  price: number;

  @Prop({
    type: Number,
    min: 0,
    max: 100,
  })
  discount: number; // النسبة المئوية للخصم

  @Prop({
    type: Number,
    default: function () {
      return this.price - (this.price * this.discount || 0) / 100; // إذا لم يوجد خصم، السعر النهائي هو سعر المنتج الأصلي
    },
  })
  finalPrice: number;

  @Prop({ type: Number, min: 0, max: 5 })
  rating: number;
}

// --- إنشاء الـ Schema والـ Model ---

export const ProductSchema = SchemaFactory.createForClass(Product);

export const ProductModelName = Product.name;

export const ProductModel = MongooseModule.forFeature([
  { name: ProductModelName, schema: ProductSchema },
]);

// تعريف الـ Document الخاص بالمنتج
export type ProductDocument = HydratedDocument<Product>;
