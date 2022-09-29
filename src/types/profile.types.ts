import { Field, ObjectType } from '@nestjs/graphql';

export enum UserRoleEnum {
  Admin = 'Admin',
  Editor = 'Editor',
  User = 'User',
}

export enum AccountTypeEnum {
  Teacher = 'Teacher',
  Student = 'Student',
  Admin = 'Admin',
  User = 'User',
  Guest = 'Guest',
  Parent = 'Parent',
  None = 'None',
}

@ObjectType()
export class Profile {
  @Field()
  id: string;
  @Field()
  firstName: string;
  @Field()
  lastName: string;
  @Field()
  middleName: string;
  @Field({ nullable: true })
  otherName: string;
  @Field()
  name: string;
  @Field({ nullable: true })
  email: string;
  @Field({ nullable: true })
  phone: string;
  @Field({ nullable: true })
  role: string;

  @Field({ nullable: true })
  image: string;

  @Field()
  lastSeen: Date;

  @Field({ nullable: true })
  address: string;

  @Field()
  isPhoneVerified: boolean;

  @Field()
  isEmailVerified: boolean;

  @Field()
  isActive: boolean;

  @Field(() => String)
  accountType: AccountTypeEnum;

  @Field(() => [String], { nullable: true })
  accountTypes: AccountTypeEnum[];

  @Field()
  gender: string;

  @Field({ nullable: true })
  dob: Date;

  @Field({ nullable: true })
  occupation: string;

  @Field({ nullable: true })
  state: string;

  @Field({ nullable: true })
  lga: string;
}
