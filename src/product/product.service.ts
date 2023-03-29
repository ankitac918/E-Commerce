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
    const where = { deletedAt: null };
    return this.prisma.product.findMany({
      where: where,
    });
  }

  findOne(id: string) {
    const where = { id: id, deletedAt: null };
    return this.prisma.product.findFirst({
      where: where,
    });
  }

  updateProduct(id: string, product: ProductDto) {
    return this.prisma.product.update({
      where: { id: id },
      data: product,
    });
  }
  deleteProduct(id: string) {
    const product = { deletedAt: new Date() };
    return this.prisma.product.update({
      where: { id: id },
      data: product,
    });
  }
  
  deleteProductPermanent(id: string) {
    return this.prisma.product.delete({
      where: { id: id },
    });
  }
}
