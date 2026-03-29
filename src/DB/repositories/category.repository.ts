import { Injectable } from '@nestjs/common';
import { AbstractRepository } from './abstract.repository';
import { CategoryDocument, CategoryModelName } from '../models/category.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CategoryRepository extends AbstractRepository<CategoryDocument> {
  constructor(
    @InjectModel(CategoryModelName) Category: Model<CategoryDocument>,
  ) {
    super(Category);
  }
}
