import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  Req,
  ParseIntPipe,
  Query,
  ParseFilePipeBuilder,
  HttpStatus,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Roles } from 'src/common/decorarors/roles.decorator';
import { Role } from 'src/DB/enums/user.enum';
import { FileInterceptor } from '@nestjs/platform-express';
import { User } from 'src/common/decorarors/user.decorator';
import { Types } from 'mongoose';
import { ParseObjectIdPipe } from '@nestjs/mongoose';
import { Public } from 'src/common/decorarors/public.decorator';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @Roles(Role.user, Role.admin)
  @UseInterceptors(FileInterceptor('image'))
  create(
    @Body() data: CreateCategoryDto,
    @User('_id') userId: Types.ObjectId,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({ fileType: /(jpg|jpeg|png|webp)$/ })
        .addMaxSizeValidator({ maxSize: 2 * 1024 * 1024 })
        .build({ errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY }),
    )
    file: Express.Multer.File,
  ) {
    return this.categoryService.create(data, userId, file);
  }

  @Roles(Role.admin, Role.user)
  @Patch(':id')
  async update(
    @Param('id', ParseObjectIdPipe) categoryId: Types.ObjectId,
    @Body() updateCategoryDto: UpdateCategoryDto,
    @User('_id') userId: Types.ObjectId,
  ) {
    return this.categoryService.update(categoryId, updateCategoryDto, userId);
  }

  @Roles(Role.admin, Role.user)
  @Patch(':id/image')
  @UseInterceptors(FileInterceptor('image'))
  async updateImage(
    @Param('id') categoryId: Types.ObjectId,
    @User('_id') userId: Types.ObjectId,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({ fileType: /(jpg|jpeg|png|webp)$/ })
        .addMaxSizeValidator({ maxSize: 2 * 1024 * 1024 })
        .build({ errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY }),
    )
    file: Express.Multer.File,
  ) {
    return this.categoryService.updateImage(categoryId, file, userId);
  }

  @Roles(Role.admin, Role.user)
  @Delete(':id')
  async remove(
    @Param('id', ParseObjectIdPipe) categoryId: Types.ObjectId,
    @User('_id') userId: Types.ObjectId,
  ) {
    return this.categoryService.remove(categoryId, userId);
  }

  @Public()
  @Get(':id')
  async findOne(@Param('id', ParseObjectIdPipe) categoryId: Types.ObjectId) {
    return this.categoryService.findOne(categoryId);
  }

  @Public()
  @Get()
  async findAll(@Query('page', ParseIntPipe) page: number) {
    return this.categoryService.findAll(page);
  }
}