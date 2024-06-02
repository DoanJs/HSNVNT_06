import { Field, ObjectType } from '@nestjs/graphql';
import { BaoCaoKQXMDiaChi } from 'src/baocaoKQXMDiaChis/BaoCaoKQXMDiaChi.model';
import { BaoCaoKQXMQuanHe } from 'src/baocaoKQXMQuanHes/BaoCaoKQXMQuanHe.model';
import { CAQHvaTD } from 'src/caQHvaTD/CAQHvaTD.model';
import { CATTPvaTD } from 'src/caTTPvaTD/CATTPvaTD.model';
import { CBCS } from 'src/cbcss/CBCS.model';
import { DeNghiTSNT } from 'src/denghiTSNTs/DeNghiTSNT.model';
import { Doi } from 'src/dois/Doi.model';
import { DoiTuong } from 'src/doituongs/DoiTuong.model';
import { KeHoachTSNT } from 'src/kehoachTSNTs/KeHoachTSNT.model';
import { KetQuaXMDiaChi } from 'src/ketQuaXMDiaChis/KetQuaXMDiaChi.model';
import { KetQuaXMQuanHe } from 'src/ketQuaXMQuanHes/KetQuaXMQuanHe.model';
import { KetQuaTSNT } from 'src/ketquaTSNTs/KetQuaTSNT.model';
import { TinhTP } from 'src/tinhTPs/TinhTP.model';
import { TramCT } from 'src/tramCTs/TramCT.model';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'QuyetDinhTSNTs' })
@ObjectType()
export class QuyetDinhTSNT {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'PK_MaQD' })
  @Field()
  MaQD: number;

  @Column({ type: 'nvarchar', length: 30, nullable: true })
  @Field({ nullable: true })
  So: string;

  @Column({ type: 'date', nullable: true })
  @Field({ nullable: true })
  Ngay: Date;

  @Column({ type: 'nvarchar', length: 30, nullable: true })
  @Field({ nullable: true })
  BiDanh: string;

  @Column({ type: 'date', nullable: true })
  @Field({ nullable: true })
  ThoiGianBD: Date;

  @Column({ type: 'date', nullable: true })
  @Field({ nullable: true })
  ThoiGianKT: Date;

  @Column({ type: 'varbinary', length: 'max', nullable: true }) // crypto
  @Field({ nullable: true })
  NhiemVuCT: string;

  // relation

  @OneToOne(() => DeNghiTSNT, (denghiTSNT) => denghiTSNT.QuyetDinhTSNT, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaDN',
    foreignKeyConstraintName: 'FK_MaDN_QuyetDinhTSNT',
  })
  DeNghiTSNT: DeNghiTSNT;

  @ManyToOne(() => CATTPvaTD, (caTTPvaTDCATTPvaTD) => caTTPvaTDCATTPvaTD.DeNghiTSNTs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaCATTPvaTD',
    foreignKeyConstraintName: 'FK_MaCATTPvaTD_QuyetDinhTSNT',
  })
  CATTPvaTD: CATTPvaTD;

  @ManyToOne(() => CAQHvaTD, (caQHvaTD) => caQHvaTD.QuyetDinhTSNTs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaCAQHvaTD',
    foreignKeyConstraintName: 'FK_MaCAQHvaTD_QuyetDinhTSNT',
  })
  CAQHvaTD: CAQHvaTD;

  @ManyToOne(() => DoiTuong, (doituong) => doituong.QuyetDinhTSNTs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaDoiTuong',
    foreignKeyConstraintName: 'FK_MaDoiTuong_QuyetDinhTSNT',
  })
  DoiTuong: DoiTuong;

  @ManyToMany(() => TinhTP, (tinhTP) => tinhTP.QuyetDinhTSNTs, {
    cascade: true,
    eager: true,
  })
  @JoinTable({
    name: 'QuyetDinhTSNTs_TinhTPs',
    joinColumn: {
      name: 'MaQD',
      foreignKeyConstraintName: 'FK_MaQD_QuyetDinhTSNTs_TinhTPs',
    },
    inverseJoinColumn: { 
      name: 'MaTinhTP',
      foreignKeyConstraintName: 'FK_MaTinhTP_QuyetDinhTSNTs_TinhTPs',
    },
  })
  PhamViTSs: [TinhTP];

  @ManyToOne(() => CBCS, (cbcs) => cbcs.LanhDaoPD_QuyetDinhTSNTs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaLanhDaoPD',
    foreignKeyConstraintName: 'FK_MaLanhDaoPD_QuyetDinhTSNT',
  })
  LanhDaoPD: CBCS;

  @ManyToOne(() => Doi, (doi) => doi.QuyetDinhTSNTs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaDoi',
    foreignKeyConstraintName: 'FK_MaDoi_QuyetDinhTSNT',
  })
  Doi: Doi;

  @OneToOne(() => KeHoachTSNT, (kehoachTSNT) => kehoachTSNT.DeNghiTSNT)
  KeHoachTSNT: KeHoachTSNT;

  @ManyToOne(() => TramCT, tramCT => tramCT.QuyetDinhTSNTs, { cascade: true, eager: true })
  @JoinColumn({
    name: "MaTramCT",
    foreignKeyConstraintName: "FK_MaTramCT_QuyetDinhTSNT"
  })
  TramCT: TramCT

  @OneToOne(() => KetQuaTSNT, ketquaTSNT => ketquaTSNT.QuyetDinhTSNT)
  KetQuaTSNT: KetQuaTSNT

  @OneToMany(() => BaoCaoKQXMQuanHe, baocaoKQXMQuanHe => baocaoKQXMQuanHe.QuyetDinhTSNT)
  BaoCaoKQXMQuanHes: [BaoCaoKQXMQuanHe]

  @OneToMany(() => KetQuaXMQuanHe, ketquaXMQuanHe => ketquaXMQuanHe.QuyetDinhTSNT)
  KetQuaXMQuanHes: [KetQuaXMQuanHe]

  @OneToMany(() => KetQuaXMDiaChi, ketquaXMDiaChi => ketquaXMDiaChi.QuyetDinhTSNT)
  KetQuaXMDiaChis: [KetQuaXMDiaChi]

  @OneToMany(() => BaoCaoKQXMDiaChi, baoCaoKQXMDiaChi => baoCaoKQXMDiaChi.QuyetDinhTSNT)
  BaoCaoKQXMDiaChis: [BaoCaoKQXMDiaChi]
}
