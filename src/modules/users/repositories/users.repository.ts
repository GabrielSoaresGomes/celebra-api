import { User } from '../entities/user.entity';

export abstract class UsersRepository {
  abstract save(user: User): Promise<User>;
}
