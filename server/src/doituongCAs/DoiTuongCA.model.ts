import { Field, ObjectType } from '@nestjs/graphql';
import { ChuyenAn } from 'src/chuyenans/ChuyenAn.model';
import { DoiTuong } from 'src/doituongs/DoiTuong.model';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'DoiTuongCAs' })
@ObjectType()
export class DoiTuongCA {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'PK_MaDTCA' })
  @Field()
  MaDTCA: number;

  @Column({ type: 'nvarchar', length: 30, nullable: true })
  @Field({ nullable: true })
  BiSo: string;

  @Column({ type: 'nvarchar', length: 50, nullable: true })
  @Field({ nullable: true })
  ViTri: string;

  // relation
  @ManyToOne(() => ChuyenAn, (chuyenan) => chuyenan.DoiTuongCAs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaCA',
    foreignKeyConstraintName: 'FK_MaCA_DoiTuongCA',
  })
  ChuyenAn: ChuyenAn;

  @ManyToOne(() => DoiTuong, (doituong) => doituong.DoiTuongCAs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaDoiTuong',
    foreignKeyConstraintName: 'FK_MaDoiTuong_DoiTuongCA',
  })
  DoiTuong: DoiTuong;
}
