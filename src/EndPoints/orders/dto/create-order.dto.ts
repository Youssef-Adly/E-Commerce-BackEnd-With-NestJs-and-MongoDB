import { IsArray, IsNotEmpty, IsPositive } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsPositive()
  _id: Number;

  @IsNotEmpty()
  @IsPositive()
  userID: Number;

  @IsNotEmpty()
  @IsPositive()
  orderID: Number;

  @IsNotEmpty()
  @IsArray()
  products: [Number];

  @IsNotEmpty()
  @IsPositive()
  totalPrice: Number;
}
