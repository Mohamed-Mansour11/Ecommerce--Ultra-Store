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
  @Roles(Role.admin)
  @UseInterceptors(FileInterceptor('image')) // << memory && { storage: diskStorage({}) }
  create(
    @Body() data: CreateCategoryDto,
    @User('_id') userId: Types.ObjectId,
    @UploadedFile()
    file: Express.Multer.File,
    // @Req() req: any,
  ) {
    return this.categoryService.create(data, userId, file);
  }

  @Roles(Role.admin)
  @Patch(':id')
  async update(
    // @Param('id') categoryId: Types.ObjectId,  => Aya
    @Param('id', ParseObjectIdPipe) categoryId: Types.ObjectId,
    @Body() updateCategoryDto: UpdateCategoryDto,
    @User('_id') userId: Types.ObjectId,
  ) {
    return this.categoryService.update(categoryId, updateCategoryDto, userId);
  }
  //يبقى استخدم بايب @Query | @Param من id طالما الريكويست جاي فيه
  //  استخدمنا البايب في حالة الكويري والبارام علشان لو في خطأ في الآي دي يطلعوا من برة لبرة
  @Roles(Role.admin)
  @Patch(':id/image')
  @UseInterceptors(FileInterceptor('image'))
  async updateImage(
    @Param('id') categoryId: Types.ObjectId,
    @User('_id') userId: Types.ObjectId,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.categoryService.updateImage(categoryId, file, userId);
  }

  @Roles(Role.admin)
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
//   @Get()
//   findAll() {
//     return this.categoryService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.categoryService.findOne(+id);
//   }

//   @Patch(':id')
//   update(
//     @Param('id') id: string,
//     @Body() updateCategoryDto: UpdateCategoryDto,
//   ) {
//     return this.categoryService.update(+id, updateCategoryDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.categoryService.remove(+id);
//   }
// }
