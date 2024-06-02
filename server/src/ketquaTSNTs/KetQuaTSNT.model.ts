import { Field, ObjectType } from '@nestjs/graphql';
import { BaoCaoKQGH } from 'src/baocaoKQGHs/BaoCaoKQGH.model';
import { BaoCaoKTDN } from 'src/baocaoKTDNs/BaoCaoKTDN.model';
import { BaoCaoPHQH } from 'src/baocaoPHQHs/BaoCaoPHQH.model';
import { BienBanRKN } from 'src/bienbanRKNs/BienBanRKN.model';
import { CAQHvaTD } from 'src/caQHvaTD/CAQHvaTD.model';
import { CATTPvaTD } from 'src/caTTPvaTD/CATTPvaTD.model';
import { DanhGiaTSTH } from 'src/danhgiaTSTHs/DanhGiaTSTH.model';
import { DDNB } from 'src/ddnbs/DDNB.model';
import { DiaChiNV } from 'src/diachiNVs/DiaChiNV.model';
import { Doi } from 'src/dois/Doi.model';
import { DoiTuong } from 'src/doituongs/DoiTuong.model';
import { KeHoachTSNT } from 'src/kehoachTSNTs/KeHoachTSNT.model';
import PhuongTienNV from 'src/phuongtienNVs/PhuongTienNV.model';
import { QuyetDinhTSNT } from 'src/quyetdinhTSNTs/QuyetDinhTSNT.model';
import { TinhTP } from 'src/tinhTPs/TinhTP.model';
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

@Entity({ name: 'KetQuaTSNTs' })
@ObjectType()
export class KetQuaTSNT {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'PK_MaKQ' })
  @Field()
  MaKQ: number;

  @Column({ type: 'date', nullable: true })
  @Field({ nullable: true })
  ThoiGianBD: Date;

  @Column({ type: 'date', nullable: true })
  @Field({ nullable: true })
  ThoiGianKT: Date;

  // relation

  @ManyToOne(() => CATTPvaTD, (caTTPvaTD) => caTTPvaTD.KetQuaTSNTs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaCATTPvaTD',
    foreignKeyConstraintName: 'FK_MaCATTPvaTD_KetQuaTSNT',
  })
  CATTPvaTD: CATTPvaTD;

  @ManyToOne(() => CAQHvaTD, (caQHvaTD) => caQHvaTD.KetQuaTSNTs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaCAQHvaTD',
    foreignKeyConstraintName: 'FK_MaCAQHvaTD_KetQuaTSNT',
  })
  CAQHvaTD: CAQHvaTD;

  @ManyToOne(() => Doi, (doi) => doi.KetQuaTSNTs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaDoi',
    foreignKeyConstraintName: 'FK_MaDoi_KetQuaTSNT',
  })
  Doi: Doi;

  @ManyToOne(() => DoiTuong, (doiTuong) => doiTuong.KetQuaTSNTs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaDoiTuong',
    foreignKeyConstraintName: 'FK_MaDoiTuong_KetQuaTSNT',
  })
  DoiTuong: DoiTuong;

  @OneToOne(() => KeHoachTSNT, (kehoachTSNT) => kehoachTSNT.KetQuaTSNT, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaKH',
    foreignKeyConstraintName: 'FK_MaKH_KetQuaTSNT',
  })
  KeHoachTSNT: KeHoachTSNT;

  @OneToOne(() => QuyetDinhTSNT, (quyetDinhTSNT) => quyetDinhTSNT.KetQuaTSNT, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaQD',
    foreignKeyConstraintName: 'FK_MaQD_KetQuaTSNT',
  })
  QuyetDinhTSNT: QuyetDinhTSNT;

  @ManyToMany(() => TinhTP, (tinhTP) => tinhTP.KetQuaTSNTs, {
    cascade: true,
    eager: true,
  })
  @JoinTable({
    name: 'KetQuaTSNTs_TinhTPs',
    joinColumn: {
      name: 'MaKQ',
      foreignKeyConstraintName: 'FK_MaKQ_KetQuaTSNTs_TinhTPs',
    },
    inverseJoinColumn: {
      name: 'MaTinhTP',
      foreignKeyConstraintName: 'FK_MaTinhTP_KetQuaTSNTs_TinhTPs',
    },
  })
  PhamViTSs: [TinhTP];

  @ManyToMany(() => DDNB, (ddnb) => ddnb.KetQuaTSNTs, {
    cascade: true,
    eager: true,
  })
  @JoinTable({
    name: 'KetQuaTSNTs_DDNBs',
    joinColumn: {
      name: 'MaKQ',
      foreignKeyConstraintName: 'FK_MaKQ_KetQuaTSNTs_DDNBs',
    },
    inverseJoinColumn: {
      name: 'MaDDNB',
      foreignKeyConstraintName: 'FK_MaDDNB_KetQuaTSNTs_DDNBs',
    },
  })
  DDNBs: [DDNB];

  @OneToMany(() => DanhGiaTSTH, (danhgiaTSTH) => danhgiaTSTH.KetQuaTSNT)
  DanhGiaTSTHs: [DanhGiaTSTH];

  @OneToOne(() => BaoCaoKTDN, (baocaoKTDN) => baocaoKTDN.KetQuaTSNT)
  BaoCaoKTDN: BaoCaoKTDN;

  @OneToOne(() => BienBanRKN, (bienbanRKN) => bienbanRKN.KetQuaTSNT)
  BienBanRKN: BienBanRKN;

  @OneToMany(() => BaoCaoKQGH, (baocaoKQGH) => baocaoKQGH.KetQuaTSNT)
  BaoCaoKQGHs: [BaoCaoKQGH];

  @OneToMany(() => BaoCaoPHQH, (baocaoPHQH) => baocaoPHQH)
  BaoCaoPHQHs: [BaoCaoPHQH];

  @OneToMany(() => DiaChiNV, (diachiNV) => diachiNV.KetQuaTSNT)
  DiaChiNVs: [DiaChiNV];

  @OneToMany(() => PhuongTienNV, (phuongtienNV) => phuongtienNV.KetQuaTSNT)
  PhuongTienNVs: [PhuongTienNV];
}
