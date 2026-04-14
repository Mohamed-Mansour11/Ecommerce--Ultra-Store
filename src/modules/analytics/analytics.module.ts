import { Module } from '@nestjs/common';
import { AnalyticsController } from './analytics.controller';
import { AnalyticsService } from './analytics.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from 'src/DB/models/order.model';
import { Coupon, CouponSchema } from 'src/DB/models/coupon.model';
import { User, UserSchema } from 'src/DB/models/user.model';

@Module({
  imports: [
    // حقن الموديلات لكي نستخدمها في الـ Aggregation
    MongooseModule.forFeature([
      { name: Order.name, schema: OrderSchema },
      { name: Coupon.name, schema: CouponSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
  controllers: [AnalyticsController],
  providers: [AnalyticsService],
})
export class AnalyticsModule {}
