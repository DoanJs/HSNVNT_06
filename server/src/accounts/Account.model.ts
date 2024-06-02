import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Accounts' })
@ObjectType()
export class Account {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'AccountID_PK' })
  @Field()
  AccountID: number;

  @Column({ type: 'nvarchar', length: 150 })
  @Field()
  Username: string;

  @Column({ type: 'nvarchar', length: 400 }) //hash
  Password: string;

  @Column({ type: 'nvarchar', length: 20, nullable: true })
  @Field({ nullable: true })
  Role: string;

  @Column({ type: 'nvarchar', length: 20, nullable: true })
  @Field({ nullable: true })
  Position: string;
}
