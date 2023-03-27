import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist';
import { PrismaModule } from './prisma/prisma.module';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ProductModule,
    PrismaModule,
    UserModule,
  ],
})
export class AppModule {}
