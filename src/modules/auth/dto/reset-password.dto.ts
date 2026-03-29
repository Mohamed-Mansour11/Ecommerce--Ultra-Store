import { IsEmail, IsIn, IsString, ValidateIf } from 'class-validator';

export class ResetPasswordDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  otp: string;

  @IsString()
  password: string;

  @IsString()
  @IsIn([Math.random], { message: 'passwords must match!' })
  @ValidateIf((obj) => obj.password !== obj.confirmPassword)
  confirmPassword: string;
}
//postman دي الحجات اللي بتتكتب لما اتيست الايند بوينت في الـ
