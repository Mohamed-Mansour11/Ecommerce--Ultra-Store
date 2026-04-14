import {
  IsString,
  IsNumber,
  IsEnum,
  IsDate,
  IsOptional,
  IsBoolean,
  Min,
  IsNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateCouponDto {
  @IsString()
  @IsNotEmpty({ message: 'كود الكوبون مطلوب' })
  code!: string;

  @IsNumber()
  @Min(0, { message: 'قيمة الخصم لا يمكن أن تكون بالسالب' })
  discount!: number;

  @IsEnum(['percentage', 'fixed'], {
    message: 'نوع الخصم يجب أن يكون percentage أو fixed',
  })
  discountType!: string;

  @IsDate()
  @Type(() => Date) // تحويل النص القادم من الـ Request إلى كائن Date حقيقي
  @IsNotEmpty({ message: 'تاريخ الانتهاء مطلوب' })
  expirationDate!: Date;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsOptional()
  @IsNumber()
  @Min(1, { message: 'حد الاستخدام يجب أن يكون 1 على الأقل' })
  usageLimit?: number;
}
