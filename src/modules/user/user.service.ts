import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserRepository } from 'src/DB/repositories/user.repository';
import { CreateUserDto } from './dtos/create-user.dto';
import { compareHash } from 'src/common/security/hash.util';
import { LoginDto } from '../auth/dto/login.dto';
import { UserDocument } from 'src/DB/models/user.model';
import { Types } from 'mongoose';
import { AddAddressDto } from './dtos/add-address.dto';
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

  // إضافة عنوان جديد
  async addAddress(addressData: AddAddressDto, userId: Types.ObjectId) {
    const user = await this._UserRepository.findOne({
      filter: { _id: userId },
    });

    if (!user) {
      throw new NotFoundException('المستخدم غير موجود');
    }

    const currentUser = user as any;
    const isFirstAddress = currentUser.addresses?.length === 0;
    const newAddress = { ...addressData, isDefault: isFirstAddress };

    // 1. نقوم بالتحديث (لا نحتاج لتخزين النتيجة هنا لأنها ستكون القديمة)
    await this._UserRepository.findOneAndUpdate({ _id: userId }, {
      $push: { addresses: newAddress },
    } as any);

    // 2. نقوم بجلب المستخدم مرة أخرى (لضمان الحصول على العناوين الجديدة)
    const updatedUser = await this._UserRepository.findOne({
      filter: { _id: userId },
    });

    return {
      message: 'تم إضافة العنوان بنجاح',
      addresses: (updatedUser as any)?.addresses,
    };
  }

  // حذف عنوان
  async removeAddress(addressId: string, userId: Types.ObjectId) {
    // 1. نقوم بالحذف
    await this._UserRepository.findOneAndUpdate({ _id: userId }, {
      $pull: { addresses: { _id: new Types.ObjectId(addressId) } },
    } as any);

    // 2. نقوم بجلب المستخدم مرة أخرى بعد الحذف
    const updatedUser = await this._UserRepository.findOne({
      filter: { _id: userId },
    });
    console.log(updatedUser);
    return {
      message: 'تم حذف العنوان بنجاح',
      addresses: (updatedUser as any)?.addresses,
    };
  }
}
