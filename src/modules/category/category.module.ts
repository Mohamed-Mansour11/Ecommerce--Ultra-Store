import { Module, forwardRef } from '@nestjs/common'; // 🔥 أضف forwardRef هنا
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { CategoryModel } from 'src/DB/models/category.model';
import { CategoryRepository } from 'src/DB/repositories/category.repository';
import { FileUploadService } from 'src/common/services/fileupload/fileupload.service';
import { CloudinaryProvider } from 'src/common/services/fileupload/cloudinary.provider';
import { ProductModule } from '../product/product.module';

@Module({
  // 🔥 تغليف ProductModule بـ forwardRef لفك الارتباط الدائري
  imports: [CategoryModel, forwardRef(() => ProductModule)],
  controllers: [CategoryController],
  providers: [
    CategoryService,
    CategoryRepository,
    FileUploadService,
    CloudinaryProvider,
  ],
  // 🔥 تأكد من إضافة CategoryService في الـ exports لكي يراها ProductService
  exports: [CategoryRepository, CategoryService],
})
export class CategoryModule {}
