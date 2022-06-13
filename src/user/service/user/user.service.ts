import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/user/dto/user.dto';
import { UserEntity } from 'src/user/entities/user.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  private users: UserEntity[] = [
    { id: 0, name: 'ammar' },
    { id: 1, name: 'Kevin' },
    { id: 2, name: 'Kanye' },
  ];

  async getAll(): Promise<UserEntity[]> {
    return this.userRepo.find(); // SELECT * from user;
  }

  async findById(id: number): Promise<UserEntity> {
    try {
      const user = await this.userRepo.findOneOrFail(id); // SELECT * from user WHERE user.id == id;
      return user;
    } catch (err) {
      // error handle
      throw err;
    }
  }

  /*createUser(createuserDto: CreateUserDto): Promise<UserEntity> {
                                                    newUser = { id: Date.now(), name: createUserDto.name };*/

  createUser(name: string): Promise<UserEntity> {
    const newUser = this.userRepo.create({ name }); // const newUser(); newUser.name=name;

    return this.userRepo.save(newUser); // INSERT
  }

  async updateuser(id: number, name: string): Promise<UserEntity> {
    const user = await this.findById(id);
    user.name = name;
    return this.userRepo.save(user); // UPDATE
  }

  async deleteuser(id: number): Promise<UserEntity> {
    const user = await this.findById(id);

    return this.userRepo.remove(user);
  }
}
