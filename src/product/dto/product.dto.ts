import { IsString, IsNotEmpty, IsDecimal, IsOptional } from 'class-validator';

export class ProductDto {
  @IsOptional()
  deletedAt:string;

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
