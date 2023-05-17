import {
  Body,
  Controller,
  Param,
  Get,
  Post,
  Patch,
  Delete,
} from '@nestjs/common';
import { AddressService } from './address.service';
import { addressDto } from './dto';

@Controller('address')
export class AddressController {
  constructor(private addressService: AddressService) {}

  @Post()
  addAddress(@Body() dto: addressDto) {
    return this.addressService.addAddress(dto);
  }

  @Get()
  getAddresses() {
    return this.addressService.findAll();
  }

  @Get(':id')
  getAddress(@Param('id') id: string) {
    return this.addressService.findOne(id);
  }

  @Patch(':id')
  updateAddress(@Param('id') id: string, @Body() updateAddress: addressDto) {
    return this.addressService.updateAddress(id, updateAddress);
  }

  @Delete(':id')
  deleteAddress(@Param('id') id: string) {
    return this.addressService.deleteAddress(id);
  }

  @Delete('/address/:id')
  deletePermanentAddress(@Param('id') id: string) {
    return this.addressService.deletePermanentAddress(id);
  }


}
