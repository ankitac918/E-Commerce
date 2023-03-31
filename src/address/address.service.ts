import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ForbiddenException } from '@nestjs/common/exceptions';
import { Prisma } from '@prisma/client';
import { addressDto } from './dto';

@Injectable()
export class AddressService {
  constructor(private prisma: PrismaService) {}

  async addAddress(dto: addressDto) {
    try {
      const address = await this.prisma.address.create({
        data: {
          categories: dto.categories,
          streetAddress: dto.streetAddress,
          city: dto.streetAddress,
          zipCode: dto.zipCode,
          deliveryInstruction: dto.deliveryInstruction,
          feedback: dto.feedback,
          locationType: dto.locationType,
        },
      });
      return address;
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
    return this.prisma.address.findMany({
      where: where,
    });
  }

  findOne(id: string) {
    const where = { id: id, deletedAt: null };
    return this.prisma.address.findFirst({
      where: where,
    });
  }

  updateAddress(id: string, address: addressDto) {
    return this.prisma.address.update({
      where: { id: id },
      data: address,
    });
  }

  deleteAddress(id: string) {
    const address = { deletedAt: new Date() };
    return this.prisma.address.update({
      where: { id: id },
      data: address,
    });
  }

  deletePermanentAddress(id: string) {
    return this.prisma.address.delete({
      where: { id: id },
    });
  }
}
