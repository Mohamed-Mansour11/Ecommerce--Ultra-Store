import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { CategoryModel } from 'src/DB/models/category.model';
import { CategoryRepository } from 'src/DB/repositories/category.repository';
import { FileUploadService } from 'src/common/services/fileupload/fileupload.service';
import { CloudinaryProvider } from 'src/common/services/fileupload/cloudinary.provider';

@Module({
  imports: [CategoryModel],
  controllers: [CategoryController],
  providers: [
    CategoryService,
    CategoryRepository,
    FileUploadService,
    CloudinaryProvider,
  ],
  exports: [CategoryRepository], // علشان هعوزه في حجات زي البرودكت
})
export class CategoryModule {}
