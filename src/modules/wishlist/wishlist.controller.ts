import { Controller, Get, Param, Patch } from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { Types } from 'mongoose';
import { User } from 'src/common/decorarors/user.decorator';
@Controller('wishlist')
export class WishlistController {
  constructor(private readonly _WishlistService: WishlistService) {}

  @Patch(':productId')
  async toggleWishlist(
    @Param('productId') productId: string,
    @User('_id') userId: Types.ObjectId,
  ) {
    return await this._WishlistService.toggleWishlist(productId, userId);
  }

  @Get()
  async getMyWishlist(@User('_id') userId: Types.ObjectId) {
    return await this._WishlistService.getUserWishlist(userId);
  }
}
