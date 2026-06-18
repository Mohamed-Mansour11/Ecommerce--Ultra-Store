import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet'; 
import { ErrorHandlingInterceptor } from './common/interceptors/error-handle.interceptor';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    rawBody: true,
  });
  
  app.use(helmet()); // الآن ستعمل بنجاح

  // تفعيل CORS مع تحديد النطاقات المسموحة للفرونت إند فقط
  app.enableCors({
    origin: ['http://localhost:3000', 'https://your-frontend-domain.com'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // مهم جداً إذا كنت تستخدم الكوكيز مستقبلاً
  });

  app.set('query parser', 'extended');
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );

  app.useGlobalInterceptors(new ErrorHandlingInterceptor());

  const configService = app.get<ConfigService>(ConfigService);
  const port = configService.get<number>('PORT', 5000);

  await app.listen(port);
  console.log('Ecommerce listining on port: ', port);
}
bootstrap();