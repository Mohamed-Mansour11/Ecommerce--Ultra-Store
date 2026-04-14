import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AbstractRepository } from './abstract.repository'; // تأكد من مسار الملف لديك
import { Review, ReviewDocument } from '../models/review.model';

@Injectable()
export class ReviewRepository extends AbstractRepository<ReviewDocument> {
  constructor(@InjectModel(Review.name) reviewModel: Model<ReviewDocument>) {
    // تمرير الموديل للأب (AbstractRepository)
    super(reviewModel);
  }
}
