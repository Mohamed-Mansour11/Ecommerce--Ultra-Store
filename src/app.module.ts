import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { CategoryModule } from './modules/category/category.module';
import { ProductModule } from './modules/product/product.module';
import { SubCategoryModule } from './modules/sub-category/sub-category.module';
import { CartModule } from './modules/cart/cart.module';
import { OrderModule } from './modules/order/order.module';
import { CacheableMemory, createKeyv, Keyv } from 'cacheable';
import { CacheModule } from '@nestjs/cache-manager';
import { CouponModule } from './modules/coupon/coupon.module';
import { ReviewModule } from './modules/review/review.module';
import { AnalyticsModule } from './modules/analytics/analytics.module';
import { WishlistModule } from './modules/wishlist/wishlist.module';

// 👈 [تصحيح]: الاستيرادات الناقصة المطلوبة لتشغيل نظام حماية الـ Rate Limiting
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    ThrottlerModule.forRoot([{
      ttl: 60000, // المدة بالملي ثانية (دقيقة واحدة)
      limit: 10, // أقصى عدد طلبات في الدقيقة لكل IP
    }]),
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('MONGO_URI'),
      }),
    }),
    MailerModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          transport: {
            host: configService.get('HOST'),
            auth: {
              user: configService.get('EMAIL'),
              pass: configService.get('PASS'),
            },
          },
          from: configService.get('EMAIL'),
        };
      },
    }),

    CacheModule.registerAsync({
      useFactory: (configService: ConfigService) => {
        return {
          stores: [
            new Keyv({
              store: new CacheableMemory(),
              ttl: configService.get('TTL'),
            }),
            createKeyv(configService.get('REDIS_LOCAL')),
            // createKeyv(configService.get('REDIS_CLOUD')),
          ],
        };
      },
      inject: [ConfigService],
      isGlobal: true,
    }),

    UserModule,
    CategoryModule,
    ProductModule,
    SubCategoryModule,
    CartModule,
    OrderModule,
    CouponModule,
    ReviewModule,
    AnalyticsModule,
    WishlistModule,
  ],

  controllers: [AppController],
  providers: [
    AppService, 
    //  هذا السطر الآن سيعمل بامتياز بعد توفير الاستيرادات أعلاه
    { provide: APP_GUARD, useClass: ThrottlerGuard }
  ],
})
export class AppModule {}