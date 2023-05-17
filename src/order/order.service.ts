import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { orderDto } from './dto';
import { ForbiddenException } from '@nestjs/common/exceptions';
import { Prisma } from '@prisma/client';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async addOrder(dto: orderDto) {
    try {
      const order = await this.prisma.order.create({
        data: {
          productId: dto.productId,
          userId:dto.userId,
          token: dto.token,
          name: dto.name,
          description: dto.description,
          price: dto.price,
          location: dto.location,
          address: dto.address,
          city: dto.city,
          zipCode:dto.zipCode,
          paymentType: dto.paymentType,
          locationType:dto.locationType,
          quantity: dto.quantity,
        },
      });
      return order;
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
    return this.prisma.order.findMany({
      where: where,
    });
  }

  findOne(id: string) {
    const where = { id: id, deletedAt: null };
    return this.prisma.order.findFirst({
      where: where,
    });
  }

  updateOder(id: string, order: orderDto) {
    return this.prisma.order.update({
      where: { id: id },
      data: order,
    });
  }

  deleteOrder(id: string) {
    const order = { deletedAt: new Date() };
    return this.prisma.order.update({
      where: { id: id },
      data: order,
    });
  }

  deletePermanentOrder(id: string) {
    return this.prisma.order.delete({
      where: { id: id },
    });
  }
}
