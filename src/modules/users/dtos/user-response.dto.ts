import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { UserTypeEnum } from '../enums/user-type.enum';

export class UserResponseDto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(UserTypeEnum)
  userType: UserTypeEnum;

  @ApiProperty()
  @IsNotEmpty()
  createdAt: Date;

  @ApiProperty()
  @IsNotEmpty()
  updatedAt: Date | null;
}
