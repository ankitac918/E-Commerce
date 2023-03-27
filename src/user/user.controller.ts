import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Param,
  Patch,
} from '@nestjs/common';
import { UserDto } from './dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  user(@Body() dto: UserDto) {
    return this.userService.user(dto);
  }

  @Post('signin')
  signin(@Body() dto:UserDto){
    return this.userService.signin(dto)
  }

  @Get()
  getUsers() {
    return this.userService.findAll();
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() updateUser: UserDto) {
    return this.userService.updateUser(id, updateUser);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
