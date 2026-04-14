import { Injectable } from '@nestjs/common';
import { Types } from 'mongoose';
import { WishlistRepository } from 'src/DB/repositories/wishlist.repository';
import { ProductService } from '../product/product.service';

@Injectable()
export class WishlistService {
  constructor(
    private readonly _WishlistRepository: WishlistRepository,
    private readonly _ProductService: ProductService,
  ) {}

  // دالة التبديل (Toggle): إضافة إذا لم يكن موجوداً، حذف إذا كان موجوداً
  async toggleWishlist(productId: string, userId: Types.ObjectId) {
    // التأكد من وجود المنتج أولاً
    await this._ProductService.checkProductExistence(productId as any);

    const isExist = await this._WishlistRepository.findOne({
      filter: { user: userId, product: new Types.ObjectId(productId) as any },
    });

    if (isExist) {
      await this._WishlistRepository.delete({ _id: isExist._id });
      return { message: 'تمت إزالة المنتج من المفضلة' };
    }

    await this._WishlistRepository.create({
      user: userId,
      product: new Types.ObjectId(productId) as any,
    });
    return { message: 'تمت إضافة المنتج إلى المفضلة' };
  }

  // جلب قائمة مفضلة المستخدم
  async getUserWishlist(userId: Types.ObjectId) {
    const result = await this._WishlistRepository.findAll({
      filter: { user: userId },
      populate: {
        path: 'product',
        select: 'name price finalPrice thumbnail discount rateAvg',
      },
    });

    return {
      count: result.totalSize,
      wishlist: result.data,
    };
  }
}
