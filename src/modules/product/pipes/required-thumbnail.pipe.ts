import {
  Injectable,
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class ThumbnailRequiredPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    // التحقق مما إذا كانت قيمة الملفات فارغة أو لا تحتوي على حقل thumbnail
    if (!value || !value.thumbnail) {
      throw new BadRequestException('Thumbnail is required!');
    }

    return value;
  }
}
