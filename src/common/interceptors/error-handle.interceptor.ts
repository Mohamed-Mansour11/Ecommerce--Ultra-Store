import {
  CallHandler,
  ExecutionContext,
  HttpException,
  Injectable,
  InternalServerErrorException,
  BadRequestException, // تم الإضافة للتعامل مع أخطاء المدخلات
  NestInterceptor,
} from '@nestjs/common';
import { catchError, Observable } from 'rxjs';

@Injectable()
export class ErrorHandlingInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      catchError((error) => {
        // 1. إذا كان الخطأ مرسل يدوياً كـ HttpException (مثل NotFoundException) نمرره كما هو
        if (error instanceof HttpException) {
          throw error;
        }

        // 2. معالجة خطأ تكرار البيانات في MongoDB (مثل تكرار الإيميل) - كود 11000
        if (error.code === 11000) {
          const field = Object.keys(error.keyValue || {})[0];
          const value = error.keyValue?.[field];
          throw new BadRequestException(
            `القيمة '${value}' مسجلة بالفعل لحقل '${field}'. يرجى اختيار قيمة أخرى.`,
          );
        }

        // 3. معالجة أخطاء التحقق من البيانات في Mongoose (ValidationError)
        if (error.name === 'ValidationError') {
          const messages = Object.values(error.errors).map(
            (err: any) => err.message,
          );
          throw new BadRequestException({
            message: 'فشل التحقق من البيانات',
            errors: messages,
          });
        }

        // 4. معالجة خطأ الـ ID غير الصحيح (CastError)
        if (error.name === 'CastError') {
          throw new BadRequestException(
            `المعرف (ID) الممرر غير صالح للحقل '${error.path}'`,
          );
        }

        // 5. في حالة الأخطاء غير المتوقعة (الأخطاء البرمجية الصرفة)
        // نطبع الخطأ في الكونسول للمطور للمتابعة
        console.error('🚨 Global Interceptor caught an error:', error);

        const isDev = process.env.NODE_ENV === 'development';

        throw new InternalServerErrorException({
          statusCode: 500,
          message: 'حدث خطأ داخلي غير متوقع في الخادم',
          // نظهر تفاصيل الخطأ فقط في بيئة التطوير لحماية أمن البيانات في الـ Production
          error: isDev ? error.message : 'Internal Server Error',
          stack: isDev ? error.stack : undefined,
        });
      }),
    );
  }
}

// import {
//   CallHandler,
//   ExecutionContext,
//   HttpException,
//   Injectable,
//   InternalServerErrorException,
//   NestInterceptor,
// } from '@nestjs/common';
// import { catchError, Observable } from 'rxjs';

// @Injectable()
// export class ErrorHandlingInterceptor implements NestInterceptor {
//   intercept(
//     context: ExecutionContext,
//     next: CallHandler<any>,
//   ): Observable<any> | Promise<Observable<any>> {
//     return next.handle().pipe(
//       catchError((error) => {
//         if (error instanceof HttpException) {
//           throw error;
//         }
//         const errRes = {
//           error: error.message,
//           stack: error.stack,
//           statusCode: 500,
//         };
//         throw new InternalServerErrorException(errRes);
//       }),
//     );
//   }
// }
