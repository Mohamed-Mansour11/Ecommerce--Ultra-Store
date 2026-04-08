import { Module } from '@nestjs/common';
import { SubCategoryController } from './sub-category.controller';
import { SubCategoryService } from './sub-category.service';
import { SubCategoryRepository } from 'src/DB/repositories/sub-category.repository';
import { SubCategoryModel } from 'src/DB/models/sub-category.model';
import { CategoryModel } from 'src/DB/models/category.model';
import { CategoryRepository } from 'src/DB/repositories/category.repository';
import { FileUploadModule } from 'src/common/services/fileupload/fileupload.module';
import { CloudinaryProvider } from 'src/common/services/fileupload/cloudinary.provider';

@Module({
  imports: [SubCategoryModel, CategoryModel, FileUploadModule],
  controllers: [SubCategoryController],
  providers: [
    SubCategoryService,
    SubCategoryRepository,
    CategoryRepository,
    CloudinaryProvider,
  ],
  exports: [SubCategoryRepository],
})
export class SubCategoryModule {}
