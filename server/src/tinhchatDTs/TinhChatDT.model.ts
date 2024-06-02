import { Field, ObjectType } from '@nestjs/graphql';
import { ChuyenAn } from 'src/chuyenans/ChuyenAn.model';
import { DoiTuong } from 'src/doituongs/DoiTuong.model';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'TinhChatDTs' })
@ObjectType()
export class TinhChatDT {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'PK_MaTCDT' })
  @Field()
  MaTCDT: number;

  @Column({ type: 'nvarchar', length: 50, nullable: true })
  @Field({ nullable: true })
  TinhChat: string;

  // relation

  @OneToMany(() => DoiTuong, (doituong) => doituong.TinhChatDT)
  DoiTuongs: [DoiTuong];

  @OneToMany(() => ChuyenAn, (chuyenan) => chuyenan.TinhChat)
  ChuyenAns: [ChuyenAn];
}
