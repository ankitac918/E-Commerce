import { IsString, IsNotEmpty, IsDecimal } from 'class-validator';

export class ProductDto {
  @IsString()
  // @IsNotEmpty()
  image: string;

  @IsString()
  // @IsNotEmpty()
  name: string;

  @IsDecimal()
  // @IsNotEmpty()
  price: number;

  @IsString()
  // @IsNotEmpty()
  description: string;

  @IsString()
  categories: string;

  @IsString()
  // @IsNotEmpty()
  location: string;
}
