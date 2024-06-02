import { Field, ObjectType } from '@nestjs/graphql';
import { CAQHvaTD } from 'src/caQHvaTD/CAQHvaTD.model';
import { CBCS } from 'src/cbcss/CBCS.model';
import { DiaChiNV } from 'src/diachiNVs/DiaChiNV.model';
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

@Entity({ name: 'BaoCaoKQXMDiaChis' })
@ObjectType()
export class BaoCaoKQXMDiaChi {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'PK_MaBCKQXMDC' })
  @Field()
  MaBCKQXMDC: number;

  @Column({ type: 'date', nullable: true })
  @Field({ nullable: true })
  Ngay: Date;

  @Column({ type: 'varbinary', length: 'max', nullable: true }) //encrypt
  @Field({ nullable: true })
  HoTenChuHo: string;

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

  @Column({ type: 'nvarchar', length: 50, nullable: true })
  @Field({ nullable: true })
  NgheNghiep: string;

  @Column({ type: 'nvarchar', length: 100, nullable: true })
  @Field({ nullable: true })
  NoiLamViec: string;

  @Column({ type: 'varbinary', length: 'max', nullable: true }) //encrypt
  @Field({ nullable: true })
  QuanHeGiaDinh: string;

  @Column({ type: 'varbinary', length: 'max', nullable: true }) //encrypt
  @Field({ nullable: true })
  HoKhacCungDC: string;

  @Column({ type: 'nvarchar', length: 'max', nullable: true })
  @Field({ nullable: true })
  BienPhapXM: string;

  // relation
  @ManyToOne(() => CAQHvaTD, (caQHvaTD) => caQHvaTD.BaoCaoKQXMDiaChis, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaCAQHvaTD',
    foreignKeyConstraintName: 'FK_MaCAQHvaTD_BaoCaoKQXMDiaChi',
  })
  CAQHvaTD: CAQHvaTD;

  @ManyToOne(() => Doi, (doi) => doi.BaoCaoKQXMDiaChis, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaDoi',
    foreignKeyConstraintName: 'FK_MaDoi_BaoCaoKQXMDiaChi',
  })
  Doi: Doi;

  @ManyToOne(() => DoiTuong, (doituong) => doituong.BaoCaoKQXMDiaChis, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaDoiTuong',
    foreignKeyConstraintName: 'FK_MaDoiTuong_BaoCaoKQXMDiaChi',
  })
  DoiTuong: DoiTuong;

  @ManyToOne(
    () => QuyetDinhTSNT,
    (quyetDinhTSNT) => quyetDinhTSNT.BaoCaoKQXMDiaChis,
    { cascade: true, eager: true },
  )
  @JoinColumn({
    name: 'MaQD',
    foreignKeyConstraintName: 'FK_MaQD_BaoCaoKQXMDiaChi',
  })
  QuyetDinhTSNT: QuyetDinhTSNT;

  @OneToOne(() => DiaChiNV, (diachiNV) => diachiNV.BaoCaoKQXMDiaChi, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaDiaChiNV',
    foreignKeyConstraintName: 'FK_MaDiaChiNV_BaoCaoKQXMDiaChi',
  })
  DiaChiNV: DiaChiNV;

  @ManyToOne(() => CBCS, (cbcs) => cbcs.TSXacMinh_BaoCaoKQXMDiaChis, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaTSXacMinh',
    foreignKeyConstraintName: 'FK_MaTSXacMinh_BaoCaoKQXMDiaChi',
  })
  TSXacMinh: CBCS;

  @ManyToOne(() => CBCS, (cbcs) => cbcs.LanhDaoPD_BaoCaoKQXMDiaChis, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaLanhDaoPD',
    foreignKeyConstraintName: 'FK_MaLanhDaoPD_BaoCaoKQXMDiaChi',
  })
  LanhDaoPD: CBCS;

  @ManyToOne(() => CBCS, (cbcs) => cbcs.BCHPhuTrach_BaoCaoKQXMDiaChis, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaBCHPhuTrach',
    foreignKeyConstraintName: 'FK_MaBCHPhuTrach_BaoCaoKQXMDiaChi',
  })
  BCHPhuTrach: CBCS;
}
