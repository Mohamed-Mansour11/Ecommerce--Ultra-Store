import { Injectable } from '@nestjs/common';
import { AbstractRepository } from './abstract.repository';
import { OTPDocument, OTPModelName } from './../models/otp.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class OTPRepository extends AbstractRepository<OTPDocument> {
  constructor(@InjectModel(OTPModelName) OTP: Model<OTPDocument>) {
    super(OTP);
  }

  // another methods for OTP as data access layer too
}
