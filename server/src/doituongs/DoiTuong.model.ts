import { Field, ObjectType } from '@nestjs/graphql';
import { BaoCaoKQGH } from 'src/baocaoKQGHs/BaoCaoKQGH.model';
import { BaoCaoKQXMDiaChi } from 'src/baocaoKQXMDiaChis/BaoCaoKQXMDiaChi.model';
import { BaoCaoKQXMQuanHe } from 'src/baocaoKQXMQuanHes/BaoCaoKQXMQuanHe.model';
import { BaoCaoPHQH } from 'src/baocaoPHQHs/BaoCaoPHQH.model';
import { BienPhapDT } from 'src/bienPhapDTs/BienPhapDT.model';
import { DanToc } from 'src/dantocs/DanToc.model';
import { DeNghiTSNT } from 'src/denghiTSNTs/DeNghiTSNT.model';
import { DoiTuongCA } from 'src/doituongCAs/DoiTuongCA.model';
import { KeHoachTSNT } from 'src/kehoachTSNTs/KeHoachTSNT.model';
import { KetQuaXMDiaChi } from 'src/ketQuaXMDiaChis/KetQuaXMDiaChi.model';
import { KetQuaXMQuanHe } from 'src/ketQuaXMQuanHes/KetQuaXMQuanHe.model';
import { KetQuaTSNT } from 'src/ketquaTSNTs/KetQuaTSNT.model';
import { LoaiDT } from 'src/loaiDTs/LoaiDT.model';
import { QuocTich } from 'src/quoctichs/QuocTich.model';
import { QuyetDinhTSNT } from 'src/quyetdinhTSNTs/QuyetDinhTSNT.model';
import { TinhChatDT } from 'src/tinhchatDTs/TinhChatDT.model';
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

@Entity({ name: 'DoiTuongs' })
@ObjectType()
export class DoiTuong {
  @PrimaryGeneratedColumn({
    primaryKeyConstraintName: 'PK_MaDoiTuong',
  })
  @Field()
  MaDoiTuong: number;

  @Column({ type: 'varbinary', length: 'max', nullable: true }) //encrypt
  @Field()
  TenDT: string;

  @Column({ type: 'nvarchar', length: 30, nullable: true })
  @Field({ nullable: true })
  TenKhac: string;

  @Column({ type: 'int', nullable: true })
  @Field({ nullable: true })
  GioiTinh: number;

  @Column({ type: 'date', nullable: true })
  @Field({ nullable: true })
  NgaySinh: Date;

  @Column({ type: 'nvarchar', length: 100, nullable: true })
  @Field({ nullable: true })
  NoiSinh: string;

  @Column({ type: 'varbinary', length: 'max', nullable: true }) //encrypt
  @Field({ nullable: true })
  CCCD: string;

  @Column({ type: 'varbinary', length: 'max', nullable: true }) //encrypt
  @Field({ nullable: true })
  CMND: string;

  @Column({ type: 'varbinary', length: 'max', nullable: true }) //encrypt
  @Field({ nullable: true })
  SHC: string;

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

  @Column({ type: 'nvarchar', length: 30, nullable: true })
  @Field({ nullable: true })
  NgheNghiep: string;

  @Column({ type: 'nvarchar', length: 30, nullable: true })
  @Field({ nullable: true })
  ChucVu: string;

  @Column({ type: 'nvarchar', length: 100, nullable: true })
  @Field({ nullable: true })
  NoiLamViec: string;

  @Column({ type: 'nvarchar', length: 30, nullable: true })
  @Field({ nullable: true })
  PhuongTien: string;

  @Column({ type: 'varbinary', length: 'max', nullable: true }) //encrypt
  @Field({ nullable: true })
  SDT: string;

  @Column({ type: 'nvarchar', length: 'max', nullable: true })
  @Field({ nullable: true })
  ThongTinKhac: string;

  //relation

  @ManyToMany(() => BienPhapDT, (bienPhapDT) => bienPhapDT.DoiTuongs)
  BienPhapDTs: [BienPhapDT];

  @ManyToOne(() => QuocTich, (quoctich) => quoctich.DoiTuongs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({ name: 'MaQT', foreignKeyConstraintName: 'FK_MaQT_DoiTuong' })
  QuocTich: QuocTich;

  @ManyToOne(() => DanToc, (dantoc) => dantoc.DoiTuongs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({ name: 'MaDT', foreignKeyConstraintName: 'FK_MaDT_DoiTuong' })
  DanToc: DanToc;

  @ManyToOne(() => TonGiao, (tongiao) => tongiao.DoiTuongs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({ name: 'MaTG', foreignKeyConstraintName: 'FK_MaTG_DoiTuong' })
  TonGiao: TonGiao;

  @ManyToOne(() => TinhChatDT, (tinhchatDT) => tinhchatDT.DoiTuongs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({ name: 'MaTC', foreignKeyConstraintName: 'FK_MaTC_DoiTuong' })
  TinhChatDT: TinhChatDT;

  @ManyToOne(() => LoaiDT, (loaiDT) => loaiDT.DoiTuongs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaLoai',
    foreignKeyConstraintName: 'FK_MaLoai_DoiTuong',
  })
  LoaiDT: LoaiDT;

  @OneToMany(() => DeNghiTSNT, (denghiTSNT) => denghiTSNT.DoiTuong)
  DeNghiTSNTs: [DeNghiTSNT];

  @OneToMany(() => QuyetDinhTSNT, (quyetdinhTSNT) => quyetdinhTSNT.DoiTuong)
  QuyetDinhTSNTs: [QuyetDinhTSNT];

  @OneToMany(() => KeHoachTSNT, (kehoachTSNT) => kehoachTSNT.DoiTuong)
  KeHoachTSNTs: [KeHoachTSNT];

  @ManyToOne(() => TramCT, (tramCT) => tramCT.DoiTuongs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaTramCT',
    foreignKeyConstraintName: 'FK_MaTramCT_DoiTuong',
  })
  TramCT: TramCT;

  @OneToMany(() => KetQuaTSNT, (ketquaTSNT) => ketquaTSNT.DoiTuong)
  KetQuaTSNTs: [KetQuaTSNT];

  @OneToMany(() => BaoCaoPHQH, (baocaoPHQH) => baocaoPHQH.DoiTuong)
  BaoCaoPHQHs: [BaoCaoPHQH];

  @OneToMany(() => BaoCaoKQXMQuanHe, (baocaoKQXMQH) => baocaoKQXMQH.DoiTuong)
  BaoCaoKQXMQHs: [BaoCaoKQXMQuanHe];

  @OneToMany(() => KetQuaXMQuanHe, (ketquaXMQuanHe) => ketquaXMQuanHe.DoiTuong)
  KetQuaXMQuanHes: [KetQuaXMQuanHe];

  @OneToMany(() => KetQuaXMDiaChi, (ketquaXMDiaChi) => ketquaXMDiaChi.DoiTuong)
  KetQuaXMDiaChis: [KetQuaXMDiaChi];

  @OneToMany(
    () => BaoCaoKQXMDiaChi,
    (baocaoKQXMDiaChi) => baocaoKQXMDiaChi.DoiTuong,
  )
  BaoCaoKQXMDiaChis: [BaoCaoKQXMDiaChi];

  @OneToMany(() => BaoCaoKQGH, (baocaoKQGH) => baocaoKQGH.DoiTuong)
  BaoCaoKQGHs: [BaoCaoKQGH];

  @OneToMany(() => DoiTuongCA, (doituongCA) => doituongCA.DoiTuong)
  DoiTuongCAs: [DoiTuongCA];
}
