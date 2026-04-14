import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class AddAddressDto {
  @IsNotEmpty() @IsString() city!: string;
  @IsNotEmpty() @IsString() street!: string;
  @IsNotEmpty() @IsString() phone!: string;
  @IsOptional() @IsString() postalCode?: string;
}
