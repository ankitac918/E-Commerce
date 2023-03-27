import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config/dist';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from './dto';
import * as argon from 'argon2';
import { Prisma } from '@prisma/client';
import { ForbiddenException } from '@nestjs/common/exceptions';
import { JwtService } from '@nestjs/jwt/dist/jwt.service';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private config: ConfigService,
    private jwt:JwtService
  ) {}

  async user(dto: UserDto) {
    const hash_pass = await argon.hash(dto.password);
    try {
      const user = await this.prisma.user.create({
        data: {
          first_name: dto.first_name,
          last_name: dto.last_name,
          address: dto.address,
          phone: dto.phone,
          email: dto.email,
          hash_pass,
        },
      });
      return this.signToken(user.id,user.email);
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
      throw error;
    }
  }

  //*************USER SIGNIN*********/
  async signin(dto: UserDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (!user) {
      throw new ForbiddenException('credentials incorrect');
    }

    const pwMatch = await argon.verify(user.hash_pass, dto.password);
    if (!pwMatch) {
      throw new ForbiddenException('credentils incorrect');
    }
    return this.signToken(user.id,user.email)
  }

  async signToken(
    userId: number,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      email,
    };
    const secret = this.config.get('JWT_SECRET');
    const token = await this.jwt.signAsync(payload, {
      expiresIn: '60min',
      secret: secret,
    });
    return {
      access_token: token,
    };
  }

  //***************Find All USERS**********

  findAll() {
    return this.prisma.user.findMany();
  }

  // **********Find A USER ***********
  findOne(id: string) {
    return this.prisma.user.findUnique({
      where: { id: Number(id) },
    });
  }

  // ***********Update user************(not done)
  updateUser(id: string, user: UserDto) {
    return this.prisma.user.update({
      
      where: { id: Number(id) },
      data: user,
    });
  }

  // ***********Delete user **********
  deleteUser(id: string) {
    return this.prisma.user.delete({
      where: { id: Number(id) },
    });
  }
}
