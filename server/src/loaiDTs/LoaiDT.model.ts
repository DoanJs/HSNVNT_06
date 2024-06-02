import { Field, ObjectType } from '@nestjs/graphql';
import { DoiTuong } from 'src/doituongs/DoiTuong.model';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'LoaiDTs' })
@ObjectType()
export class LoaiDT {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'PK_MaLoaiDT' })
  @Field()
  MaLoaiDT: number;

  @Column({ type: 'nvarchar', length: 30, nullable: true })
  @Field({ nullable: true })
  LoaiDT: string;

  // relation

  @OneToMany(() => DoiTuong, (doituong) => doituong.LoaiDT)
  DoiTuongs: [DoiTuong];
}
