import { Field, ObjectType } from '@nestjs/graphql';
import { Profile } from 'src/types/profile.types';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Blog {
  @Field()
  @PrimaryGeneratedColumn()
  id: string;
  @Field()
  @Column()
  title: string;
  @Field()
  @Column()
  content: string;
  @Column()
  author_id: string;
  @Field(() => Profile)
  author: Profile;
}
