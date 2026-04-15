import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Types } from 'mongoose';
import { CouponRepository } from 'src/DB/repositories/coupon.repository';

import { CreateCouponDto } from './dto/create-coupon.dto';

@Injectable()
export class CouponService {
  constructor(private readonly _CouponRepository: CouponRepository) {}

  // دالة تطبيق الكوبون وحساب قيمة التعويض/الخصم

  async applyCoupon(code: string, originalPrice: number) {
    if (!code) {
      throw new BadRequestException('Coupon code is required!');
    }

    const cleanCode = code.trim().toUpperCase();

    const coupon = await this._CouponRepository.findOne({
      filter: { code: cleanCode },
    });

    if (!coupon) {
      throw new NotFoundException('Invalid coupon code!');
    }

    if (!coupon.isActive) {
      throw new BadRequestException('This coupon is currently disabled!');
    }

    if (new Date(coupon.expirationDate) < new Date()) {
      throw new BadRequestException('This coupon has expired!');
    }

    if (coupon.usageLimit !== null && coupon.usedCount >= coupon.usageLimit) {
      throw new BadRequestException(
        'This coupon has reached its maximum usage limit!',
      );
    }

    let discountAmount = 0;

    if (coupon.discountType === 'percentage') {
      discountAmount = originalPrice * (coupon.discount / 100);
    } else if (coupon.discountType === 'fixed') {
      discountAmount = coupon.discount;
    }

    const finalPrice = Math.max(0, originalPrice - discountAmount);

    return {
      couponId: coupon._id as Types.ObjectId,
      originalPrice,
      discountAmount,
      finalPrice,
    };
  }

  // دالة زيادة عداد الاستخدام (نستدعيها بعد نجاح عملية الدفع الفعلي)

  async incrementUsage(couponId: Types.ObjectId, session?: any) {
    if (!couponId) return;

    await this._CouponRepository.update({
      filter: { _id: couponId },
      update: { $inc: { usedCount: 1 } },
      options: { session },
    } as any);
  }

  // دالة إنشاء الكوبون (خاصة بالأدمن)

  async createCoupon(data: CreateCouponDto, userId: Types.ObjectId) {
    const coupon = await this._CouponRepository.create({
      ...data,
      createdBy: userId,
    });

    return coupon;
  }
}
