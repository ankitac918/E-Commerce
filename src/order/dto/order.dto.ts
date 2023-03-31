import { IsString } from 'class-validator';

export class orderDto {
  @IsString()
  productId: string;

  @IsString()
  token: string;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  price: string;

  @IsString()
  location: string;

  @IsString()
  address: string;

  @IsString()
  city: string;
  
  @IsString()
  paymentType: string;

  @IsString()
  quantity: string;
}
