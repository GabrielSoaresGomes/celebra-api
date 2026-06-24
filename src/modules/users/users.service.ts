import { Injectable } from '@nestjs/common';
import { UsersRepository } from '@/modules/users/repositories/users.repository';
import { CreateUserDto } from '@/modules/users/dtos/create-user.dto';
import { User } from '@/modules/users/entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async createUser(body: CreateUserDto): Promise<User> {
    const user = User.createNew({
      name: body.name,
      email: body.email,
      userType: body.userType,
      passwordHash: body.password,
    });

    return this.usersRepository.save(user);
  }
}
