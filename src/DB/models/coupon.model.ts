import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
// استيراد موديل المستخدم لربط الكوبون بالمدير الذي قام بإنشائه (نفس طريقتك في المنتج)
import { UserModelName } from './user.model';

@Schema({ timestamps: true })
export class Coupon {
  @Prop({
    type: String,
    required: true,
    unique: true,
    index: { name: 'Coupon_code_index' }, // تسريع البحث عن الكوبون في الداتا بيز
    set: function (this: any, value: string) {
      // بدلًا من تحويل الحروف لـ Capital يدوياً في الـ Service،
      // هذه الدالة ستقوم بتحويل أي كود إلى حروف كبيرة تلقائياً قبل الحفظ
      return value.toUpperCase();
    },
  })
  code!: string;

  @Prop({ type: Types.ObjectId, ref: UserModelName, required: true })
  createdBy!: Types.ObjectId; // لتسجيل من هو الأدمن الذي أنشأ هذا الكوبون

  @Prop({ type: Number, required: true, min: 0 })
  discount!: number; // قيمة الخصم (سواء نسبة أو مبلغ)

  @Prop({ type: String, required: true, enum: ['percentage', 'fixed'] })
  discountType!: string; // نوع الخصم: نسبة مئوية أو مبلغ ثابت

  @Prop({ type: Date, required: true })
  expirationDate!: Date; // تاريخ انتهاء الكوبون

  @Prop({ type: Boolean, default: true })
  isActive!: boolean; // للتحكم في إيقاف وتشغيل الكوبون بضغطة زر

  @Prop({ type: Number, default: null })
  usageLimit!: number; // الحد الأقصى للاستخدام (null تعني مفتوح)

  @Prop({ type: Number, default: 0 })
  usedCount!: number; // عداد الاستخدام الفعلي
}

// --- إنشاء الـ Schema والـ Model ---

export const CouponSchema = SchemaFactory.createForClass(Coupon);

export const CouponModelName = Coupon.name;

// تصدير الموديول جاهزاً ليتم استيراده مباشرة في الـ app.module أو الـ order.module
export const CouponModel = MongooseModule.forFeature([
  { name: CouponModelName, schema: CouponSchema },
]);

// تعريف الـ Document الخاص بالكوبون ليساعد TypeScript في الإكمال التلقائي
export type CouponDocument = HydratedDocument<Coupon>;
