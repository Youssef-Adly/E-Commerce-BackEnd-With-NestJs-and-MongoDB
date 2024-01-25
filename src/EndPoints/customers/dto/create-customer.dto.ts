import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  MinLength,
} from 'class-validator';

export class CreateCustomerDto {
  @IsNotEmpty()
  @IsNumber()
  userID: Number;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  name: String;

  @IsNotEmpty()
  @IsNumber()
  @Max(100)
  age: Number;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: String;
}
