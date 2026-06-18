import {
  Injectable,
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
  UnprocessableEntityException,
} from '@nestjs/common';

@Injectable()
export class ThumbnailRequiredPipe implements PipeTransform {
  // تعريف الثوابت الأمنية
  private readonly allowedMimeTypes = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
  ];
  private readonly maxSize = 3 * 1024 * 1024; // الحد الأقصى 3 ميجابايت

  transform(value: any, metadata: ArgumentMetadata) {
    // 1. التحقق من الوجود المبدئي للملفات
    if (!value || !value.thumbnail || value.thumbnail.length === 0) {
      throw new BadRequestException('Thumbnail is required!');
    }

    // 2. فحص أمان الـ Thumbnail
    const thumbnailFile = value.thumbnail[0];
    this.validateFile(thumbnailFile, 'Thumbnail');

    // 3. فحص أمان مصفوفة الصور الإضافية (إن وجدت)
    if (value.images && Array.isArray(value.images)) {
      for (const file of value.images) {
        this.validateFile(file, `Image (${file.originalname})`);
      }
    }

    // إذا مرت كل الفحوصات بسلام، نرجع الملفات للسيرفر
    return value;
  }

  // دالة مساعدة مركزية لفحص نوع وحجم أي ملف
  private validateFile(file: Express.Multer.File, fieldName: string) {
    // فحص نوع الملف (MIME Type)
    if (!this.allowedMimeTypes.includes(file.mimetype)) {
      throw new UnprocessableEntityException(
        `${fieldName}: نوع الملف غير مدعوم. مسموح فقط بـ JPG, PNG, WEBP.`,
      );
    }

    // فحص حجم الملف
    if (file.size > this.maxSize) {
      throw new UnprocessableEntityException(
        `${fieldName}: حجم الملف كبير جداً. الحد الأقصى هو 3 ميجابايت.`,
      );
    }
  }
}