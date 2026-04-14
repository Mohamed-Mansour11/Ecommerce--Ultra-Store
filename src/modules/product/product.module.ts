import { Module, forwardRef } from '@nestjs/common'; // استيراد forwardRef
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductRepository } from 'src/DB/repositories/product.repository';
import { ProductModel } from 'src/DB/models/product.model'; // تأكد من المسار
import { CategoryModule } from '../category/category.module';
import { FileUploadModule } from 'src/common/services/fileupload/fileupload.module';
import { SocketModule } from '../socket/socket.module';
import { SubCategoryModule } from '../sub-category/sub-category.module';

@Module({
  controllers: [ProductController],
  providers: [ProductService, ProductRepository],
  imports: [
    ProductModel,
    FileUploadModule,
    SocketModule,
    SubCategoryModule,
    forwardRef(() => CategoryModule),
    forwardRef(() => SubCategoryModule),
  ],
  exports: [ProductRepository, ProductService],
})
export class ProductModule {}
