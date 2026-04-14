import { Module } from '@nestjs/common';
import { CouponController } from './coupon.controller';
import { CouponService } from './coupon.service';
import { CouponRepository } from 'src/DB/repositories/coupon.repository';

// استيراد الموديل الجاهز الذي قمت بإنشائه في ملف schema
import { CouponModel } from 'src/DB/models/coupon.model';

@Module({
  imports: [
    // تسجيل جدول الكوبونات في قاعدة البيانات
    CouponModel,
  ],
  // (APIs) تسجيل الكونترولر ليستقبل الروابط
  controllers: [CouponController],
  // تسجيل البروفايدرز (الخدمة والمستودع)
  providers: [CouponService, CouponRepository],
  exports: [CouponService],
})
export class CouponModule {}
