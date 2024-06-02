import { Field, ObjectType } from '@nestjs/graphql';
import { DoiTuongCA } from 'src/doituongCAs/DoiTuongCA.model';
import { TinhChatDT } from 'src/tinhchatDTs/TinhChatDT.model';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'ChuyenAns' })
@ObjectType()
export class ChuyenAn {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'PK_MaCA' })
  @Field()
  MaCA: number;

  @Column({ type: 'varbinary', length: 'max', nullable: true }) //encrypt
  @Field({ nullable: true })
  TenCA: string;

  @Column({ type: 'nvarchar', length: 30, nullable: true })
  @Field({ nullable: true })
  BiSo: string;

  @Column({ type: 'date', nullable: true })
  @Field({ nullable: true })
  ThoiGianBD: Date;

  @Column({ type: 'varbinary', length: 'max', nullable: true }) //encrypt
  @Field({ nullable: true })
  NoiDung: string;

  // relation

  @ManyToOne(() => TinhChatDT, (tinhchatDT) => tinhchatDT.ChuyenAns, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaTC',
    foreignKeyConstraintName: 'FK_MaTC_ChuyenAn',
  })
  TinhChat: TinhChatDT;

  @OneToMany(() => DoiTuongCA, (doituongCA) => doituongCA.ChuyenAn)
  DoiTuongCAs: [DoiTuongCA];
}
