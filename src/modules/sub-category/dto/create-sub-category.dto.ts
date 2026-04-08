import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';
import { Types } from 'mongoose';

export class CreateSubCategoryDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsMongoId()
  @IsNotEmpty()
  category!: Types.ObjectId;
}
