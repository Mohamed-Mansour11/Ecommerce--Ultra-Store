import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRepository } from 'src/DB/repositories/user.repository';
import { UserModel } from 'src/DB/models/user.model';
import { UserController } from './user.controller';
import { JwtService } from '@nestjs/jwt';
import { TokenRepository } from 'src/DB/repositories/token.repository';
import { TokenModel } from 'src/DB/models/token.model';

@Module({
  imports: [UserModel, TokenModel],
  providers: [UserService, UserRepository, JwtService, TokenRepository],
  exports: [UserService, UserRepository],
  controllers: [UserController],
})
export class UserModule {}
