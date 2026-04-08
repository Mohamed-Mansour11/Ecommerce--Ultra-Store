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
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Types } from 'mongoose';
import { SubCategoryService } from './sub-category.service';
import { CreateSubCategoryDto } from './dto/create-sub-category.dto';
import { UpdateSubCategoryDto } from './dto/update-sub-category.dto';
import { Public } from 'src/common/decorarors/public.decorator';
import { ParseObjectIdPipe } from '@nestjs/mongoose';
import { Role } from 'src/DB/enums/user.enum';
import { Roles } from 'src/common/decorarors/roles.decorator';
import { User } from 'src/common/decorarors/user.decorator';

@Controller('subcategory')
export class SubCategoryController {
  constructor(private readonly subCategoryService: SubCategoryService) {}

  @Post()
  @Roles(Role.admin, Role.user)
  @UseInterceptors(FileInterceptor('image'))
  create(
    @Body() data: CreateSubCategoryDto,
    @User('_id') userId: Types.ObjectId,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.subCategoryService.create(data, userId, file);
  }

  @Roles(Role.admin, Role.user)
  @Patch(':id')
  async update(
    @Param('id', ParseObjectIdPipe) subCategoryId: Types.ObjectId,
    @Body() updateSubCategoryDto: UpdateSubCategoryDto,
    @User('_id') userId: Types.ObjectId,
  ) {
    return this.subCategoryService.update(
      subCategoryId,
      updateSubCategoryDto,
      userId,
    );
  }

  @Roles(Role.admin, Role.user)
  @Patch(':id/image')
  @UseInterceptors(FileInterceptor('image'))
  async updateImage(
    @Param('id', ParseObjectIdPipe) subCategoryId: Types.ObjectId,
    @User('_id') userId: Types.ObjectId,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.subCategoryService.updateImage(subCategoryId, file, userId);
  }

  @Roles(Role.admin, Role.user)
  @Delete(':id')
  async remove(
    @Param('id', ParseObjectIdPipe) subCategoryId: Types.ObjectId,
    @User('_id') userId: Types.ObjectId,
  ) {
    return this.subCategoryService.remove(subCategoryId, userId);
  }

  @Public()
  @Get(':id')
  async findOne(@Param('id', ParseObjectIdPipe) subCategoryId: Types.ObjectId) {
    return this.subCategoryService.findOne(subCategoryId);
  }

  @Public()
  @Get()
  async findAll(@Query('page', ParseIntPipe) page: number) {
    return this.subCategoryService.findAll(page);
  }
}
