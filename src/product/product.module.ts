import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express/multer';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [MulterModule, MulterModule.register({ dest: './uploads' })],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
