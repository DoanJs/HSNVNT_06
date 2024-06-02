import { Field, ObjectType } from '@nestjs/graphql';
import { CAQHvaTD } from 'src/caQHvaTD/CAQHvaTD.model';
import { CBCS } from 'src/cbcss/CBCS.model';
import { Doi } from 'src/dois/Doi.model';
import { DoiTuong } from 'src/doituongs/DoiTuong.model';
import { KeHoachTSNT } from 'src/kehoachTSNTs/KeHoachTSNT.model';
import { QuyetDinhTSNT } from 'src/quyetdinhTSNTs/QuyetDinhTSNT.model';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'TramCTs' })
@ObjectType()
export class TramCT {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'PK_TramCT' })
  @Field()
  MaTramCT: number;

  @Column({ type: 'date', nullable: true })
  @Field({ nullable: true })
  Ngay: string;

  @Column({ type: 'varbinary', length: 'max', nullable: true }) //encrypt
  @Field({ nullable: true })
  DiaDiem: string;

  @Column({ type: 'nvarchar', length: 'max', nullable: true })
  @Field({ nullable: true })
  TinhHinhDB: string;

  @Column({ type: 'varbinary', length: 'max', nullable: true }) //encrypt
  @Field({ nullable: true })
  LyLichTram: string;

  @Column({ type: 'varbinary', length: 'max', nullable: true }) //encrypt
  @Field({ nullable: true })
  SoDoTram: string;

  @Column({ type: 'nvarchar', length: 'max', nullable: true })
  @Field({ nullable: true })
  VanDeChuY: string;

  @Column({ type: 'nvarchar', length: 'max', nullable: true })
  @Field({ nullable: true })
  QuyDinh: string;

  // relation

  @OneToMany(() => KeHoachTSNT, kehoachTSNT => kehoachTSNT.TramCT)
  KeHoachTSNTs: [KeHoachTSNT]

  @ManyToOne(() => CAQHvaTD, (caQHvaTD) => caQHvaTD.TramCTs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaCAQHvaTD',
    foreignKeyConstraintName: 'FK_MaCAQHvaTD_TramCT',
  })
  CAQHvaTD: CAQHvaTD;

  @ManyToOne(() => Doi, (doi) => doi.TramCTs, { cascade: true, eager: true })
  @JoinColumn({
    name: 'MaDoi',
    foreignKeyConstraintName: 'FK_MaDoi_TramCT',
  })
  Doi: Doi;

  @ManyToOne(() => CBCS, (cbcs) => cbcs.TSXayDung_TramCTs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaTSXayDung',
    foreignKeyConstraintName: 'FK_MaTSXayDung_TramCT',
  })
  TSXayDung: CBCS;

  @OneToMany(() => DoiTuong, doituong => doituong.TramCT)
  DoiTuongs: [DoiTuong]

  @OneToMany(() => QuyetDinhTSNT, quyetDinhTSNT => quyetDinhTSNT.TramCT)
  QuyetDinhTSNTs: [QuyetDinhTSNT]

  @ManyToOne(() => CBCS, (cbcs) => cbcs.LanhDaoPD_TramCTs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaLanhDaoPD',
    foreignKeyConstraintName: 'FK_MaLanhDaoPD_TramCT',
  })
  LanhDaoPD: CBCS;
}
