import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Role } from 'src/DB/enums/user.enum';
import { Roles } from 'src/common/decorarors/roles.decorator';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { User } from 'src/common/decorarors/user.decorator';
import { Types } from 'mongoose';
import { ParseObjectIdPipe } from '@nestjs/mongoose';
import { ThumbnailRequiredPipe } from './pipes/required-thumbnail.pipe';
import { RemoveImageDto } from './dto/remove-image.dto.';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Roles(Role.seller)
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'thumbnail', maxCount: 1 },
      { name: 'images', maxCount: 3 },
    ]),
  )
  @Post(':categoryId')
  async create(
    @User('_id') userId: Types.ObjectId,
    @Param('categoryId', ParseObjectIdPipe) categoryId: Types.ObjectId,
    @UploadedFiles(ThumbnailRequiredPipe)
    images: Record<string, Express.Multer.File[]>,
    @Body() data: CreateProductDto,
  ) {
    return this.productService.create(userId, categoryId, images, data);
  }

  @Roles(Role.seller)
  @Patch(':id')
  async update(
    @User('_id') userId: Types.ObjectId,
    @Param('id', ParseObjectIdPipe) productId: Types.ObjectId,
    @Body() data: UpdateProductDto,
  ) {
    return this.productService.update(userId, productId, data);
  }

  @Roles(Role.seller)
  @Patch(':id/remove-image')
  async removeImage(
    @Param('id', ParseObjectIdPipe) productId: Types.ObjectId,
    @User('_id') userId: Types.ObjectId,
    @Body() data: RemoveImageDto,
  ) {
    return this.productService.removeImage(productId, userId, data.secure_url);
  }
}
