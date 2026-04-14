import { Module, forwardRef } from '@nestjs/common';
import { SubCategoryService } from './sub-category.service';
import { SubCategoryController } from './sub-category.controller';
import { SubCategoryModel } from 'src/DB/models/sub-category.model';
import { CategoryModel } from 'src/DB/models/category.model';
import { SubCategoryRepository } from 'src/DB/repositories/sub-category.repository';
import { CategoryRepository } from 'src/DB/repositories/category.repository';
import { FileUploadModule } from 'src/common/services/fileupload/fileupload.module';
import { CloudinaryProvider } from 'src/common/services/fileupload/cloudinary.provider';
import { ProductModule } from '../product/product.module';

@Module({
  imports: [
    SubCategoryModel,
    CategoryModel,
    FileUploadModule,
    //  إضافة الربط الدائري هنا لكي تستطيع استخدام ProductService داخل السيرفز
    forwardRef(() => ProductModule),
  ],
  controllers: [SubCategoryController],
  providers: [
    SubCategoryService,
    SubCategoryRepository,
    CategoryRepository,
    CloudinaryProvider,
  ],
  exports: [SubCategoryRepository, SubCategoryService],
})
export class SubCategoryModule {}
