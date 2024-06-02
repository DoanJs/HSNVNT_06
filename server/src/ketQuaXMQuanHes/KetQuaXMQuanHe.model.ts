import { Field, ObjectType } from '@nestjs/graphql';
import { BaoCaoPHQH } from 'src/baocaoPHQHs/BaoCaoPHQH.model';
import { CAQHvaTD } from 'src/caQHvaTD/CAQHvaTD.model';
import { CATTPvaTD } from 'src/caTTPvaTD/CATTPvaTD.model';
import { CBCS } from 'src/cbcss/CBCS.model';
import { DeNghiTSNT } from 'src/denghiTSNTs/DeNghiTSNT.model';
import { DoiTuong } from 'src/doituongs/DoiTuong.model';
import { QuyetDinhTSNT } from 'src/quyetdinhTSNTs/QuyetDinhTSNT.model';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'KetQuaXMQuanHes' })
@ObjectType()
export class KetQuaXMQuanHe {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'PK_MaKQXMQH' })
  @Field()
  MaKQXMQH: number;

  @Column({ type: 'nvarchar', length: 30, nullable: true })
  @Field({ nullable: true })
  So: string;

  @Column({ type: 'date', nullable: true })
  @Field({ nullable: true })
  Ngay: string;

  // relation

  @OneToOne(() => BaoCaoPHQH, baocaoPHQH => baocaoPHQH.KetQuaXMQuanHe, { cascade: true, eager: true })
  @JoinColumn({
    name: "MaBCPHQH",
    foreignKeyConstraintName: "FK_MaBCPHQH_KetQuaXMQuanHe"
  })
  BaoCaoPHQH: BaoCaoPHQH

  @ManyToOne(() => DeNghiTSNT, denghiTSNT => denghiTSNT.KetQuaXMQuanHes, { cascade: true, eager: true })
  @JoinColumn({
    name: "MaDN",
    foreignKeyConstraintName: "FK_MaDN_KetQuaXMQuanHe"
  })
  DeNghiTSNT: DeNghiTSNT

  @ManyToOne(() => QuyetDinhTSNT, quyetDinhTSNT => quyetDinhTSNT.KetQuaXMQuanHes, { cascade: true, eager: true })
  @JoinColumn({
    name: "MaQD",
    foreignKeyConstraintName: "FK_MaQD_KetQuaXMQuanHe"
  })
  QuyetDinhTSNT: QuyetDinhTSNT

  @ManyToOne(() => CATTPvaTD, caTTPvaTD => caTTPvaTD.KetQuaXMQuanHes, { cascade: true, eager: true })
  @JoinColumn({
    name: "MaCATTPvaTD",
    foreignKeyConstraintName: "FK_MaCATTPvaTD_KetQuaXMQuanHe"
  })
  CATTPvaTD: CATTPvaTD

  @ManyToOne(() => CAQHvaTD, caQHvaTD => caQHvaTD.KetQuaXMQuanHes, { cascade: true, eager: true })
  @JoinColumn({
    name: "MaCAQHvaTD",
    foreignKeyConstraintName: "FK_MaCAQHvaTD_KetQuaXMQuanHe"
  })
  CAQHvaTD: CAQHvaTD

  @ManyToOne(() => DoiTuong, doiTuong => doiTuong.KetQuaXMQuanHes, { cascade: true, eager: true })
  @JoinColumn({
    name: "MaDoiTuong",
    foreignKeyConstraintName: "FK_MaDoiTuong_KetQuaXMQuanHe"
  })
  DoiTuong: DoiTuong

  @ManyToOne(() => CBCS, cbcs => cbcs.KetQuaXMQuanHes, { cascade: true, eager: true })
  @JoinColumn({
    name: "MaLanhDaoPD",
    foreignKeyConstraintName: "FK_MaLanhDaoPD_KetQuaXMQuanHe"
  })
  LanhDaoPD: CBCS
}
