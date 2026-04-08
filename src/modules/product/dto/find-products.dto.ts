import { Types } from 'mongoose';
import {
  IsOptional,
  IsMongoId,
  IsString,
  ValidateNested,
  IsInt,
  Min,
  IsPositive,
  IsNumber,
  IsIn,
} from 'class-validator';
import { Type } from 'class-transformer';

class PriceDto {
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  min?: number;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  max?: number;
}

class SortDto {
  @IsOptional()
  @IsString()
  by?: string;

  @IsOptional()
  @Type(() => Number)
  @IsIn([-1, 1])
  dir?: -1 | 1; // TS level
}

export class FindProductsDto {
  @IsOptional()
  @IsMongoId()
  category?: Types.ObjectId;

  @IsOptional()
  @IsMongoId()
  subCategory?: Types.ObjectId;

  @IsOptional()
  @IsString()
  k?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => PriceDto)
  price?: PriceDto; // price object >>> price[min] price[max]

  @IsOptional()
  @ValidateNested()
  @Type(() => SortDto)
  sort?: SortDto; // sort[dir] sort[by]

  @IsOptional()
  @IsInt()
  @Min(1)
  @IsPositive()
  @Type(() => Number)
  page?: number;
}
