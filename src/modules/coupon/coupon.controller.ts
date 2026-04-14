import { Body, Controller, Post } from '@nestjs/common';
import { CouponService } from './coupon.service';
import { Types } from 'mongoose';
import { Roles } from 'src/common/decorarors/roles.decorator';
import { Role } from 'src/DB/enums/user.enum';
import { User } from 'src/common/decorarors/user.decorator';
import { CreateCouponDto } from './dto/create-coupon.dto';

@Controller('coupons')
export class CouponController {
  constructor(private readonly _CouponService: CouponService) {}

  @Roles(Role.user, Role.admin)
  @Post('create')
  async create(
    @Body() data: CreateCouponDto,
    @User('_id') adminId: Types.ObjectId,
  ) {
    const result = await this._CouponService.createCoupon(data, adminId);

    return {
      message: 'تم إنشاء الكوبون بنجاح',
      data: result,
    };
  }
}
