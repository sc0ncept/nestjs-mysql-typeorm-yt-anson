import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { GetOneUserResponse } from 'src/interfaces/user';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('/')
  getUsers() {
    return this.userService.getAllUsers();
  }

  @Get('/:id')
  getOneUser(@Param('id') id: string): Promise<GetOneUserResponse> {
    return this.userService.getOneUser(id);
  }

  @Post('/')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Patch('/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    await this.userService.updateUser(id, updateUserDto);
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string) {
    await this.userService.removeUser(id);
  }
}
