import { User } from '@/modules/users/entities/user.entity';
import { UserResponseDto } from '@/modules/users/dtos/user-response.dto';
import { use } from 'passport';

export class UserPresenter {
  static toHTTP(user: User): UserResponseDto {
    return {
      id: user.id!,
      name: user.name,
      email: user.email,
      userType: user.userType,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  static toHTTPList(users: User[]): UserResponseDto[] {
    return users.map(UserPresenter.toHTTP);
  }
}
