import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ProductDto } from './dto';
import { Prisma, Product } from '@prisma/client';
import { ConfigService } from '@nestjs/config/dist';
import { ForbiddenException } from '@nestjs/common/exceptions';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService, private config: ConfigService) {}
  //***********ADD PRODUCT ******/
  async addProduct(dto: ProductDto) {
    try {
      const product = await this.prisma.product.create({
        data: {
          image: dto.image,
          name: dto.name,
          price: dto.price,
          description: dto.description,
          categories: dto.categories,
          location: dto.location,
        },
      });

      return product;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
      throw error;
    }
  }
  findAll() {
    return this.prisma.product.findMany();
  }

  findOne(id: string) {
    return this.prisma.product.findUnique({
      where: { id: Number(id) },
    });
  }

  updateProduct(id: string, product: ProductDto) {
    return this.prisma.product.update({
      where: { id: Number(id) },
      data: product,
    });
  }

  deleteProduct(id: string) {
    return this.prisma.product.delete({
      where: { id: Number(id) },
    });
  }
}
