import { Field, ObjectType } from '@nestjs/graphql';
import { BaoCaoKQGH } from 'src/baocaoKQGHs/BaoCaoKQGH.model';
import { BaoCaoKQXMDiaChi } from 'src/baocaoKQXMDiaChis/BaoCaoKQXMDiaChi.model';
import { BaoCaoKQXMQuanHe } from 'src/baocaoKQXMQuanHes/BaoCaoKQXMQuanHe.model';
import { BaoCaoKTDN } from 'src/baocaoKTDNs/BaoCaoKTDN.model';
import { BaoCaoPHQH } from 'src/baocaoPHQHs/BaoCaoPHQH.model';
import { BienBanRKN } from 'src/bienbanRKNs/BienBanRKN.model';
import { CAQHvaTD } from 'src/caQHvaTD/CAQHvaTD.model';
import { CapBac } from 'src/capbacs/CapBac.model';
import { ChucVu } from 'src/chucvus/ChucVu.model';
import { DanhGiaTSTH } from 'src/danhgiaTSTHs/DanhGiaTSTH.model';
import { DanToc } from 'src/dantocs/DanToc.model';
import { DauMoiPH_DN } from 'src/dauMoiPH_DNs/DauMoiPH_DN.model';
import { DiaChiNV } from 'src/diachiNVs/DiaChiNV.model';
import { Doi } from 'src/dois/Doi.model';
import { KeHoachTSNT } from 'src/kehoachTSNTs/KeHoachTSNT.model';
import { KetQuaXMDiaChi } from 'src/ketQuaXMDiaChis/KetQuaXMDiaChi.model';
import { KetQuaXMQuanHe } from 'src/ketQuaXMQuanHes/KetQuaXMQuanHe.model';
import { KyDuyet_DN } from 'src/kyDuyet_DNs/KyDuyet_DN.model';
import { LLDB } from 'src/lldbs/LLDB.model';
import { LucLuongThamGiaKH } from 'src/lltgKeHoachs/LucLuongThamGiaKH.model';
import PhuongTienNV from 'src/phuongtienNVs/PhuongTienNV.model';
import { QuocTich } from 'src/quoctichs/QuocTich.model';
import { QuyetDinhTSNT } from 'src/quyetdinhTSNTs/QuyetDinhTSNT.model';
import { TonGiao } from 'src/tongiaos/TonGiao.model';
import { TramCT } from 'src/tramCTs/TramCT.model';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'CBCSs' })
@ObjectType()
export class CBCS {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'PK_MaCBCS' })
  @Field()
  MaCBCS: number;

  @Column({ type: 'varbinary', length: 'max' }) //encrypt
  @Field({ nullable: true })
  HoTen: string;

  @Column({ type: 'nvarchar', length: 30, nullable: true })
  @Field({ nullable: true })
  TenKhac: string;

  @Column({ type: 'date', nullable: true })
  @Field({ nullable: true })
  NgaySinh: Date;

  @Column({ type: 'int', nullable: true })
  @Field({ nullable: true })
  GioiTinh: Number;

  @Column({ type: 'varbinary', length: 'max', nullable: true }) //encrypt
  @Field({ nullable: true })
  AnhDD: string;

  @Column({ type: 'nvarchar', length: 100, nullable: true })
  @Field({ nullable: true })
  QueQuan: string;

  @Column({ type: 'nvarchar', length: 100, nullable: true })
  @Field({ nullable: true })
  HKTT: string;

  @Column({ type: 'varbinary', length: 'max', nullable: true }) //encrypt
  @Field({ nullable: true })
  NoiO: string;

  @Column({ type: 'nvarchar', length: 20, nullable: true })
  @Field({ nullable: true })
  PhuongTien: string;

  @Column({ type: 'varbinary', length: 'max', nullable: true }) //encrypt
  @Field({ nullable: true })
  SDT: string;

  @Column({ type: 'varbinary', length: 'max', nullable: true }) //encrypt
  @Field({ nullable: true })
  CCCD: string;

  @Column({ type: 'varbinary', length: 'max', nullable: true }) //encrypt
  @Field({ nullable: true })
  CMND: string;

  @Column({ type: 'varbinary', length: 'max', nullable: true }) //encrypt
  @Field({ nullable: true })
  SHC: string;

  @Column({ type: 'nvarchar', length: 'max', nullable: true })
  @Field({ nullable: true })
  ThongTinChiTiet: string;

  // relation

  @OneToMany(() => DauMoiPH_DN, (dauMoiPH_DN) => dauMoiPH_DN.LDDonViDN)
  LDDonViDN_DauMoiPHs: [DauMoiPH_DN];

  @OneToMany(() => DauMoiPH_DN, (dauMoiPH_DN) => dauMoiPH_DN.CBTrucTiepPH)
  CBTrucTiepPH_DauMoiPHs: [DauMoiPH_DN];

  @OneToMany(() => KyDuyet_DN, (kyDuyet_DN) => kyDuyet_DN.DaiDienCATTPvaTD)
  DaiDienCATTPvaTD_KyDuyet_DNs: [KyDuyet_DN];

  @OneToMany(() => KyDuyet_DN, (kyDuyet_DN) => kyDuyet_DN.DaiDienDonViDN)
  DaiDienDonViDN_KyDuyet_DNs: [KyDuyet_DN];

  @OneToMany(() => KyDuyet_DN, (kyDuyet_DN) => kyDuyet_DN.DaiDienDonViTSNT)
  DaiDienDonViTSNT_KyDuyet_DNs: [KyDuyet_DN];

  @OneToMany(() => KeHoachTSNT, (kehoachTSNT) => kehoachTSNT.LanhDaoPD)
  LanhDaoPD_KeHoachTSNTs: [KeHoachTSNT];

  @OneToMany(() => KeHoachTSNT, (kehoachTSNT) => kehoachTSNT.BCHPhuTrach)
  BCHPhuTrach_KeHoachTSNTs: [KeHoachTSNT];

  @OneToMany(() => TramCT, (tramCT) => tramCT.TSXayDung)
  TSXayDung_TramCTs: [TramCT];

  @OneToMany(() => TramCT, (tramCT) => tramCT.LanhDaoPD)
  LanhDaoPD_TramCTs: [TramCT];

  @OneToMany(() => BaoCaoPHQH, (baocaoPHQH) => baocaoPHQH.ToTruongTS)
  ToTruongTS_BaoCaoPHQHs: [BaoCaoPHQH];

  @ManyToMany(() => BaoCaoPHQH, (baocaoPHQH) => baocaoPHQH.TSThucHiens)
  TSThucHien_BaoCaoPHQHs: [BaoCaoPHQH];

  @OneToMany(() => BaoCaoPHQH, (baocaoPHQH) => baocaoPHQH.LanhDaoPD)
  LanhDaoPD_BaoCaoPHQHs: [BaoCaoPHQH];

  @OneToMany(
    () => BaoCaoKQXMQuanHe,
    (baocaoKQXMQuanHe) => baocaoKQXMQuanHe.LanhDaoPD,
  )
  LanhDaoPD_BaoCaoKQXMQuanHes: [BaoCaoKQXMQuanHe];

  @OneToMany(
    () => BaoCaoKQXMQuanHe,
    (baocaoKQXMQuanHe) => baocaoKQXMQuanHe.BCHPhuTrach,
  )
  BCHPhuTrach_BaoCaoKQXMQuanHes: [BaoCaoKQXMQuanHe];

  @OneToMany(
    () => BaoCaoKQXMQuanHe,
    (baocaoKQXMQuanHe) => baocaoKQXMQuanHe.TSXacMinh,
  )
  TSXacMinh_BaoCaoKQXMQuanHes: [BaoCaoKQXMQuanHe];

  @OneToMany(() => KetQuaXMQuanHe, (ketquaXMQuanHe) => ketquaXMQuanHe.LanhDaoPD)
  KetQuaXMQuanHes: [KetQuaXMQuanHe];

  @OneToMany(() => KetQuaXMDiaChi, (ketquaXMDiaChi) => ketquaXMDiaChi.LanhDaoPD)
  KetQuaXMDiaChis: [KetQuaXMDiaChi];

  @ManyToMany(() => DiaChiNV, (diachiNV) => diachiNV.TSThucHiens)
  TSThucHien_DiaChiNVs: [DiaChiNV];

  @OneToMany(
    () => BaoCaoKQXMDiaChi,
    (baocaoKQXMDiaChi) => baocaoKQXMDiaChi.TSXacMinh,
  )
  TSXacMinh_BaoCaoKQXMDiaChis: [BaoCaoKQXMDiaChi];

  @OneToMany(
    () => BaoCaoKQXMDiaChi,
    (baocaoKQXMDiaChi) => baocaoKQXMDiaChi.LanhDaoPD,
  )
  LanhDaoPD_BaoCaoKQXMDiaChis: [BaoCaoKQXMDiaChi];

  @OneToMany(
    () => BaoCaoKQXMDiaChi,
    (baocaoKQXMDiaChi) => baocaoKQXMDiaChi.BCHPhuTrach,
  )
  BCHPhuTrach_BaoCaoKQXMDiaChis: [BaoCaoKQXMDiaChi];

  @ManyToMany(() => BaoCaoKQGH, (baocaoKQGH) => baocaoKQGH.TSThucHiens)
  TSThucHien_BaoCaoKQGHs: [BaoCaoKQGH];

  @OneToMany(() => BaoCaoKQGH, (baocaoKQGH) => baocaoKQGH.LanhDaoPD)
  LanhDaoPD_BaoCaoKQGHs: [BaoCaoKQGH];

  @OneToMany(() => DanhGiaTSTH, (danhgiaTSTH) => danhgiaTSTH.CBCS)
  DanhGiaTSTHs: [DanhGiaTSTH];

  @OneToMany(() => LLDB, (lldb) => lldb.TSQuanLy)
  TSQuanLy_LLDBs: [LLDB];

  @OneToMany(
    () => LucLuongThamGiaKH,
    (lucluongthamgiaKH) => lucluongthamgiaKH.CBCS,
  )
  LucLuongThamGiaKHs: [LucLuongThamGiaKH];

  @OneToMany(() => BaoCaoKTDN, (baocaoKTDN) => baocaoKTDN.LanhDaoPD)
  LanhDaoPD_BaoCaoKTDNs: [BaoCaoKTDN];

  @OneToMany(() => BaoCaoKTDN, (baocaoKTDN) => baocaoKTDN.CBTongHop)
  CBTongHop_BaoCaoKQGHs: [BaoCaoKTDN];

  @OneToMany(() => BienBanRKN, (bienbanRKN) => bienbanRKN.ChuToa)
  ChuToa_BienBanRKNs: [BienBanRKN];

  @OneToMany(() => BienBanRKN, (bienbanRKN) => bienbanRKN.ThuKy)
  ThuKy_BienBanRKNs: [BienBanRKN];

  @ManyToMany(() => BienBanRKN, (bienbanRKN) => bienbanRKN.LanhDaoTGs)
  BienBanRKNs: [BienBanRKN];

  @ManyToMany(() => PhuongTienNV, (phuongtienNV) => phuongtienNV.TSThucHiens)
  TSThucHien_PhuongTienNVs: [PhuongTienNV];

  @ManyToOne(() => QuocTich, (quoctich) => quoctich.CBCSs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaQT',
    foreignKeyConstraintName: 'FK_MaQT_CBCS',
  })
  QuocTich: QuocTich;

  @ManyToOne(() => DanToc, (dantoc) => dantoc.CBCSs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaDT',
    foreignKeyConstraintName: 'FK_MaDT_CBCS',
  })
  DanToc: DanToc;

  @ManyToOne(() => TonGiao, (tongiao) => tongiao.CBCSs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaTG',
    foreignKeyConstraintName: 'FK_MaTG_CBCS',
  })
  TonGiao: TonGiao;

  @ManyToOne(() => CAQHvaTD, (caQHvaTD) => caQHvaTD.CBCSs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaCAQHvaTD',
    foreignKeyConstraintName: 'FK_MaCAQHvaTD_CBCS',
  })
  CAQHvaTD: CAQHvaTD;

  @ManyToOne(() => CapBac, (capbac) => capbac.CBCSs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaCB',
    foreignKeyConstraintName: 'FK_MaCB_CBCS',
  })
  @Field()
  CapBac: CapBac;

  @ManyToOne(() => ChucVu, (chucvu) => chucvu.CBCSs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaCV',
    foreignKeyConstraintName: 'FK_MaCV_CBCS',
  })
  ChucVu: ChucVu;

  @ManyToOne(() => Doi, (doi) => doi.CBCSs, { cascade: true, eager: true })
  @JoinColumn({
    name: 'MaDoi',
    foreignKeyConstraintName: 'FK_MaDoi_CBCS',
  })
  Doi: Doi;

  @OneToMany(() => QuyetDinhTSNT, (quyetdinhTSNT) => quyetdinhTSNT.LanhDaoPD)
  LanhDaoPD_QuyetDinhTSNTs: [QuyetDinhTSNT];
}
