import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { OTPRepository } from 'src/DB/repositories/otp.repository';
import { OTPModel } from 'src/DB/models/otp.model';
import { TokenModel } from 'src/DB/models/token.model';
import { TokenRepository } from 'src/DB/repositories/token.repository';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { RolesGuard } from 'src/common/guards/authorization.guards';
import { CartModule } from '../cart/cart.module';
@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtService,
    OTPRepository,
    TokenRepository, // GoogleStrategy
    {
      provide: APP_GUARD, // global guard
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD, // global guard
      useClass: RolesGuard,
    },
  ],
  imports: [UserModule, OTPModel, TokenModel, CartModule],
  exports: [AuthService, JwtService, TokenRepository, UserModule],
})
export class AuthModule {}
