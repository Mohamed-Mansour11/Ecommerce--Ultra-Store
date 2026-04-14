import { Controller, Get, Post, Body, Patch, Delete } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartDto } from './dto/create-cart.dto';
import { Types } from 'mongoose';
import { Roles } from 'src/common/decorarors/roles.decorator';
import { Role } from 'src/DB/enums/user.enum';
import { User } from 'src/common/decorarors/user.decorator';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Roles(Role.user)
  @Post()
  async addToCart(@Body() data: CartDto, @User('_id') userId: Types.ObjectId) {
    return this.cartService.addToCart(data, userId);
  }

  @Roles(Role.user)
  @Patch()
  async updateCart(@Body() data: CartDto, @User('_id') userId: Types.ObjectId) {
    return this.cartService.updateCart(data, userId);
  }

  @Roles(Role.user)
  @Patch('/clear')
  async clearCart(@User('_id') userId: Types.ObjectId) {
    return this.cartService.clearCart(userId);
  }

  @Roles(Role.user)
  @Get()
  async getCart(@User('_id') userId: Types.ObjectId) {
    return this.cartService.getCart(userId);
  }

  @Roles(Role.user)
  @Post('coupon/apply')
  async applyCouponToCart(
    @Body('code') code: string,
    @User('_id') userId: Types.ObjectId,
  ) {
    // هذا هو المسار الفعلي الذي يربط الكوبون بعربة المستخدم ويخصم السعر
    return this.cartService.applyCoupon(userId, code);
  }

  @Roles(Role.user)
  @Delete('coupon/remove')
  async removeCouponFromCart(@User('_id') userId: Types.ObjectId) {
    // إزالة الكوبون من العربة وإعادة حساب السعر الأصلي
    return this.cartService.removeCoupon(userId);
  }
}
