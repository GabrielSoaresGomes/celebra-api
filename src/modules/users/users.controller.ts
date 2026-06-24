import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserResponseDto } from './dtos/user-response.dto';
import { User } from '@/modules/users/entities/user.entity';
import { UserPresenter } from '@/modules/users/presenters/user.presenter';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() body: CreateUserDto): Promise<UserResponseDto> {
    const result: User = await this.usersService.createUser(body);

    return UserPresenter.toHTTP(result);
  }
}
