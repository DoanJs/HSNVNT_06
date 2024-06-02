import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'TKNhanhs' })
@ObjectType()
export class TKNhanh {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'PK_MaTKN' })
  @Field()
  MaTKN: number;

  @Column({ type: 'nvarchar', length: 50, nullable: true })
  @Field({ nullable: true })
  TieuDe: string;

  @Column({ type: 'nvarchar', length: 100, nullable: true })
  @Field({ nullable: true })
  LienKet: string;
}
