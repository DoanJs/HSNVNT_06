import { Field, ObjectType } from '@nestjs/graphql';
import { BaoCaoKQXMDiaChi } from 'src/baocaoKQXMDiaChis/BaoCaoKQXMDiaChi.model';
import { CBCS } from 'src/cbcss/CBCS.model';
import { KetQuaXMDiaChi } from 'src/ketQuaXMDiaChis/KetQuaXMDiaChi.model';
import { KetQuaTSNT } from 'src/ketquaTSNTs/KetQuaTSNT.model';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'DiaChiNVs' })
@ObjectType()
export class DiaChiNV {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'PK_MaDC' })
  @Field()
  MaDC: number;

  @Column({ type: 'varbinary', length: 'max', nullable: true }) //encrypt
  @Field({ nullable: true })
  DiaChi: string;

  @Column({ type: 'varbinary', length: 'max', nullable: true }) //encrypt
  @Field({ nullable: true })
  HinhAnh: string;

  @Column({ type: 'date', nullable: true })
  @Field({ nullable: true })
  ThoiGianPH: Date;

  // relation
  @ManyToOne(() => KetQuaTSNT, (ketquaTSNT) => ketquaTSNT.DiaChiNVs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaKQ',
    foreignKeyConstraintName: 'FK_MaKQ_DiaChiNV',
  })
  KetQuaTSNT: KetQuaTSNT;

  @ManyToMany(() => CBCS, (cbcs) => cbcs.TSThucHien_DiaChiNVs, {
    cascade: true,
    eager: true,
  })
  @JoinTable({
    name: 'DiaChiNVs_CBCSs',
    joinColumn: {
      name: 'MaDC',
      foreignKeyConstraintName: 'FK_MaBC_DiaChiNVs_CBCSs',
    },
    inverseJoinColumn: {
      name: 'MaCBCS',
      foreignKeyConstraintName: 'FK_MaCBCS_DiaChiNVs_CBCSs',
    },
  })
  TSThucHiens: [CBCS];

  @OneToOne(
    () => BaoCaoKQXMDiaChi,
    (baocaoKQXMDiaChi) => baocaoKQXMDiaChi.DiaChiNV,
  )
  BaoCaoKQXMDiaChi: BaoCaoKQXMDiaChi;

  @OneToOne(() => KetQuaXMDiaChi, (ketquaXMDiaChi) => ketquaXMDiaChi.DiaChiNV)
  KetQuaXMDiaChi: KetQuaXMDiaChi;

  @OneToOne(
    () => BaoCaoKQXMDiaChi,
    (baocaoKQXMDiaChi) => baocaoKQXMDiaChi.DiaChiNV,
  )
  KetQuaXM: BaoCaoKQXMDiaChi;
}
