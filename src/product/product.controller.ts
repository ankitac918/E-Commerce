import {
  Controller,
  Param,
  Post,
  Body,
  UseInterceptors,
  Get,
  Delete,
  Patch,
} from '@nestjs/common';
import { Product } from '@prisma/client';
// import { UploadedFiles } from '@nestjs/common';
// import { FileInterceptor } from '@nestjs/platform-express';
// import multer, { diskStorage } from 'multer';
// import { extname } from 'path';
// import { single } from 'rxjs';
import { ProductDto } from './dto';
import { ProductService } from './product.service';
// let products=[];
// var type=upload.single('recfile');
@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}
  @Post()
  // @UseInterceptors(
  //   FileInterceptor('image:string', {
  //     storage: diskStorage({
  //       destination: './files',
  //       filename: (req, file, callback) => {
  //         console.log(file);

  //         const uniqueSufix = Date.now() + '-' + Math.random() * 1e9;
  //         const ext = extname(file.originalname);
  //         const filename = `${uniqueSufix}${ext}`;
  //         callback(null, filename);
  //       },
  //     }),
  //   }),
  // )
  addProduct(
    @Body() dto: ProductDto,
    // @UploadedFiles() image: Array<Express.Multer.File>,
  ) {
    // console.log(image);

    return this.productService.addProduct(dto);
    // return 'file upload'
  }

  @Get()
  getProducts() {
    return this.productService.findAll();
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this.productService.findOne(id);
  }

  @Patch(':id')
  updateProduct(@Param('id') id: string, @Body() updateProduct: ProductDto) {
    return this.productService.updateProduct(id, updateProduct);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.productService.deleteProduct(id);
  }
}
