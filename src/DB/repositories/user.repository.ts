import { Injectable } from '@nestjs/common';
import { AbstractRepository } from './abstract.repository';
import { UserDocument, UserModelName } from '../models/user.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserRepository extends AbstractRepository<UserDocument> {
  constructor(@InjectModel(UserModelName) User: Model<UserDocument>) {
    super(User);
  }

  // another methods for user as data access layer too
}
