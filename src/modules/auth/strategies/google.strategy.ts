// // استيراد Injectable لحقن هذا الكلاس في الـ Module
// import { Injectable } from '@nestjs/common';
// // استيراد PassportStrategy وهو كلاس أساسي من NestJS للتعامل مع استراتيجيات المصادقة
// import { PassportStrategy } from '@nestjs/passport';
// // استيراد Strategy (استراتيجية جوجل) و VerifyCallback (دالة التأكيد) من مكتبة جوجل
// import { Strategy, VerifyCallback } from 'passport-google-oauth20';
// // استيراد ConfigService لقراءة مفاتيح جوجل من ملف .env
// import { ConfigService } from '@nestjs/config';

// @Injectable()
// // كلاس GoogleStrategy يرث من PassportStrategy ونحدد له أننا سنستخدم استراتيجية (Strategy) ونسميها 'google'
// export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {

//   // الدالة البناءة لحقن ConfigService
//   constructor(private configService: ConfigService) {
//     // super: استدعاء الدالة البناءة للكلاس الأب (PassportStrategy) وتمرير إعدادات جوجل إليها
//     super({
//       // clientID: رقم الهوية الخاص بتطبيقك (نحصل عليه من Google Cloud Console)
//       clientID: configService.get<string>('GOOGLE_CLIENT_ID'),
//       // clientSecret: الرقم السري الخاص بتطبيقك (من Google أيضاً)
//       clientSecret: configService.get<string>('GOOGLE_CLIENT_SECRET'),
//       // callbackURL: المسار الذي سيقوم جوجل بإرجاع المستخدم إليه بعد الموافقة
//       callbackURL: configService.get<string>('GOOGLE_CALLBACK_URL'),
//       // scope: الصلاحيات التي نطلبها من جوجل (نريد الإيميل والمعلومات الشخصية)
//       scope: ['email', 'profile'],
//     });
//   }

//   // validate: دالة تُنفذ تلقائياً بمجرد أن يعيد جوجل المستخدم إلينا بنجاح
//   // accessToken: توكن من جوجل (لا يهمنا كثيراً هنا)
//   // refreshToken: توكن لتجديد بيانات جوجل (لا يهمنا هنا)
//   // profile: الكنز! هذا المتغير يحتوي على بيانات المستخدم القادمة من جوجل (اسمه، صورته، إيميله)
//   // done: دالة نستدعيها لنخبر Passport أننا انتهينا
//   async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {

//     // استخراج الاسم والإيميلات والصورة من البروفايل القادم من جوجل
//     const { name, emails, photos } = profile;

//     // بناء كائن (Object) نظيف يحتوي على البيانات التي تهمنا فقط
//     const user = {
//       email: emails[0].value, // نأخذ الإيميل الأساسي
//       firstName: name.givenName, // الاسم الأول
//       lastName: name.familyName, // الاسم الأخير
//       picture: photos[0].value, // رابط الصورة الشخصية
//       // ملاحظة: لا يوجد Password هنا لأن الدخول تم عبر جوجل
//     };

//     // استدعاء دالة done، المعامل الأول للخطأ (null لأنه لا يوجد خطأ)، والثاني هو بيانات المستخدم
//     // بمجرد تنفيذ هذا السطر، سيتم إرسال هذا الـ user إلى الـ Controller
//     done(null, user);
//   }
// }
