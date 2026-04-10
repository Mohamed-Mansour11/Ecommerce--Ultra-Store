import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from 'src/DB/repositories/user.repository';
import { CreateUserDto } from './dtos/create-user.dto';
import { compareHash } from 'src/common/security/hash.util';
import { LoginDto } from '../auth/dto/login.dto';
import { UserDocument } from 'src/DB/models/user.model';
@Injectable()
export class UserService {
  constructor(private readonly _UserRepository: UserRepository) {}

  //create user
  async create(data: Partial<UserDocument>) {
    return this._UserRepository.create({ ...data });
  }

  async validateUser(data: LoginDto) {
    const { email, password } = data;
    const user = await this._UserRepository.findOne({ filter: { email } });
    if (!user || !compareHash(password, user.password))
      throw new UnauthorizedException('Invalid Credentials !');
    return user;
  }

  // check user

  async userExistByEmail(email: string) {
    const user = await this._UserRepository.findOne({ filter: { email } });
    return user;
  }
}
