import { UserTypeEnum } from '@/modules/users/enums/user-type.enum';
import { User } from '@/modules/users/entities/user.entity';
import { User as PrismaUser, UserType as PrismaUserType } from '@prisma/client';

const userTypeMap: Record<PrismaUserType, UserTypeEnum> = {
  [PrismaUserType.ADMIN]: UserTypeEnum.ADMIN,
  [PrismaUserType.MANAGER]: UserTypeEnum.MANAGER,
  [PrismaUserType.CO_MANAGER]: UserTypeEnum.CO_MANAGER,
  [PrismaUserType.GUEST]: UserTypeEnum.GUEST,
  [PrismaUserType.VISITOR]: UserTypeEnum.VISITOR,
};

export class PrismaUserMapper {
  static toDomain(raw: PrismaUser): User {
    return User.fromPersistence({
      id: raw.id,
      name: raw.name,
      email: raw.email,
      passwordHash: raw.passwordHash,
      userType: userTypeMap[raw.userType],
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
      deletedAt: raw.deletedAt,
    });
  }
}
