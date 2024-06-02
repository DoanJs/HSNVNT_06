import { Field, ObjectType } from '@nestjs/graphql';
import { CBCS } from 'src/cbcss/CBCS.model';
import { KetQuaTSNT } from 'src/ketquaTSNTs/KetQuaTSNT.model';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'BaoCaoKTDNs' })
@ObjectType()
export class BaoCaoKTDN {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'PK_MaBCKTDN' })
  @Field()
  MaBCKTDN: number;

  @Column({ type: 'date', nullable: true })
  @Field({ nullable: true })
  Ngay: Date;

  @Column({ type: 'varbinary', length: 'max', nullable: true }) //encrypt
  @Field({ nullable: true })
  TinhHinhDT: string;

  @Column({ type: 'varbinary', length: 'max', nullable: true }) //encrypt
  @Field({ nullable: true })
  VanDeRKN: string;

  // relation

  @OneToOne(() => KetQuaTSNT, (ketquaTSNT) => ketquaTSNT, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaKQ',
    foreignKeyConstraintName: 'FK_MaKQ_BaoCaoKTDN',
  })
  KetQuaTSNT: KetQuaTSNT;

  @ManyToOne(() => CBCS, (cbcs) => cbcs.LanhDaoPD_BaoCaoKQGHs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaLanhDaoPD',
    foreignKeyConstraintName: 'FK_MaLanhDaoPD_BaoCaoKTDN',
  })
  LanhDaoPD: CBCS;

  @ManyToOne(() => CBCS, (cbcs) => cbcs.CBTongHop_BaoCaoKQGHs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaCBTongHop',
    foreignKeyConstraintName: 'FK_MaCBTongHop_BaoCaoKTDN',
  })
  CBTongHop: CBCS;
}
