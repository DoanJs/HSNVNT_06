import { Field, ObjectType } from '@nestjs/graphql';
import { BaoCaoPHQH } from 'src/baocaoPHQHs/BaoCaoPHQH.model';
import { CAQHvaTD } from 'src/caQHvaTD/CAQHvaTD.model';
import { CBCS } from 'src/cbcss/CBCS.model';
import { Doi } from 'src/dois/Doi.model';
import { DoiTuong } from 'src/doituongs/DoiTuong.model';
import { QuyetDinhTSNT } from 'src/quyetdinhTSNTs/QuyetDinhTSNT.model';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'BaoCaoKQXMQuanHes' })
@ObjectType()
export class BaoCaoKQXMQuanHe {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'PK_MaBCKQXMQH' })
  @Field()
  MaBCKQXMQH: number;

  @Column({ type: 'date', nullable: true })
  @Field({ nullable: true })
  Ngay: Date;

  @Column({ type: 'varbinary', length: 'max', nullable: true }) //encrypt
  @Field({ nullable: true })
  HoTen: string;

  @Column({ type: 'nvarchar', length: 30, nullable: true })
  @Field({ nullable: true })
  TenKhac: string;

  @Column({ type: 'int', nullable: true })
  @Field({ nullable: true })
  GioiTinh: number;

  @Column({ type: 'date', nullable: true })
  @Field({ nullable: true })
  NamSinh: Date;

  @Column({ type: 'nvarchar', length: 100, nullable: true })
  @Field({ nullable: true })
  QueQuan: string;

  @Column({ type: 'nvarchar', length: 100, nullable: true })
  @Field({ nullable: true })
  HKTT: string;

  @Column({ type: 'varbinary', length: 'max', nullable: true }) //encrypt
  @Field({ nullable: true })
  NoiO: string;

  @Column({ type: 'nvarchar', length: 30, nullable: true })
  @Field({ nullable: true })
  NgheNghiep: string;

  @Column({ type: 'nvarchar', length: 30, nullable: true })
  @Field({ nullable: true })
  ChucVu: string;

  @Column({ type: 'nvarchar', length: 100, nullable: true })
  @Field({ nullable: true })
  NoiLamViec: string;

  @Column({ type: 'nvarchar', length: 'max', nullable: true })
  @Field({ nullable: true })
  QuanHeGDXH: string;

  @Column({ type: 'nvarchar', length: 'max', nullable: true })
  @Field({ nullable: true })
  BienPhapXM: string;

  // relation

  @ManyToOne(() => CAQHvaTD, (caQHvaTD) => caQHvaTD.BaoCaoKQXMQuanHes, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaCAQHvaTD',
    foreignKeyConstraintName: 'FK_MaCAQHvaTD_BaoCaoKQXMQuanHe',
  })
  CAQHvaTD: CAQHvaTD;

  @ManyToOne(() => Doi, (doi) => doi.BaoCaoKQXMQuanHes, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaDoi',
    foreignKeyConstraintName: 'FK_MaDoi_BaoCaoKQXMQuanHe',
  })
  Doi: Doi;

  @ManyToOne(() => DoiTuong, (doituong) => doituong.BaoCaoKQXMQHs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaDoiTuong',
    foreignKeyConstraintName: 'FK_MaDoiTuong_BaoCaoKQXMQuanHe',
  })
  DoiTuong: DoiTuong;

  @ManyToOne(
    () => QuyetDinhTSNT,
    (quyetdinhTSNT) => quyetdinhTSNT.BaoCaoKQXMQuanHes,
    { cascade: true, eager: true },
  )
  @JoinColumn({
    name: 'MaQD',
    foreignKeyConstraintName: 'FK_MaQD_BaoCaoKQXMQuanHe',
  })
  QuyetDinhTSNT: QuyetDinhTSNT;

  @OneToOne(() => BaoCaoPHQH, (baocaoPHQH) => baocaoPHQH.BaoCaoKQXMQuanHe, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaBCPHQH',
    foreignKeyConstraintName: 'FK_MaBCPHQH_BaoCaoKQXMQuanHe',
  })
  BaoCaoPHQH: BaoCaoPHQH;

  @ManyToOne(() => CBCS, (cbcs) => cbcs.LanhDaoPD_BaoCaoKQXMQuanHes, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaLanhDaoPD',
    foreignKeyConstraintName: 'FK_MaLanhDaoPD_BaoCaoKQXMQuanHe',
  })
  LanhDaoPD: CBCS;

  @ManyToOne(() => CBCS, (cbcs) => cbcs.BCHPhuTrach_BaoCaoKQXMQuanHes, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaBCHPhuTrach',
    foreignKeyConstraintName: 'FK_MaBCHPhuTrach_BaoCaoKQXMQuanHe',
  })
  BCHPhuTrach: CBCS;

  @ManyToOne(() => CBCS, (cbcs) => cbcs.TSXacMinh_BaoCaoKQXMQuanHes, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaTSXacMinh',
    foreignKeyConstraintName: 'FK_MaTSXacMinh_BaoCaoKQXMQuanHe',
  })
  TSXacMinh: CBCS;
}
