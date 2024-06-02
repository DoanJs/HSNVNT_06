import { Field, ObjectType } from '@nestjs/graphql';
import { CAQHvaTD } from 'src/caQHvaTD/CAQHvaTD.model';
import { CATTPvaTD } from 'src/caTTPvaTD/CATTPvaTD.model';
import { DauMoiPH_DN } from 'src/dauMoiPH_DNs/DauMoiPH_DN.model';
import { DoiTuong } from 'src/doituongs/DoiTuong.model';
import { HinhThucHD } from 'src/hinhthucHDs/HinhThucHD.model';
import { KeHoachTSNT } from 'src/kehoachTSNTs/KeHoachTSNT.model';
import { KetQuaXMDiaChi } from 'src/ketQuaXMDiaChis/KetQuaXMDiaChi.model';
import { KetQuaXMQuanHe } from 'src/ketQuaXMQuanHes/KetQuaXMQuanHe.model';
import { KyDuyet_DN } from 'src/kyDuyet_DNs/KyDuyet_DN.model';
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

@Entity({ name: 'DeNghiTSNTs' })
@ObjectType()
export class DeNghiTSNT {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'PK_MaDN' })
  @Field()
  MaDN: number;

  @Column({ type: 'nvarchar', length: 30, nullable: true })
  @Field({ nullable: true })
  So: string;

  @Column({ type: 'date', nullable: true })
  @Field({ nullable: true })
  Ngay: Date;

  @Column({ type: 'date', nullable: true })
  @Field({ nullable: true })
  ThoiGianBD: Date;

  @Column({ type: 'date', nullable: true })
  @Field({ nullable: true })
  ThoiGianKT: Date;

  @Column({ type: 'varbinary', length: 'max', nullable: true }) //hash
  @Field({ nullable: true })
  NoiDungDN: string;

  @Column({ type: 'varbinary', length: 'max', nullable: true }) //hash
  @Field({ nullable: true })
  NoiDungTN: string;

  // relation

  @OneToOne(() => DauMoiPH_DN, (dauMoiPH) => dauMoiPH.DeNghiTSNT)
  DauMoiPH: DauMoiPH_DN;

  @ManyToOne(() => CATTPvaTD, (caTTPvaTD) => caTTPvaTD.DeNghiTSNTs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaCATTPvaTD',
    foreignKeyConstraintName: 'FK_MaCATTPvaTD_DeNghiTSNT',
  })
  CATTPvaTD: CATTPvaTD;

  @ManyToOne(() => CAQHvaTD, (caQHvaTD) => caQHvaTD.DeNghiTSNTs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaCAQHvaTD',
    foreignKeyConstraintName: 'FK_MaCAQHvaTD_DeNghiTSNT',
  })
  CAQHvaTD: CAQHvaTD;

  @OneToOne(() => KyDuyet_DN, (kyDuyet_DN) => kyDuyet_DN.DeNghiTSNT)
  KyDuyet_DN: KyDuyet_DN;

  @ManyToMany(() => TinhTP, (tinhTP) => tinhTP.DeNghiTSNTs, {
    cascade: true,
    eager: true,
  })
  @JoinTable({
    name: 'DeNghiTSNTs_TinhTPs',
    joinColumn: {
      name: 'MaDN',
      foreignKeyConstraintName: 'FK_MaDN_DeNghiTSNTs_TinhTPs',
    },
    inverseJoinColumn: {
      name: 'MaTinhTP',
      foreignKeyConstraintName: 'FK_MaTinhTP_DeNghiTSNTs_TinhTPs',
    },
  })
  DiaBanDNs: [TinhTP];

  @ManyToOne(() => DoiTuong, (doituong) => doituong.DeNghiTSNTs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaDoiTuong',
    foreignKeyConstraintName: 'FK_MaDoiTuong_DeNghiTSNT',
  })
  DoiTuong: DoiTuong;

  @OneToOne(() => QuyetDinhTSNT, (quyetdinhTSNT) => quyetdinhTSNT.DeNghiTSNT)
  QuyetDinhTSNT: QuyetDinhTSNT;

  @OneToOne(() => KeHoachTSNT, (kehoachTSNT) => kehoachTSNT.DeNghiTSNT)
  KeHoachTSNT: KeHoachTSNT;

  @OneToMany(
    () => KetQuaXMQuanHe,
    (ketquaXMQuanHe) => ketquaXMQuanHe.DeNghiTSNT,
  )
  KetQuaXMQuanHes: [KetQuaXMQuanHe];

  @OneToMany(
    () => KetQuaXMDiaChi,
    (ketquaXMDiaChi) => ketquaXMDiaChi.DeNghiTSNT,
  )
  KetQuaXMDiaChis: [KetQuaXMDiaChi];

  @OneToOne(() => DauMoiPH_DN, (daumoiPH_DN) => daumoiPH_DN.DeNghiTSNT)
  DauMoiPH_DN: DauMoiPH_DN;

  @ManyToOne(() => HinhThucHD, (hinhthucHD) => hinhthucHD.DeNghiTSNTs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaHTHD',
    foreignKeyConstraintName: 'FK_MaHTHD_DeNghiTSNT',
  })
  HinhThucHD: HinhThucHD;
}
