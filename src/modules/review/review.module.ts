import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';
import { ReviewRepository } from 'src/DB/repositories/review.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Review, ReviewSchema } from 'src/DB/models/review.model';
import { OrderModule } from '../order/order.module'; // للتحقق من الشراء
import { ProductModule } from '../product/product.module'; // للتحقق من المنتج
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Review.name, schema: ReviewSchema }]),
    OrderModule, // تأكد من أن الـ OrderModule يعمل له export لـ OrderRepository
    ProductModule,
    AuthModule,
    UserModule,
  ],
  controllers: [ReviewController],
  providers: [ReviewService, ReviewRepository],
})
export class ReviewModule {}
