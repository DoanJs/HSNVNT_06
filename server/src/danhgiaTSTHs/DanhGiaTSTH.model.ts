import { Field, ObjectType } from '@nestjs/graphql';
import { CBCS } from 'src/cbcss/CBCS.model';
import { KetQuaTSNT } from 'src/ketquaTSNTs/KetQuaTSNT.model';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'DanhGiaTSTHs' })
@ObjectType()
export class DanhGiaTSTH {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'PK_MaDanhGiaTSTH' })
  @Field()
  MaDanhGiaTSTH: number;

  @Column({ type: 'nvarchar', length: 50, nullable: true })
  @Field({ nullable: true })
  VaiTro: string;

  @Column({ type: 'nvarchar', length: 50, nullable: true })
  @Field({ nullable: true })
  DanhGia: string;

  @Column({ type: 'nvarchar', length: 'max', nullable: true })
  @Field({ nullable: true })
  LyDo: string;

  // relation
  @ManyToOne(() => KetQuaTSNT, (ketquaTSNT) => ketquaTSNT.DanhGiaTSTHs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaKQ',
    foreignKeyConstraintName: 'FK_MaKQ_DanhGiaTSTH',
  })
  KetQuaTSNT: KetQuaTSNT;

  @ManyToOne(() => CBCS, (cbcs) => cbcs.DanhGiaTSTHs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaCBCS',
    foreignKeyConstraintName: 'FK_MaCBCS_DanhGiaTSTH',
  })
  CBCS: CBCS;
}
