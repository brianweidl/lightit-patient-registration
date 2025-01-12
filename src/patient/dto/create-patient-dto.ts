import { IsNotEmpty, IsEmail, IsPhoneNumber } from 'class-validator';

export class CreatePatientDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsPhoneNumber()
  phone: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  documentPhoto: string; //Base64 string
}
