import { UserTypeEnum } from '../enums/user-type.enum';

export interface CreateUserParams {
  name: string;
  email: string;
  userType: UserTypeEnum;
  passwordHash: string;
}

export interface PersistedUserParams extends CreateUserParams {
  id: number;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
}

export class User {
  constructor(
    public readonly id: number | null,
    public name: string,
    public email: string,
    public userType: UserTypeEnum,
    public passwordHash: string,
    public readonly createdAt: Date,
    public updatedAt: Date | null = null,
    public deletedAt: Date | null = null,
  ) {}

  static createNew(params: CreateUserParams): User {
    const now = new Date();
    return new User(
      null,
      params.name.trim(),
      params.email.trim().toLowerCase(),
      params.userType,
      params.passwordHash,
      now,
    );
  }

  static fromPersistence(params: PersistedUserParams): User {
    return new User(
      params.id,
      params.name,
      params.email,
      params.userType,
      params.passwordHash,
      params.createdAt,
      params.updatedAt ?? null,
      params.deletedAt ?? null,
    );
  }

  markAsDeleted(): void {
    this.deletedAt = new Date();
  }

  changeName(name: string): void {
    this.name = name;
    this.touch();
  }

  changeEmail(email: string): void {
    this.email = email;
    this.touch();
  }

  changePasswordHash(passwordHash: string): void {
    this.passwordHash = passwordHash;
    this.touch();
  }

  private touch(): void {
    this.updatedAt = new Date();
  }
}
