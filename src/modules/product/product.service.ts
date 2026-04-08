import { Multer } from 'multer';
import { StockGateway } from './../socket/stock.gateway';
import { ProductDocument } from './../../DB/models/product.model';
import {
  BadRequestException,
  Inject,
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
import { FindProductsDto } from './dto/find-products.dto';
import { SubCategoryRepository } from 'src/DB/repositories/sub-category.repository';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from '@nestjs/cache-manager';

@Injectable()
export class ProductService {
  constructor(
    private readonly _ProductRepository: ProductRepository,
    private readonly _CategoryRepository: CategoryRepository,
    private readonly _SubCategoryRepository: SubCategoryRepository,
    private readonly _FileUploadService: FileUploadService,
    private readonly _ConfigService: ConfigService,
    private readonly _StockGateway: StockGateway,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async create(
    userId: Types.ObjectId,
    subCategoryId: Types.ObjectId,
    files: Record<string, Express.Multer.File[]>,
    data: CreateProductDto,
  ) {
    // 1. التحقق من وجود الفئة (Category)
    const subCategory = await this._SubCategoryRepository.findOne({
      filter: { _id: subCategoryId },
    });
    if (!subCategory) {
      throw new NotFoundException(
        `SubCategory with id ${subCategoryId} not found!`,
      );
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
      subCategory: subCategoryId,
      category: subCategory.category._id,
      thumbnail,
      ...(images && { images }), // إضافة مصفوفة الصور فقط إذا كانت موجودة
    });

    // إرجاع النتيجة النهائية
    return { data: product };
  }

  async update(
    userId: Types.ObjectId,
    productId: Types.ObjectId,
    data: UpdateProductDto,
  ) {
    const product = await this._ProductRepository.update({
      filter: { _id: productId, createdBy: userId }, // check owner
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

  async addImage(
    productId: Types.ObjectId,
    userId: Types.ObjectId,
    isThumbnail: boolean,
    image: Express.Multer.File,
  ) {
    const product = await this._ProductRepository.findOne({
      filter: {
        _id: productId,
        createdBy: userId,
      },
    });

    if (!product)
      throw new NotFoundException(`Product with id ${productId} not found!`);

    if (!image) throw new BadRequestException(`Image is required!`);

    if (isThumbnail) {
      const [thumbnail] = await this._FileUploadService.saveFileToCloud(
        [image],
        {
          public_id: product.thumbnail.public_id,
        },
      );

      product.thumbnail = thumbnail;
    } else {
      const results = await this._FileUploadService.saveFileToCloud([image], {
        folder: product.cloudFolder,
      });

      product.images.push(results[0]);
    }

    await product.save();

    return { data: product };
  }

  async remove(productId: Types.ObjectId, userId: Types.ObjectId) {
    const product = await this._ProductRepository.findOne({
      filter: { _id: productId },
    });

    if (!product) throw new NotFoundException(`Product not found!`);

    await product.deleteOne();

    return { data: product };
  }

  async find(productId: Types.ObjectId) {
    const product = await this._ProductRepository.findOne({
      filter: { _id: productId },
    });

    if (!product) {
      throw new NotFoundException(`Product with id ${productId} not found!`);
    }

    return { data: product };
  }

  async testRedis() {
    // set key
    await this.cacheManager.set('testnestjs', 'Hi');
    // get key
    const result = await this.cacheManager.get('testnestjs');

    return { data: result };
  }

  async findAll(query: FindProductsDto) {
    const key = `products:${JSON.stringify(query)}`;
    const cached = await this.cacheManager.get(key);
    if (cached) return { data: cached };
    const products = await this._ProductRepository.findAll({
      filter: {
        ...(query.category && {
          category: new Types.ObjectId(query.category),
        }),
        ...(query.k && {
          $or: [
            { name: { $regex: query.k, $options: 'i' } },
            { description: { $regex: query.k, $options: 'i' } },
          ],
        }),
        ...(query.price && {
          finalPrice: {
            ...(query.price.min !== undefined && { $gte: query.price.min }),
            ...(query.price.max !== undefined && { $lte: query.price.max }),
          },
        }),
      },
      sort: {
        ...(query.sort?.by && {
          [query.sort.by]: query.sort.dir ? query.sort.dir : 1, // {price: 1}
        }),
      },
      paginate: { page: query.page || 1 },
    });
    // cache
    await this.cacheManager.set(key, products, 50000);
    return { data: products };
  }

  async checkProductExistence(productId: Types.ObjectId) {
    const product = await this._ProductRepository.findOne({
      filter: { _id: productId },
    });
    if (!product) throw new NotFoundException('Product not found!');
    return product;
  }

  inStock(product: ProductDocument, requiredQuantity: number) {
    return product.stock >= requiredQuantity;
  }

  async updateStock(
    productId: Types.ObjectId,
    quantity: number,
    increment: boolean,
  ) {
    const product = await this._ProductRepository.update({
      filter: { _id: productId },
      update: { $inc: { stock: increment ? quantity : -quantity } }, // inc + , - dec
    });

    // socket
    this._StockGateway.broadcastStockUpdate(product!._id, product!.stock);

    return product;
  }
}
