import { IsOptional, IsString } from 'class-validator';

export class orderDto {
  @IsString()
  productId: string;
  
  @IsString()
  @IsOptional()
  userId: string;

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
  @ IsOptional()
  zipCode: string;
  
  @IsString()
  paymentType: string;

  @IsString()
  @IsOptional()
  locationType: string;

  @IsString()
  quantity: string;
}
