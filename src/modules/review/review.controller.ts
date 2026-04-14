import { AuthGuard } from './../../common/guards/auth.guard';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { User } from 'src/common/decorarors/user.decorator'; // الـ Decorator لجلب الـ User
import { Types } from 'mongoose';
import { UseGuards } from '@nestjs/common';

@Controller('review')
export class ReviewController {
  constructor(private readonly _ReviewService: ReviewService) {}

  // إضافة تقييم (مغلق للمستخدمين المسجلين فقط)
  @Post()
  @UseGuards(AuthGuard)
  async addReview(
    @Body() body: CreateReviewDto,
    @User('_id') userId: Types.ObjectId,
  ) {
    return await this._ReviewService.addReview(body, userId);
  }

  // جلب تقييمات منتج (مفتوح للعامة لكي يقرأها الزوار)
  @Get(':productId')
  async getProductReviews(@Param('productId') productId: string) {
    return await this._ReviewService.getProductReviews(productId);
  }
}
