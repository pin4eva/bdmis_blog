import { Field, ObjectType } from '@nestjs/graphql';
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
}
