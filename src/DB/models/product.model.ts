import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import slugify from 'slugify';
import { CategoryModelName } from './category.model';
import { UserModelName } from './user.model';
import { FileUploadService } from 'src/common/services/fileupload/fileupload.service';
import { FileUploadModule } from 'src/common/services/fileupload/fileupload.module';
import type { Image } from 'src/common/types/image.type';
import { SubCategoryModelName } from './sub-category.model';

@Schema({ timestamps: true })
export class Product {
  @Prop({
    type: String,
    required: true,
    unique: true,
    index: { name: 'Product_name_index' },
    set: function (this: any, value: string) {
      this.slug = slugify(value); // توليد الـ slug تلقائياً عند إدخال الاسم
      return value;
    }, //Category بدلا من الهوك في الـ
    //بدلًا من كتابة كود يدوي في كل مرة تنشئ فيها منتجاً جديداً لتحويل الاسم إلى رابط، تقوم هذه الدالة بالمهمة
  })
  name!: string;

  @Prop({ type: String, unique: true })
  slug!: string;

  @Prop({ type: Types.ObjectId, ref: UserModelName, required: true })
  createdBy!: Types.ObjectId;

  @Prop({
    type: {
      secure_url: String,
      public_id: String,
    },
  })
  thumbnail!: Image;

  @Prop({
    type: [
      {
        secure_url: String,
        public_id: String,
      },
    ],
  })
  images!: Image[]; // مصفوفة صور المنتج

  @Prop({ type: String })
  cloudFolder!: string;

  @Prop({ type: Types.ObjectId, ref: CategoryModelName })
  category!: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: SubCategoryModelName, required: true })
  subCategory!: Types.ObjectId;

  @Prop({ type: Number, required: true, min: 1 })
  stock!: number;

  @Prop({ type: Number, required: true })
  price!: number;

  @Prop({
    type: Number,
    min: 0,
    max: 100,
  })
  discount!: number; // النسبة المئوية للخصم

  @Prop({
    type: Number,
    default: function (this: any) {
      return this.price - (this.price * this.discount || 0) / 100; // إذا لم يوجد خصم، السعر النهائي هو سعر المنتج الأصلي
    },
  })
  finalPrice!: number;

  @Prop({ type: Number, min: 0, max: 5 })
  rating!: number;
}

// --- إنشاء الـ Schema والـ Model ---

export const ProductSchema = SchemaFactory.createForClass(Product);

export const ProductModelName = Product.name;

// export const ProductModel = MongooseModule.forFeature([
//   { name: ProductModelName, schema: ProductSchema },
// ]);

export const ProductModel = MongooseModule.forFeatureAsync([
  {
    name: ProductModelName,
    useFactory: (fileUploadService: FileUploadService) => {
      ProductSchema.post(
        'deleteOne',
        { document: true, query: false },
        async function (doc) {
          await fileUploadService.deleteFolder(doc.cloudFolder);
        },
      );

      return ProductSchema;
    },
    inject: [FileUploadService],
    imports: [FileUploadModule],
  },
]);

// تعريف الـ Document الخاص بالمنتج
export type ProductDocument = HydratedDocument<Product>;
