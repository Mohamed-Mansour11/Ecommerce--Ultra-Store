import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from 'src/DB/repositories/product.repository';
import { CategoryRepository } from 'src/DB/repositories/category.repository';
import { FileUploadService } from 'src/common/services/fileupload/fileupload.service';
import { ConfigService } from '@nestjs/config';
import { Types } from 'mongoose';
import { Image } from 'src/common/types/image.type';
import { nanoid } from 'nanoid';

@Injectable()
export class ProductService {
  constructor(
    private readonly _ProductRepository: ProductRepository,
    private readonly _CategoryRepository: CategoryRepository,
    private readonly _FileUploadService: FileUploadService,
    private readonly _ConfigService: ConfigService,
  ) {}

  async create(
    userId: Types.ObjectId,
    categoryId: Types.ObjectId,
    files: Record<string, Express.Multer.File[]>,
    data: CreateProductDto,
  ) {
    // 1. التحقق من وجود الفئة (Category)
    const category = await this._CategoryRepository.findOne({
      filter: { _id: categoryId },
    });
    if (!category) {
      throw new NotFoundException(`Category with id ${categoryId} not found!`);
    }

    // 2. التحقق من عدم تكرار اسم المنتج
    const isProduct = await this._ProductRepository.findOne({
      filter: { name: data.name },
    });
    if (isProduct) {
      throw new NotFoundException(
        `Product with name ${data.name} already existed!`,
      );
    }

    // 3. إعداد مسار المجلد على Cloudinary
    const rootFolder = this._ConfigService.get('CLOUD_ROOT_FOLDER');
    const cloudFolder = `${rootFolder}/product/${nanoid()}`;

    // 4. رفع الصورة المصغرة (Thumbnail) - إجبارية
    const [thumbnail] = await this._FileUploadService.saveFileToCloud(
      files.thumbnail,
      { folder: cloudFolder },
    );

    // 5. رفع معرض الصور (Images) - اختيارية
    let images: Image[] | undefined;
    if (files.images) {
      images = await this._FileUploadService.saveFileToCloud(files.images, {
        folder: cloudFolder,
      });
    }

    // 6. إنشاء المنتج في قاعدة البيانات
    const product = await this._ProductRepository.create({
      ...data,
      cloudFolder,
      createdBy: userId,
      category: categoryId,
      thumbnail,
      ...(images && { images }), // إضافة مصفوفة الصور فقط إذا كانت موجودة
    });

    // 7. إرجاع النتيجة النهائية
    return { data: product };
  }

  findAll() {
    // سيتم إضافة منطق جلب الكل هنا لاحقاً
  }

  async update(
    userId: Types.ObjectId,
    productId: Types.ObjectId,
    data: UpdateProductDto,
  ) {
    const product = await this._ProductRepository.update({
      filter: { _id: productId, createdBy: userId }, // check the owner
      update: { ...data },
    });

    if (!product)
      throw new NotFoundException(`Product with id ${productId} not found!`);
    return { data: product };
  }

  async removeImage(
    productId: Types.ObjectId,
    userId: Types.ObjectId,
    secure_url: string,
  ) {
    // pId, seller, secure_url
    const product = await this._ProductRepository.findOne({
      filter: {
        _id: productId,
        createdBy: userId,
        $or: [
          { 'thumbnail.secure_url': secure_url },
          { 'images.secure_url': secure_url },
        ],
      },
    });

    if (!product)
      throw new NotFoundException(`Product with id ${productId} not found!`);

    const { thumbnail, images } = product;

    // secure url >>> thumbnail
    if (thumbnail?.secure_url == secure_url) {
      if (!images?.length)
        throw new BadRequestException(
          'Cannot remove the only existed image. Please uplaod another one first!  ',
        );

      await this._FileUploadService.deleteFiles([thumbnail.public_id]);

      // replace the thumbnail
      const lastImage = images[images.length - 1];
      product.thumbnail = lastImage;

      // remove from the images
      product.images.pop();
    } else {
      // secure_url >>> images ... images 3
      const imageToRemove = images?.find((img) => img.secure_url == secure_url);

      await this._FileUploadService.deleteFiles([imageToRemove!.public_id]);

      product.images = images.filter((img) => img.secure_url != secure_url);
    }

    await product.save();

    return { data: product };
  }
}
