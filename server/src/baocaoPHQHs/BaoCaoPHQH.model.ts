import { Field, ObjectType } from '@nestjs/graphql';
import { BaoCaoKQXMQuanHe } from 'src/baocaoKQXMQuanHes/BaoCaoKQXMQuanHe.model';
import { CAQHvaTD } from 'src/caQHvaTD/CAQHvaTD.model';
import { CBCS } from 'src/cbcss/CBCS.model';
import { Doi } from 'src/dois/Doi.model';
import { DoiTuong } from 'src/doituongs/DoiTuong.model';
import { KetQuaXMQuanHe } from 'src/ketQuaXMQuanHes/KetQuaXMQuanHe.model';
import { KetQuaTSNT } from 'src/ketquaTSNTs/KetQuaTSNT.model';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'BaoCaoPHQHs' })
@ObjectType()
export class BaoCaoPHQH {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'PK_MaBCPHQH' })
  @Field()
  MaBCPHQH: number;

  @Column({ type: 'date', nullable: true })
  @Field({ nullable: true })
  Ngay: Date;

  @Column({ type: 'nvarchar', length: 30, nullable: true })
  @Field({ nullable: true })
  BiDanh: string;

  @Column({ type: 'date', nullable: true })
  @Field({ nullable: true })
  ThoiGianPH: Date;

  @Column({ type: 'nvarchar', length: 100, nullable: true })
  @Field({ nullable: true })
  DiaDiemPH: string;

  @Column({ type: 'varbinary', length: 'max', nullable: true }) //encrypt
  @Field({ nullable: true })
  HinhAnh: string;

  @Column({ type: 'nvarchar', length: 'max', nullable: true })
  @Field({ nullable: true })
  DDNhanDang: string;

  @Column({ type: 'varbinary', length: 'max', nullable: true }) //encrypt
  @Field({ nullable: true })
  DiaChiCC: string;

  @Column({ type: 'nvarchar', length: 'max', nullable: true })
  @Field({ nullable: true })
  TSNhanXet: string;

  // relation
  @ManyToOne(() => KetQuaTSNT, (ketquaTSNT) => ketquaTSNT.BaoCaoPHQHs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaKQ',
    foreignKeyConstraintName: 'FK_MaKQ_BaoCaoPHQH',
  })
  KetQuaTSNT: KetQuaTSNT;

  @ManyToOne(() => CAQHvaTD, (caQHvaTD) => caQHvaTD.BaoCaoPHQHs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaCAQHvaTD',
    foreignKeyConstraintName: 'FK_MaCAQHvaTD_BaoCaoPHQH',
  })
  CAQHvaTD: CAQHvaTD;

  @ManyToOne(() => Doi, (doi) => doi.BaoCaoPHQHs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaDoi',
    foreignKeyConstraintName: 'FK_MaDoi_BaoCaoPHQH',
  })
  Doi: Doi;

  @ManyToOne(() => DoiTuong, doituong => doituong.BaoCaoPHQHs, { cascade: true, eager: true })
  @JoinColumn({
    name: "MaDoiTuong",
    foreignKeyConstraintName: "FK_MaDoiTuong_BaoCaoPHQH"
  })
  DoiTuong: DoiTuong

  @ManyToOne(() => CBCS, (cbcs) => cbcs.ToTruongTS_BaoCaoPHQHs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaToTruongTS',
    foreignKeyConstraintName: 'FK_MaToTruongTS_BaoCaoPHQH',
  })
  ToTruongTS: CBCS;

  @ManyToMany(() => CBCS, (cbcs) => cbcs.TSThucHien_BaoCaoPHQHs, {
    cascade: true,
    eager: true,
  })
  @JoinTable({
    name: 'BaoCaoPHQHs_CBCSs',
    joinColumn: {
      name: 'MaBCPHQH',
      foreignKeyConstraintName: 'FK_MaBCPHQH_BaoCaoPHQHs_CBCSs',
    },
    inverseJoinColumn: {
      name: 'MaCBCS',
      foreignKeyConstraintName: 'FK_MaCBCS_BaoCaoPHQHs_CBCSs',
    },
  })
  TSThucHiens: [CBCS];

  @ManyToOne(() => CBCS, (cbcs) => cbcs.LanhDaoPD_BaoCaoPHQHs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaLanhDaoPD',
    foreignKeyConstraintName: 'FK_MaLanhDaoPD_BaoCaoPHQH',
  })
  LanhDaoPD: CBCS;

  @OneToOne(() => BaoCaoKQXMQuanHe, baocaoKQXMQuanHe => baocaoKQXMQuanHe.BaoCaoPHQH)
  BaoCaoKQXMQuanHe: BaoCaoKQXMQuanHe

  @OneToOne(() => KetQuaXMQuanHe, ketquaXMQuanHe => ketquaXMQuanHe.BaoCaoPHQH)
  KetQuaXMQuanHe: KetQuaXMQuanHe
}
