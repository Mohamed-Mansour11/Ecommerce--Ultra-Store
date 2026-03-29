import {
  MongooseModule,
  Prop,
  Schema,
  SchemaFactory,
  raw,
} from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import slugify from 'slugify';
import { UserModelName } from './user.model';
import type { Image } from 'src/common/types/image.type';
import { ConfigService } from '@nestjs/config';
import { FileUploadService } from 'src/common/services/fileupload/fileupload.service';
import { FileUploadModule } from 'src/common/services/fileupload/fileupload.module';

@Schema({ timestamps: true })
export class Category {
  @Prop({
    type: String,
    required: true,
    unique: true,
    index: { name: 'category_name_index' }, // إضافة Index لتسريع البحث
  })
  name: string;

  @Prop({ type: String, unique: true })
  slug: string;

  @Prop({ type: Types.ObjectId, ref: UserModelName, required: true })
  createdBy: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: UserModelName })
  updatedBy: Types.ObjectId;

  @Prop(
    raw({
      secure_url: String,
      public_id: String,
    }),
  )
  image: Image;

  @Prop({ type: String })
  cloudFolder: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);

// Pre-save Hook to auto-generate the slug from the name
// CategorySchema.pre('save', function () {
//   if (this.isModified('name')) {
//     this.slug = slugify(this.name, { lower: true, replacement: '-' });
//   }
// });

export const CategoryModelName = Category.name;

export const CategoryModel = MongooseModule.forFeatureAsync([
  {
    name: CategoryModelName,
    useFactory: (
      configService: ConfigService,
      fileUploadService: FileUploadService,
    ) => {
      // --- Pre Hook: يتم تنفيذه قبل الحفظ ---
      CategorySchema.pre('save', function () {
        // تحديث الـ slug تلقائياً إذا تغير الاسم
        if (this.isModified('name')) {
          this.slug = slugify(this.name);
        }
      });

      // --- Post Hook: يتم تنفيذه بعد الحذف ---
      //الحذف من الكلاود
      CategorySchema.post(
        'deleteOne',
        { document: true, query: false },
        async function (doc) {
          const categoryFolder = doc.cloudFolder;
          const rootFolder = configService.get('CLOUD_ROOT_FOLDER');

          // حذف مجلد الصور الخاص بالفئة من Cloudinary تلقائياً
          await fileUploadService.deleteFolder(
            `${rootFolder}/category/${categoryFolder}`,
          );
        },
      );

      return CategorySchema;
    },
    inject: [ConfigService, FileUploadService],
    imports: [FileUploadModule], // ضروري لحقن FileUploadService
  },
]);

export type CategoryDocument = HydratedDocument<Category>;
