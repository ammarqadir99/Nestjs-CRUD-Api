import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ControllerController } from './controller/controller.controller';
import { UserEntity } from './entities/user.entity';
import { UserService } from './service/user/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [ControllerController],
  providers: [UserService],
})
export class UserModule {}
