import { TokenModelName, TokenDocument } from './../models/token.model';
import { Injectable } from '@nestjs/common';
import { AbstractRepository } from './abstract.repository';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TokenRepository extends AbstractRepository<TokenDocument> {
  constructor(@InjectModel(TokenModelName) Token: Model<TokenDocument>) {
    super(Token);
  }
}
