import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserEntity } from './user/entities/user.entity';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'nestuser',
  password: 'nestuser123',
  database: 'nestdb',
  entities: ['dist/**/*.entity{.ts,.js}'],
  //entities: [UserEntity],
  //synchronize: false,
  //migrations:
};
