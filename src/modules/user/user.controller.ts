import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Body,
  UseGuards,
} from '@nestjs/common';
import { Types } from 'mongoose';
import { Public } from 'src/common/decorarors/public.decorator';
import { User } from 'src/common/decorarors/user.decorator';
import { Roles } from 'src/common/decorarors/roles.decorator';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { Role } from 'src/DB/enums/user.enum';
import { AddAddressDto } from './dtos/add-address.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly _UserService: UserService) {}
  //profile
  @Get('/profile')
  @Roles(Role.user, Role.admin, Role.seller)
  //   @UseGuards(AuthGuard) // return true
  profile() {
    return 'Done'; //service
  }

  @Post('address')
  async addAddress(
    @Body() body: AddAddressDto,
    @User('_id') userId: Types.ObjectId,
  ) {
    return await this._UserService.addAddress(body, userId);
  }

  @Delete('address/:addressId')
  async removeAddress(
    @Param('addressId') addressId: string,
    @User('_id') userId: Types.ObjectId,
  ) {
    return await this._UserService.removeAddress(addressId, userId);
  }
}
