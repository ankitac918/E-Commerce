import {
  Controller,
  Body,
  Post,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { orderDto } from './dto';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}
  @Post()
  addOrder(@Body() dto: orderDto) {
    return this.orderService.addOrder(dto);
  }

  @Get()
  getOrders() {
    return this.orderService.findAll();
  }

  @Get(':id')
  getOrder(@Param('id') id: string) {
    return this.orderService.findOne(id);
  }

  @Patch(':id')
  updateOrder(@Param('id') id: string, @Body() updateOrder: orderDto) {
    return this.orderService.updateOder(id, updateOrder);
  }

  @Delete(':id')
  deleteOrder(@Param('id') id: string) {
    return this.orderService.deleteOrder(id);
  }

  @Delete('/delete/:id')
  deletePermanentOrder(@Param('id') id: string) {
    return this.orderService.deletePermanentOrder(id);
  }
}
