import { Field, ObjectType } from '@nestjs/graphql';
import { CAQHvaTD } from 'src/caQHvaTD/CAQHvaTD.model';
import { CBCS } from 'src/cbcss/CBCS.model';
import { DeNghiTSNT } from 'src/denghiTSNTs/DeNghiTSNT.model';
import { Doi } from 'src/dois/Doi.model';
import { DoiTuong } from 'src/doituongs/DoiTuong.model';
import { KetQuaTSNT } from 'src/ketquaTSNTs/KetQuaTSNT.model';
import { LLDB } from 'src/lldbs/LLDB.model';
import { LucLuongThamGiaKH } from 'src/lltgKeHoachs/LucLuongThamGiaKH.model';
import { QuyetDinhTSNT } from 'src/quyetdinhTSNTs/QuyetDinhTSNT.model';
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

@Entity({ name: 'KeHoachTSNTs' })
@ObjectType()
export class KeHoachTSNT {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'PK_MaKH' })
  @Field()
  MaKH: number;

  @Column({ type: 'nvarchar', length: 30, nullable: true })
  @Field({ nullable: true })
  So: string;

  @Column({ type: 'date', nullable: true })
  @Field({ nullable: true })
  Ngay: string;

  @Column({ type: 'varbinary', length: "max", nullable: true }) //hash
  @Field({ nullable: true })
  VanDeChuY: string;

  @Column({ type: 'varbinary', length: 'max', nullable: true }) //hash
  @Field({ nullable: true })
  NoiDung: string;

  // relation

  @ManyToOne(() => CAQHvaTD, (caQHvaTD) => caQHvaTD.KeHoachTSNTs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaCAQHvaTD',
    foreignKeyConstraintName: 'FK_MaCAQHvaTD_KeHoachTSNT',
  })
  CAQHvaTD: CAQHvaTD;

  @ManyToOne(() => Doi, (doi) => doi.KeHoachTSNTs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaDoi',
    foreignKeyConstraintName: 'FK_MaDoi_KeHoachTSNT',
  })
  Doi: Doi;

  @OneToOne(() => DeNghiTSNT, (denghiTSNT) => denghiTSNT.KeHoachTSNT, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaDN',
    foreignKeyConstraintName: 'FK_MaDN_KeHoachTSNT',
  })
  DeNghiTSNT: DeNghiTSNT;

  @OneToOne(() => QuyetDinhTSNT, (quyetdinhTSNT) => quyetdinhTSNT.KeHoachTSNT, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaQD',
    foreignKeyConstraintName: 'FK_MaQD_KeHoachTSNT',
  })
  QuyetDinhTSNT: QuyetDinhTSNT;

  @ManyToOne(() => DoiTuong, (doituong) => doituong.KeHoachTSNTs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaDoiTuong',
    foreignKeyConstraintName: 'FK_MaDoiTuong_KeHoachTSNT',
  })
  DoiTuong: DoiTuong;

  @ManyToOne(() => CBCS, (cbcs) => cbcs.LanhDaoPD_KeHoachTSNTs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaLanhDaoPD',
    foreignKeyConstraintName: 'FK_MaLanhDaoPD_KeHoachTSNT',
  })
  LanhDaoPD: CBCS;

  @ManyToOne(() => CBCS, (cbcs) => cbcs.BCHPhuTrach_KeHoachTSNTs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaBCHPhuTrach',
    foreignKeyConstraintName: 'FK_MaBCHPhuTrach_KeHoachTSNT',
  })
  BCHPhuTrach: CBCS;

  @ManyToOne(() => TramCT, tramCT => tramCT.KeHoachTSNTs, { cascade: true, eager: true })
  @JoinColumn({
    name: "MaTramCT",
    foreignKeyConstraintName: "FK_MaTramCT_KeHoachTSNT"
  })
  TramCT: TramCT

  @ManyToMany(() => LLDB, (llbm) => llbm.KeHoachTSNTs, {
    cascade: true,
    eager: true,
  })
  @JoinTable({
    name: 'KeHoachTSNTs_LLDBs',
    joinColumn: {
      name: 'MaKH',
      foreignKeyConstraintName: 'FK_MaKH_KeHoachTSNTs_LLDBs',
    },
    inverseJoinColumn: {
      name: 'MaLLDB',
      foreignKeyConstraintName: 'FK_MaLLDB_KeHoachTSNTs_LLDBs',
    },
  })
  LLDBs: [LLDB];

  @OneToMany(
    () => LucLuongThamGiaKH,
    (lucluongthamgiaKH) => lucluongthamgiaKH.KeHoachTSNT,
  )
  LLTGKeHoachs: [LucLuongThamGiaKH];

  @OneToOne(() => KetQuaTSNT, (ketquaTSNT) => ketquaTSNT.KeHoachTSNT)
  KetQuaTSNT: KetQuaTSNT
}
