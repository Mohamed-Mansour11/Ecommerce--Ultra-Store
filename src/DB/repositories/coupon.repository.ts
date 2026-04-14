import { CouponModelName } from './../models/coupon.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// استيراد الـ AbstractRepository من مساره في مشروعك (تأكد من المسار الصحيح)
import { AbstractRepository } from './abstract.repository';
// استيراد الموديل والـ Document الخاص بالكوبون
import { CouponDocument } from '../models/coupon.model';

@Injectable()
export class CouponRepository extends AbstractRepository<CouponDocument> {
  // نقوم بحقن موديل الكوبون وتمريره للـ super لكي يفهم الأب (Abstract) مع أي جدول سيتعامل
  constructor(@InjectModel(CouponModelName) Coupon: Model<CouponDocument>) {
    super(Coupon);
  }
}
