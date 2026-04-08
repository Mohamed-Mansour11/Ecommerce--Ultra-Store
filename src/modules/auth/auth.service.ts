import { UserService } from './../user/user.service';
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { CreateUserDto } from '../user/dtos/create-user.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { OTPRepository } from 'src/DB/repositories/otp.repository';
import { SendOtpDto } from './dto/send-otp.dto';
import * as randomstring from 'randomstring';
import { compareHash } from 'src/common/security/hash.util';
import { TokenRepository } from 'src/DB/repositories/token.repository';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { CartRepository } from 'src/DB/repositories/cart.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly _UserService: UserService,
    private readonly _MailerService: MailerService,
    private readonly _ConfigService: ConfigService,
    private readonly _JwtService: JwtService,
    private readonly _OTPRepository: OTPRepository,
    private readonly _TokenRepository: TokenRepository,
    private readonly _CartRepository: CartRepository,
  ) {}
  async register(data: CreateUserDto) {
    // try {
    const { email, otp } = data;
    const otpDoc = await this._OTPRepository.findOne({ filter: { email } });
    if (!otpDoc || !compareHash(otp, otpDoc.otp))
      throw new NotFoundException('Invalid OTP!');
    await otpDoc.deleteOne();
    const user = await this._UserService.create({
      ...data,
      accountAcctivated: true,
    });
    console.log({ user });
    // create cart for the user
    await this._CartRepository.create({ user: user._id });
    return { success: true, message: 'Done' };
    // } catch (error) {
    //   throw new InternalServerErrorException(error);
    // }  == ErrorHandlingInterceptor
  }

  async login(data: LoginDto) {
    const user = await this._UserService.validateUser(data);
    const access_token = this._JwtService.sign(
      { id: user._id },
      {
        secret: this._ConfigService.get('JWT_SECRET'),
        expiresIn: this._ConfigService.get('ACCESS_TOKEN_EXPIRE'),
      },
    );

    await this._TokenRepository.create({ token: access_token, user: user._id });

    const refresh_token = this._JwtService.sign(
      { id: user._id },
      {
        secret: this._ConfigService.get('JWT_SECRET'),
        expiresIn: this._ConfigService.get('REFRESH_TOKEN_EXPIRE'),
      },
    );
    await this._TokenRepository.create({
      token: refresh_token,
      user: user._id,
    });

    return { success: true, data: { access_token, refresh_token } };
  }

  async sendOtp(data: SendOtpDto) {
    try {
      const { email } = data;
      const user = await this._UserService.userExistByEmail(email);
      if (user) throw new BadRequestException('Email Already Registrated !');
      const otp = await this._OTPRepository.findOne({ filter: { email } });
      if (otp) await otp.deleteOne();
      const newOtp = randomstring.generate(6);
      //send Email
      await this._MailerService.sendMail({
        to: email,
        subject: 'Account Acctivation',
        text: `Your OTP: ${newOtp}`,
      });
      //save to DB
      await this._OTPRepository.create({ email, otp: newOtp });
      return { success: true, message: 'Check Email!' };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async forgetPassword(data: SendOtpDto) {
    try {
      const { email } = data;
      const user = await this._UserService.userExistByEmail(email);
      if (!user) {
        throw new BadRequestException(
          'this Email is not attached to any account',
        );
      }
      if (!user.accountAcctivated) {
        throw new BadRequestException('Account not acctivated yet!');
      }
      const otp = await this._OTPRepository.findOne({ filter: { email } });
      if (otp) await otp.deleteOne();
      const newOtp = randomstring.generate(7);
      this._MailerService.sendMail({
        to: email,
        subject: 'Reset Password',
        text: `Your OTP: ${newOtp}`,
      });
      await this._OTPRepository.create({ email, otp: newOtp });
      return { success: true, message: 'Check Email!' };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async resetPassword(data: ResetPasswordDto) {
    try {
      const { email, password, otp } = data;
      const user = await this._UserService.userExistByEmail(email);
      if (!user) {
        throw new BadRequestException(
          'this Email is not attached to any account',
        );
      }
      if (!user.accountAcctivated) {
        throw new BadRequestException('Account not acctivated yet!');
      }
      const otpDoc = await this._OTPRepository.findOne({ filter: { email } });
      if (!otpDoc || !compareHash(otp, otpDoc.otp))
        throw new BadRequestException('Invalid OTP!');
      user.password = password;
      await user.save();
      // token model
      const tokens = await this._TokenRepository.findAll({
        //data=[]
        filter: { user: user._id },
      });

      if (tokens.data.length) {
        for (const token of tokens.data) {
          token.isValid = false;
          await token.save();
        }
      }
      return { success: true, message: 'try to login now' };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  // // يجب أن تضيف هذا الكود داخل كلاس AuthService الخاص بك

  //   // async: دالة غير متزامنة
  //   // googleLogin: اسم الدالة
  //   // (req: any): تستقبل الطلب (Request) الذي سيحتوي على بيانات المستخدم القادمة من جوجل
  //   async googleLogin(req: any) {
  //     // if (!req.user): إذا لم يكن هناك بيانات مستخدم (مثلاً المستخدم ألغى عملية الدخول من صفحة جوجل)
  //     if (!req.user) {
  //       // نرمي خطأ 400 (طلب غير صالح)
  //       throw new BadRequestException('No user from google');
  //     }

  //     // استخراج الإيميل، الاسم الأول، والاسم الأخير من الكائن الذي أرجعته GoogleStrategy
  //     const { email, firstName, lastName } = req.user;

  //     // البحث في قاعدة البيانات: هل هذا الإيميل موجود لدينا مسبقاً؟
  //     let user = await this._UserService.userExistByEmail(email);

  //     // إذا لم يكن المستخدم موجوداً (هذه أول مرة يدخل فيها لموقعنا باستخدام جوجل)
  //     if (!user) {
  //       // نقوم بإنشاء حساب جديد له فوراً في قاعدة البيانات
  //       user = await this._UserService.create({
  //         email, // نمرر إيميل جوجل
  //         firstName, // الاسم الأول من جوجل
  //         lastName, // الاسم الأخير من جوجل
  //         // نولد كلمة مرور عشوائية معقدة (لأن الدخول سيتم دائماً عبر جوجل ولن يحتاج لكتابة كلمة مرور)
  //         password: randomstring.generate(20),
  //         // نُفعل الحساب فوراً لأن جوجل قد تأكد من صحة الإيميل بالفعل، فلا حاجة لإرسال OTP
  //         accountActivated: true,
  //       });
  //     }

  //     // الآن (سواء كان المستخدم قديماً أو أنشأناه للتو)، نقوم بتوليد التوكنز له
  //     // توليد الـ Access Token قصير الأمد
  //     const access_token = this._JwtService.sign(
  //       { id: user._id },
  //       {
  //         secret: this._ConfigService.get('JWT_SECRET'),
  //         expiresIn: this._ConfigService.get('ACCESS_TOKEN_EXPIRE'),
  //       },
  //     );

  //     // توليد الـ Refresh Token طويل الأمد
  //     const refresh_token = this._JwtService.sign(
  //       { id: user._id },
  //       {
  //         secret: this._ConfigService.get('JWT_SECRET'),
  //         expiresIn: this._ConfigService.get('REFRESH_TOKEN_EXPIRE'),
  //       },
  //     );

  //     // حفظ التوكنز في قاعدة البيانات (كما فعلنا في دالة الـ login العادية لضمان الأمان وإمكانية تسجيل الخروج)
  //     // ملاحظة: تأكد من حقن _TokenRepository في الـ constructor إذا لم يكن موجوداً
  //     await this._TokenRepository.create({ token: access_token, user: user._id });
  //     await this._TokenRepository.create({ token: refresh_token, user: user._id });

  //     // إرجاع التوكنز بنجاح
  //     return { success: true, data: { access_token, refresh_token } };
  //   }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
