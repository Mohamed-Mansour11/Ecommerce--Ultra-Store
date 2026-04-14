import {
  Injectable,
  NotFoundException,
  Inject,
  forwardRef,
} from '@nestjs/common';
import { Types } from 'mongoose';
import { ConfigService } from '@nestjs/config';
import { FileUploadService } from 'src/common/services/fileupload/fileupload.service';
import { SubCategoryRepository } from 'src/DB/repositories/sub-category.repository';
import { CategoryRepository } from 'src/DB/repositories/category.repository';
import { CreateSubCategoryDto } from './dto/create-sub-category.dto';
import { UpdateSubCategoryDto } from './dto/update-sub-category.dto';
import { nanoid } from 'nanoid';
import { ProductService } from '../product/product.service';

@Injectable()
export class SubCategoryService {
  constructor(
    private readonly _FileUploadService: FileUploadService,
    private readonly _configService: ConfigService,
    private readonly _SubCategoryRepository: SubCategoryRepository,
    private readonly _CategoryRepository: CategoryRepository,
    // حقن ProductService باستخدام forwardRef لفك الارتباط الدائري
    @Inject(forwardRef(() => ProductService))
    private readonly _ProductService: ProductService,
  ) {}

  async create(
    data: CreateSubCategoryDto,
    userId: Types.ObjectId,
    file: Express.Multer.File,
  ) {
    const categoryExists = await this._CategoryRepository.findOne({
      filter: { _id: data.category },
    });

    if (!categoryExists) {
      throw new NotFoundException(
        `Category with id ${data.category} not found!`,
      );
    }

    const rootfolder = this._configService.get('CLOUD_ROOT_FOLDER');
    const cloudFolder = nanoid();

    const results = await this._FileUploadService.saveFileToCloud([file], {
      folder: `${rootfolder}/subcategory/${cloudFolder}`,
    });

    const subCategory = await this._SubCategoryRepository.create({
      name: data.name,
      category: data.category,
      cloudFolder,
      image: results[0],
      createdBy: userId,
    });

    return { data: subCategory };
  }

  async update(
    subCategoryId: Types.ObjectId,
    updateSubCategoryDto: UpdateSubCategoryDto,
    userId: Types.ObjectId,
  ) {
    const subCategory = await this._SubCategoryRepository.findOne({
      filter: { _id: subCategoryId },
    });

    if (!subCategory) {
      throw new NotFoundException(
        `SubCategory with id ${subCategoryId} not found!`,
      );
    }

    if (updateSubCategoryDto.name) {
      subCategory.name = updateSubCategoryDto.name;
      subCategory.updatedBy = userId;
      await subCategory.save();

      //  مسح كاش المنتجات لأن اسم القسم الفرعي تغير (يؤثر على الـ Populate)
      await this._ProductService.clearProductCache();
    }

    return { data: subCategory };
  }

  async updateImage(
    subCategoryId: Types.ObjectId,
    file: Express.Multer.File,
    userId: Types.ObjectId,
  ) {
    const subCategory = await this._SubCategoryRepository.findOne({
      filter: { _id: subCategoryId },
    });

    if (!subCategory) {
      throw new NotFoundException(
        `SubCategory with id ${subCategoryId} not found!`,
      );
    }

    const public_id = subCategory.image.public_id;
    const results = await this._FileUploadService.saveFileToCloud([file], {
      public_id,
    });

    subCategory.image = results[0];
    subCategory.updatedBy = userId;
    await subCategory.save();

    //  مسح الكاش عند تغيير الصورة
    await this._ProductService.clearProductCache();

    return { data: subCategory };
  }

  async remove(subCategoryId: Types.ObjectId, userId: Types.ObjectId) {
    const subCategory = await this._SubCategoryRepository.findOne({
      filter: { _id: subCategoryId },
    });

    if (!subCategory) {
      throw new NotFoundException(
        `SubCategory with id ${subCategoryId} not found!`,
      );
    }

    await subCategory.deleteOne();

    //  مسح كاش المنتجات بعد حذف القسم الفرعي
    await this._ProductService.clearProductCache();

    return { message: 'done' };
  }

  async findOne(subCategoryId: Types.ObjectId) {
    const subCategory = await this._SubCategoryRepository.findOne({
      filter: { _id: subCategoryId },
    });

    if (!subCategory) {
      throw new NotFoundException(
        `SubCategory with id ${subCategoryId} not found!`,
      );
    }

    return { data: subCategory };
  }

  async findAll(page: number) {
    return {
      data: await this._SubCategoryRepository.findAll({
        populate: [
          { path: 'createdBy' },
          { path: 'category', select: 'name image' },
        ],
        paginate: { page },
      }),
    };
  }
}
