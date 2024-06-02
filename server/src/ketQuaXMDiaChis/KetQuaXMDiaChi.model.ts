import { Field, ObjectType } from '@nestjs/graphql';
import { CAQHvaTD } from 'src/caQHvaTD/CAQHvaTD.model';
import { CATTPvaTD } from 'src/caTTPvaTD/CATTPvaTD.model';
import { CBCS } from 'src/cbcss/CBCS.model';
import { DeNghiTSNT } from 'src/denghiTSNTs/DeNghiTSNT.model';
import { DiaChiNV } from 'src/diachiNVs/DiaChiNV.model';
import { DoiTuong } from 'src/doituongs/DoiTuong.model';
import { QuyetDinhTSNT } from 'src/quyetdinhTSNTs/QuyetDinhTSNT.model';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'KetQuaXMDiaChis' })
@ObjectType()
export class KetQuaXMDiaChi {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'PK_MaKQXMDC' })
  @Field()
  MaKQXMDC: number;

  @Column({ type: 'nvarchar', length: 30, nullable: true })
  @Field({ nullable: true })
  So: string;

  @Column({ type: 'date', nullable: true })
  @Field({ nullable: true })
  Ngay: string;

  // relation
  
  @OneToOne(() => DiaChiNV, diaChiNV => diaChiNV.KetQuaXMDiaChi, {cascade: true, eager: true})
  @JoinColumn({
    name:"MaDC",
    foreignKeyConstraintName: "FK_MaBCPHQH_KetQuaXMDiaChi"
  })
  DiaChiNV: DiaChiNV

  @ManyToOne(() => DeNghiTSNT, denghiTSNT => denghiTSNT.KetQuaXMDiaChis, {cascade: true, eager: true})
  @JoinColumn({
    name: "MaDN",
    foreignKeyConstraintName: "FK_MaDN_KetQuaXMDiaChi"
  })
  DeNghiTSNT: DeNghiTSNT

  @ManyToOne(() => QuyetDinhTSNT, quyetDinhTSNT => quyetDinhTSNT.KetQuaXMDiaChis, {cascade: true, eager: true})
  @JoinColumn({
    name: "MaQD",
    foreignKeyConstraintName: "FK_MaQD_KetQuaXMDiaChi"
  })
  QuyetDinhTSNT: QuyetDinhTSNT

  @ManyToOne(() => CATTPvaTD, caTTPvaTD => caTTPvaTD.KetQuaXMDiaChis, {cascade: true, eager: true})
  @JoinColumn({
    name: "MaCATTPvaTD",
    foreignKeyConstraintName: "FK_MaCATTPvaTD_KetQuaXMDiaChi"
  })
  CATTPvaTD: CATTPvaTD

  @ManyToOne(() => CAQHvaTD, caQHvaTD => caQHvaTD.KetQuaXMDiaChis, {cascade: true, eager: true})
  @JoinColumn({
    name: "MaCAQHvaTD",
    foreignKeyConstraintName: "FK_MaCAQHvaTD_KetQuaXMDiaChi"
  })
  CAQHvaTD: CAQHvaTD

  @ManyToOne(() => DoiTuong, doiTuong => doiTuong.KetQuaXMDiaChis, {cascade: true, eager: true})
  @JoinColumn({
    name: "MaDoiTuong",
    foreignKeyConstraintName: "FK_MaDoiTuong_KetQuaXMDiaChi"
  })
  DoiTuong: DoiTuong

  @ManyToOne(() => CBCS, cbcs => cbcs.KetQuaXMDiaChis, {cascade: true, eager: true})
  @JoinColumn({
    name: "MaLanhDaoPD",
    foreignKeyConstraintName: "FK_MaLanhDaoPD_KetQuaXMDiaChi"
  })
  LanhDaoPD: CBCS
}
