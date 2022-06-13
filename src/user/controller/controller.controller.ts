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
  getUserByid(@Param('id') id: string): Promise<UserEntity> {
    return this.usersService.findById(Number(id));
  }

  @Post()
  createUser(@Body() name: CreateUserDto): Promise<UserEntity> {
    return this.usersService.createUser(name.name);
  }

  @Put()
  updateuser(@Body() id = Number): Promise<UserEntity> {
    return this.usersService.updateuser(Number(id), UserEntity.name);
  }

  @Delete(':id')
  deleteuser(@Param('id') id: string): Promise<UserEntity> {
    return this.usersService.deleteuser(Number(id));
  }
}
