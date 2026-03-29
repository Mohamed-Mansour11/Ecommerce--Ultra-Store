import { Controller, Get, UseGuards } from '@nestjs/common';
import { Public } from 'src/common/decorarors/public.decorator';
import { Roles } from 'src/common/decorarors/roles.decorator';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { Role } from 'src/DB/enums/user.enum';

@Controller('user')
export class UserController {
  //profile
  @Get('/profile')
  @Roles(Role.user, Role.admin, Role.seller)
  //   @UseGuards(AuthGuard) // return true
  profile() {
    return 'Done'; //service
  }
}
