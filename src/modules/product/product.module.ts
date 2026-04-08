import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductRepository } from 'src/DB/repositories/product.repository';
import { ProductModel } from 'src/DB/models/product.model';
import { CategoryModule } from '../category/category.module';
import { FileUploadModule } from 'src/common/services/fileupload/fileupload.module';
import { Socket } from 'socket.io';
import { SocketModule } from '../socket/socket.module';
import { SubCategoryModule } from '../sub-category/sub-category.module';
import { SubCategoryRepository } from 'src/DB/repositories/sub-category.repository';

@Module({
  controllers: [ProductController],
  providers: [ProductService, ProductRepository],
  imports: [
    ProductModel,
    CategoryModule,
    FileUploadModule,
    SocketModule,
    SubCategoryModule,
  ],
  exports: [ProductRepository, ProductService],
})
export class ProductModule {}
