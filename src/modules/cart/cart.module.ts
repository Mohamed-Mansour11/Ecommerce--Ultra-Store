import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { CartRepository } from 'src/DB/repositories/cart.repository';
import { ProductModule } from '../product/product.module';
import { CartModel } from 'src/DB/models/cart.model';
import { CouponModule } from '../coupon/coupon.module';

@Module({
  controllers: [CartController],
  providers: [CartService, CartRepository],
  imports: [CartModel, ProductModule, CouponModule],
  exports: [CartRepository, CartService],
})
export class CartModule {}
