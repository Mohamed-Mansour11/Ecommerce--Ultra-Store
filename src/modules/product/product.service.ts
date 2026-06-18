import { Multer } from 'multer';
import { StockGateway } from './../socket/stock.gateway';
import { ProductDocument } from './../../DB/models/product.model';
import {
  BadRequestException,
  ConflictException,
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

// ==========================================
// 🛡️ Helper Function: حماية الاستعلامات (ReDoS Protection)
// وظيفة هذه الدالة هي تنظيف أي مدخلات نصية تأتي من المستخدم وتجريدها من الرموز 
// البرمجية الخاصة بـ Regex لمنع استهلاك معالج السيرفر (CPU Spiking) واختراقه.
// ==========================================
function escapeRegex(text: string) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

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
    const subCategory = await this._SubCategoryRepository.findOne({
      filter: { _id: subCategoryId },
    });
    if (!subCategory) {
      throw new NotFoundException(
        `SubCategory with id ${subCategoryId} not found!`,
      );
    }

    const isProduct = await this._ProductRepository.findOne({
      filter: { name: data.name },
    });
    if (isProduct) {
      throw new ConflictException(
        `Product with name ${data.name} already exists!`,
      );
    }

    const rootFolder = this._ConfigService.get('CLOUD_ROOT_FOLDER');
    const cloudFolder = `${rootFolder}/product/${nanoid()}`;

    const [thumbnail] = await this._FileUploadService.saveFileToCloud(
      files.thumbnail,
      { folder: cloudFolder },
    );

    let images: Image[] | undefined;
    if (files.images) {
      images = await this._FileUploadService.saveFileToCloud(files.images, {
        folder: cloudFolder,
      });
    }

    const product = await this._ProductRepository.create({
      ...data,
      cloudFolder,
      createdBy: userId,
      subCategory: subCategoryId,
      category: subCategory.category._id,
      thumbnail,
      ...(images && { images }),
    });

    await this.clearProductCache();
    return { data: product };
  }

  async update(
    userId: Types.ObjectId,
    productId: Types.ObjectId,
    data: UpdateProductDto,
  ) {
    const product = await this._ProductRepository.update({
      filter: { _id: productId, createdBy: userId },
      update: { ...data },
    });

    if (!product)
      throw new NotFoundException(`Product with id ${productId} not found!`);

    await this.clearProductCache();
    return { data: product };
  }

  async removeImage(
    productId: Types.ObjectId,
    userId: Types.ObjectId,
    secure_url: string,
  ) {
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

    if (thumbnail?.secure_url == secure_url) {
      if (!images?.length)
        throw new BadRequestException(
          'Cannot remove the only existed image. Please uplaod another one first!',
        );

      await this._FileUploadService.deleteFiles([thumbnail.public_id]);
      const lastImage = images[images.length - 1];
      product.thumbnail = lastImage;
      product.images.pop();
    } else {
      const imageToRemove = images?.find((img) => img.secure_url == secure_url);
      await this._FileUploadService.deleteFiles([imageToRemove!.public_id]);
      product.images = images.filter((img) => img.secure_url != secure_url);
    }

    await product.save();
    await this.clearProductCache();
    return { data: product };
  }

  async addImage(
    productId: Types.ObjectId,
    userId: Types.ObjectId,
    isThumbnail: boolean,
    image: Express.Multer.File,
  ) {
    const product = await this._ProductRepository.findOne({
      filter: { _id: productId, createdBy: userId },
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
    await this.clearProductCache();
    return { data: product };
  }

  async remove(productId: Types.ObjectId, userId: Types.ObjectId) {
    const product = await this._ProductRepository.findOne({
      filter: { _id: productId },
    });

    if (!product) throw new NotFoundException(`Product not found!`);

    await product.deleteOne();
    await this.clearProductCache();
    return { data: product };
  }

  async find(productId: Types.ObjectId) {
    const key = `product:${productId}`;
    const cached = await this.cacheManager.get(key);
    if (cached) return { data: cached };

    const product = await this._ProductRepository.findOne({
      filter: { _id: productId },
    });

    if (!product) {
      throw new NotFoundException(`Product with id ${productId} not found!`);
    }

    await this.cacheManager.set(key, product, 50000);
    return { data: product };
  }

  async testRedis() {
    await this.cacheManager.set('testnestjs', 'Hi');
    const result = await this.cacheManager.get('testnestjs');
    return { data: result };
  }

  async findAll(query: FindProductsDto) {
    const key = `products:${JSON.stringify(query)}`;
    const cached = await this.cacheManager.get(key);
    if (cached) return { data: cached };

    // 🛡️ استخدام الدالة المساعدة لتنظيف مدخلات البحث من أي رموز ضارة
    const safeSearchKey = query.k ? escapeRegex(query.k) : '';

    const products = await this._ProductRepository.findAll({
      filter: {
        ...(query.category && { category: new Types.ObjectId(query.category) }),
        ...(query.k && {
          $or: [
            { name: { $regex: safeSearchKey, $options: 'i' } },
            { description: { $regex: safeSearchKey, $options: 'i' } },
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
          [query.sort.by]: query.sort.dir ? query.sort.dir : 1,
        }),
      },
      paginate: { page: query.page || 1 },
    });

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
    session?: any,
  ) {
    // 🛡️ بناء فلتر ذكي يمنع حدوث Race Condition (Over-selling)
    const filter: any = { _id: productId };
    if (!increment) {
      // لا تسمح بالخصم من المخزون إلا إذا كان المخزون الحالي الفعلي في الداتابيز أكبر من أو يساوي الكمية المطلوبة
      filter.stock = { $gte: quantity };
    }

    const updatedResult = await this._ProductRepository.update({
      filter,
      update: { $inc: { stock: increment ? quantity : -quantity } },
      options: { session },
    } as any);

    // التحقق من نجاح التحديث، وإذا فشل أثناء عملية الخصم فهذا يعني نفاد الكمية بسبب تداخل الطلبات
    if (!updatedResult && !increment) {
      throw new BadRequestException(`فشل تحديث المخزون، الكمية المطلوبة غير متوفرة حالياً للمنتج!`);
    }

    // جلب المنتج المحدث لإرسال التحديثات عبر المقابس (Sockets)
    const updatedProduct = await this._ProductRepository.findOne({
      filter: { _id: productId },
      options: { session },
    } as any);

    if (updatedProduct) {
      this._StockGateway.broadcastStockUpdate(
        updatedProduct._id,
        updatedProduct.stock,
      );
      await this.clearProductCache();
    }

    return updatedProduct;
  }

  public async clearProductCache() {
    try {
      const store = (this.cacheManager as any).store;
      const keys: string[] = await store.keys();

      const productKeys = keys.filter(
        (key) => key.startsWith('products:') || key.startsWith('product:'),
      );

      if (productKeys.length > 0) {
        await Promise.all(productKeys.map((key) => this.cacheManager.del(key)));
        console.log(`[Cache Cleared] Removed ${productKeys.length} keys.`);
      }
    } catch (error) {
      console.error('[Cache Error] Failed to clear product cache:', error);
    }
  }

  async updateProductRating(
    productId: any,
    rateAvg: number,
    rateCount: number,
  ) {
    const roundedAvg = Number(rateAvg.toFixed(1));

    await this._ProductRepository.findOneAndUpdate(
      { _id: productId },
      { rateAvg: roundedAvg, rateCount: rateCount },
      { returnDocument: 'after' },
    );

    await this.clearProductCache();
  }
}