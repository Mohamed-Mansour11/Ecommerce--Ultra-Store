import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AbstractRepository } from './abstract.repository';
import { Wishlist, WishlistDocument } from '../models/wishlist.model';

@Injectable()
export class WishlistRepository extends AbstractRepository<WishlistDocument> {
  constructor(
    @InjectModel(Wishlist.name) wishlistModel: Model<WishlistDocument>,
  ) {
    super(wishlistModel);
  }
}
