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
  ParseBoolPipe,
  UploadedFile,
  Query,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Role } from 'src/DB/enums/user.enum';
import { Roles } from 'src/common/decorarors/roles.decorator';
import {
  FileFieldsInterceptor,
  FileInterceptor,
} from '@nestjs/platform-express';
import { User } from 'src/common/decorarors/user.decorator';
import { Types } from 'mongoose';
import { ParseObjectIdPipe } from '@nestjs/mongoose';
import { ThumbnailRequiredPipe } from './pipes/required-thumbnail.pipe';
import { RemoveImageDto } from './dto/remove-image.dto.';
import { FindProductsDto } from './dto/find-products.dto';
import { Public } from 'src/common/decorarors/public.decorator';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Roles(Role.seller, Role.user)
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'thumbnail', maxCount: 1 },
      { name: 'images', maxCount: 3 },
    ]),
  )
  @Post(':subCategoryId')
  async create(
    @User('_id') userId: Types.ObjectId,
    @Param('subCategoryId', ParseObjectIdPipe) subCategoryId: Types.ObjectId,
    @UploadedFiles(ThumbnailRequiredPipe)
    images: Record<string, Express.Multer.File[]>,
    @Body() data: CreateProductDto,
  ) {
    return this.productService.create(userId, subCategoryId, images, data);
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
  @Roles(Role.seller, Role.user)
  @UseInterceptors(FileInterceptor('image'))
  @Patch(':id/add-image')
  async addImage(
    @Param('id', ParseObjectIdPipe) productId: Types.ObjectId,
    @User('_id') userId: Types.ObjectId,
    @UploadedFile() image: Express.Multer.File,
    @Query('isThumbnail', ParseBoolPipe) isThumbnail: boolean,
  ) {
    return this.productService.addImage(productId, userId, isThumbnail, image);
  }

  @Roles(Role.seller, Role.admin)
  @Delete(':id')
  async remove(
    @Param('id', ParseObjectIdPipe) productId: Types.ObjectId,
    @User('_id') userId: Types.ObjectId,
  ) {
    return this.productService.remove(productId, userId);
  }

  @Public()
  @Get(':id')
  async find(@Param('id', ParseObjectIdPipe) productId: Types.ObjectId) {
    return this.productService.find(productId);
  }

  @Public()
  @Get()
  async findAll(@Query() query: FindProductsDto) {
    return this.productService.findAll(query);
  }

  @Public()
  @Get('/redis')
  async testRedis() {
    return this.productService.testRedis();
  }
}
