import { IsString } from 'class-validator';
import { IsEmail } from 'class-validator';
export class SendOtpDto {
  @IsEmail()
  @IsString()
  email: string;
}
