import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateProductDto {
  @IsNumber()
  @IsNotEmpty()
  productID: Number;

  @IsString()
  name: String;

  @IsNumber()
  @IsPositive()
  price: Number;

  @IsString()
  @IsNotEmpty()
  description: String;
}
