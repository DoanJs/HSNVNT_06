import { Field, ObjectType } from '@nestjs/graphql';
import { LLDB } from 'src/lldbs/LLDB.model';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity({ name: 'LoaiLLDBs' })
@ObjectType()
export class LoaiLLDB {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'PK_MaLoaiLLDB' })
  @Field()
  MaLoaiLLDB: number;

  @Column({ type: 'nvarchar', length: 50, nullable: true })
  @Field({ nullable: true })
  TenLLDB: string;

  @Column({ type: 'nvarchar', length: 30, nullable: true })
  @Field({ nullable: true })
  KyHieu: string;

  //relation

  @OneToMany(() => LLDB, lldb => lldb.LoaiLLDB)
  LLDBs: [LLDB]
}
