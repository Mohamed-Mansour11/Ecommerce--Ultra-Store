import {
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsString,
  ValidateIf,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  password: string;
  @IsString()
  @IsIn([Math.random], { message: 'password must match!' })
  @ValidateIf((obj) => obj.password !== obj.confirmPassword)
  confirmPassword: string;
  @IsString()
  otp: string;
}
