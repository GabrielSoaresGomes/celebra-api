import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { PrismaService } from '@/infra/database/prisma/prisma.service';
import { User } from '../entities/user.entity';
import { PrismaUserMapper } from '@/modules/users/repositories/mappers/prisma-user.mapper';

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async save(user: User): Promise<User> {
    const record = await this.prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        userType: user.userType,
        passwordHash: user.passwordHash,
      },
    });
    return PrismaUserMapper.toDomain(record);
  }
}
