import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from '../service/user/user.service';
import { CreateUserDto } from '../dto/user.dto';
import { UserEntity } from '../entities/user.entity';
import { DeleteResult } from 'typeorm';

@Controller('users')
export class ControllerController {
  constructor(private usersService: UserService) {}

  @Get()
  async getUsers(): Promise<UserEntity[]> {
    return await this.usersService.getAll();
  }

  @Get(':id')
  getUserByid(@Param('id') id: number): Promise<UserEntity> {
    return this.usersService.findById(id);
  }

  @Post()
  createUser(@Body() user: CreateUserDto): Promise<UserEntity> {
    return this.usersService.createUser(user.name);
  }

  @Put(':id')
  updateuser(
    @Param('id') id: number,
    @Body() user: CreateUserDto,
  ): Promise<UserEntity> {
    return this.usersService.updateuser(id, user.name);
  }

  @Delete(':id')
  deleteuser(@Param('id') id: string): Promise<UserEntity> {
    return this.usersService.deleteuser(Number(id));
  }
}
