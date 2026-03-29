import { FileUploadModule } from './../../common/services/fileupload/fileupload.module';
import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { FileUploadService } from 'src/common/services/fileupload/fileupload.service';
import slugify from 'slugify';
import type { Image } from 'src/common/types/image.type';

@Schema({ timestamps: true })
export class SubCategory {
  @Prop({
    type: String,
    required: true,
    unique: true,
    index: { name: 'subcategory_name_index' },
  })
  name: string;

  @Prop({ type: String, unique: true })
  slug: string;

  @Prop({ type: Types.ObjectId, ref: 'Category', required: true })
  category: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  createdBy: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User' })
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

export const SubCategorySchema = SchemaFactory.createForClass(SubCategory);
export const SubCategoryModelName = SubCategory.name;

export const SubCategoryModel = MongooseModule.forFeatureAsync([
  {
    name: SubCategoryModelName,
    useFactory: (
      configService: ConfigService,
      fileUploadService: FileUploadService,
    ) => {
      SubCategorySchema.pre('save', function () {
        if (this.isModified('name')) {
          this.slug = slugify(this.name);
        }
      });

      SubCategorySchema.post(
        'deleteOne',
        { document: true, query: false },
        async function (doc: any) {
          const subCategoryFolder = doc.cloudFolder;
          const rootFolder = configService.get('CLOUD_ROOT_FOLDER');
          await fileUploadService.deleteFolder(
            `${rootFolder}/subcategory/${subCategoryFolder}`,
          );
        },
      );

      return SubCategorySchema;
    },
    inject: [ConfigService, FileUploadService],
    imports: [FileUploadModule],
  },
]);

export type SubCategoryDocument = HydratedDocument<SubCategory>;
