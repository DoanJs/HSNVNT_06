import { Field, ObjectType } from '@nestjs/graphql';
import { CBCS } from 'src/cbcss/CBCS.model';
import { KetQuaTSNT } from 'src/ketquaTSNTs/KetQuaTSNT.model';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'PhuongTienNVs' })
@ObjectType()
export default class PhuongTienNV {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'PK_MaPT' })
  @Field()
  MaPT: number;

  @Column({ type: 'varbinary', length: 'max', nullable: true }) //encrypt
  @Field({ nullable: true })
  BKS: string;

  @Column({ type: 'varbinary', length: 'max', nullable: true }) //encrypt
  @Field({ nullable: true })
  HinhAnh: string;

  @Column({ type: 'date', nullable: true })
  @Field({ nullable: true })
  ThoiGianPH: Date;

  @Column({ type: 'nvarchar', length: 100, nullable: true })
  @Field({ nullable: true })
  DiaDiemPH: string;

  // relation
  @ManyToOne(() => KetQuaTSNT, ketquaTSNT => ketquaTSNT.PhuongTienNVs, { cascade: true, eager: true })
  @JoinColumn({
    name: "MaKQ",
    foreignKeyConstraintName: "FK_MaKQ_PhuongTienNV"
  })
  KetQuaTSNT: KetQuaTSNT

  @ManyToMany(() => CBCS, cbcs => cbcs.TSThucHien_PhuongTienNVs, { cascade: true, eager: true })
  @JoinTable({
    name: 'PhuongTienNVs_CBCSs',
    joinColumn: {
      name: 'MaPT',
      foreignKeyConstraintName: 'FK_MaPT_PhuongTienNVs_CBCSs',
    },
    inverseJoinColumn: {
      name: 'MaCBCS',
      foreignKeyConstraintName: 'FK_MaCBCS_PhuongTienNVs_CBCSs',
    },
  })
  TSThucHiens: [CBCS]
}
