import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dtos/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { SendOtpDto } from './dto/send-otp.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { Public } from 'src/common/decorarors/public.decorator';
@Controller('auth')
@Public()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  register(@Body() data: CreateUserDto) {
    return this.authService.register(data);
  }

  @Post('login')
  login(@Body() data: LoginDto) {
    return this.authService.login(data);
  }

  @Post('/send-otp')
  sendOtp(@Body() data: SendOtpDto) {
    return this.authService.sendOtp(data);
  }

  @Post('/forget-password')
  forgetPassword(@Body() data: SendOtpDto) {
    return this.authService.forgetPassword(data);
  }

  @Post('/reset-password')
  resetPassword(@Body() data: ResetPasswordDto) {
    return this.authService.resetPassword(data);
  }

  //   // @Get('google'): مسار GET يفتح نافذة تسجيل الدخول الخاصة بجوجل
  //   @Get('google')
  //   // @UseGuards(AuthGuard('google')): هذا الديكوريتور السحري يخبر NestJS بتشغيل ملف google.strategy.ts الذي كتبته
  //   // بمجرد أن يزور المستخدم رابط /auth/google، السيرفر لن يكمل تنفيذ هذه الدالة، بل سيحوله فوراً لصفحة جوجل!
  //   @UseGuards(AuthGuard('google'))
  //   async googleAuth(@Req() req) {
  //     // هذه الدالة تُترك فارغة لأن الـ Guard سيقوم بكل العمل (عمل Redirect إلى جوجل)
  //   }

  //   // @Get('google/callback'): هذا هو المسار الذي سيعود إليه المستخدم بعد أن يضغط "موافق" في صفحة جوجل
  //   @Get('google/callback')
  //   // نستخدم Guard جوجل مرة أخرى، ولكن هذه المرة ليقوم باستلام بيانات المستخدم من جوجل وتمريرها في المتغير req.user
  //   @UseGuards(AuthGuard('google'))
  //   // @Req() req: لاستخراج الطلب المحمل ببيانات المستخدم
  //   // @Res() res: لاستخراج كائن الاستجابة (Response) لأننا سنحتاج لعمل إعادة توجيه (Redirect) للفرونت اند
  //   async googleAuthRedirect(@Req() req, @Res() res) {

  //     // استدعاء دالة googleLogin التي كتبناها في الـ Service وتمرير الطلب لها
  //     const result = await this.authService.googleLogin(req);

  //     // نقطة معمارية هامة (Mentor Note):
  //     // الدخول عبر جوجل يتم من خلال متصفح (Browser Navigation) وليس طلب AJAX/Axios عادي.
  //     // لذلك لا يمكننا إرجاع { success: true } كـ JSON لأن المستخدم سيرى شاشة بيضاء بها نص JSON.
  //     // الحل الصحيح هو تحويله (Redirect) إلى موقع الفرونت اند الخاص بنا (مثلاً React أو Angular)
  //     // وتمرير التوكنز في الرابط (URL Parameters) لكي يقوم الفرونت اند بقراءتها وحفظها في الـ LocalStorage.

  //     const frontendUrl = 'http://localhost:4000/login/success'; // ضع هنا رابط الفرونت اند الحقيقي الخاص بك
  //     return res.redirect(`${frontendUrl}?access_token=${result.data.access_token}&refresh_token=${result.data.refresh_token}`);
  //   }
  // }

  // @Get()
  // findAll() {
  //   return this.authService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.authService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
  //   return this.authService.update(+id, updateAuthDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.authService.remove(+id);
  // }
}
