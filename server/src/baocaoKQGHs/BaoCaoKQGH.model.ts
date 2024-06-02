import { Field, ObjectType } from '@nestjs/graphql';
import { CAQHvaTD } from 'src/caQHvaTD/CAQHvaTD.model';
import { CBCS } from 'src/cbcss/CBCS.model';
import { Doi } from 'src/dois/Doi.model';
import { DoiTuong } from 'src/doituongs/DoiTuong.model';
import { KetQuaTSNT } from 'src/ketquaTSNTs/KetQuaTSNT.model';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'BaoCaoKQGHs' })
@ObjectType()
export class BaoCaoKQGH {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'PK_MaBCKQGH' })
  @Field()
  MaBCKQGH: number;

  @Column({ type: 'date', nullable: true })
  @Field({ nullable: true })
  Ngay: Date;

  @Column({ type: 'varbinary', length: 'max', nullable: true }) //encrypt
  @Field({ nullable: true })
  HinhAnh: string;

  @Column({ type: 'nvarchar', length: 100, nullable: true })
  @Field({ nullable: true })
  MucDich: string;

  @Column({ type: 'date', nullable: true })
  @Field({ nullable: true })
  ThoiGian: Date;

  @Column({ type: 'nvarchar', length: 100, nullable: true })
  @Field({ nullable: true })
  DiaDiem: string;

  @Column({ type: 'nvarchar', length: 50, nullable: true })
  @Field({ nullable: true })
  PhuongTienSD: string;

  @Column({ type: 'nvarchar', length: 100, nullable: true })
  @Field({ nullable: true })
  VaiNguyTrang: string;

  @Column({ type: 'nvarchar', length: 'max', nullable: true })
  @Field({ nullable: true })
  NoiDung: string;

  // relation

  @ManyToOne(() => KetQuaTSNT, (ketquaTSNT) => ketquaTSNT.BaoCaoKQGHs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaKQ',
    foreignKeyConstraintName: 'FK_MaKQ_BaoCaoKQGH',
  })
  KetQuaTSNT: KetQuaTSNT;

  @ManyToOne(() => CAQHvaTD, (caQHvaTD) => caQHvaTD.BaoCaoKQGHs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaCAQHvaTD',
    foreignKeyConstraintName: 'FK_MaCAQHvaTD_BaoCaoKQGH',
  })
  CAQHvaTD: CAQHvaTD;

  @ManyToOne(() => Doi, (doi) => doi.BaoCaoKQGHs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaDoi',
    foreignKeyConstraintName: 'FK_MaDoi_BaoCaoKQGH',
  })
  Doi: Doi;

  @ManyToMany(() => CBCS, (cbcs) => cbcs.TSThucHien_BaoCaoKQGHs, {
    cascade: true,
    eager: true,
  })
  @JoinTable({
    name: 'BaoCaoKQGHs_CBCSs',
    joinColumn: {
      name: 'MaBCKQGH',
      foreignKeyConstraintName: 'FK_MaBCKQGH_BaoCaoKQGHs_CBCSs',
    },
    inverseJoinColumn: {
      name: 'MaCBCS',
      foreignKeyConstraintName: 'FK_MaCBCS_BaoCaoKQGHs_CBCSs',
    },
  })
  TSThucHiens: [CBCS];

  @ManyToOne(() => DoiTuong, (doituong) => doituong.BaoCaoKQGHs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaDoiTuong',
    foreignKeyConstraintName: 'FK_MaDoiTuong_BaoCaoKQGH',
  })
  DoiTuong: DoiTuong;

  @ManyToOne(() => CBCS, (cbcs) => cbcs.LanhDaoPD_BaoCaoKQGHs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaLanhDaoPD',
    foreignKeyConstraintName: 'FK_MaLanhDaoPD_BaoCaoKQGH',
  })
  LanhDaoPD: CBCS;
}
