import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { OrderRepository } from 'src/DB/repositories/order.repository';
import { OrderModel } from 'src/DB/models/order.model';
import { ProductModule } from '../product/product.module';
import { CartModule } from '../cart/cart.module';
import { PaymentModule } from 'src/common/services/payment/payment.module';
import { CouponModule } from '../coupon/coupon.module';

@Module({
  imports: [OrderModel, ProductModule, CartModule, PaymentModule, CouponModule],
  controllers: [OrderController],
  providers: [OrderService, OrderRepository],
  exports: [OrderService, OrderRepository],
})
export class OrderModule {}
