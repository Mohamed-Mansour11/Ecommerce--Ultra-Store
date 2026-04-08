import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { CartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Roles } from 'src/common/decorarors/roles.decorator';
import { Role } from 'src/DB/enums/user.enum';
import { User } from 'src/common/decorarors/user.decorator';
import { Types } from 'mongoose';

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
}
