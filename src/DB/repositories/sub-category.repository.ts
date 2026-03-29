import { Injectable } from '@nestjs/common';
import { AbstractRepository } from './abstract.repository';
import {
  SubCategoryDocument,
  SubCategoryModelName,
} from '../models/sub-category.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SubCategoryRepository extends AbstractRepository<SubCategoryDocument> {
  constructor(
    @InjectModel(SubCategoryModelName) SubCategory: Model<SubCategoryDocument>,
  ) {
    super(SubCategory);
  }
}
