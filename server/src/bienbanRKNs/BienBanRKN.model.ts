import { Field, ObjectType } from '@nestjs/graphql';
import { CBCS } from 'src/cbcss/CBCS.model';
import { KetQuaTSNT } from 'src/ketquaTSNTs/KetQuaTSNT.model';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'BienBanRKNs' })
@ObjectType()
export class BienBanRKN {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'PK_MaBBRKN' })
  @Field()
  MaBBRKN: number;

  @Column({ type: 'date', nullable: true })
  @Field({ nullable: true })
  Ngay: Date;

  @Column({ type: 'varbinary', length: 'max', nullable: true }) //encrypt
  @Field({ nullable: true })
  DanhGiaLDP: string;

  @Column({ type: 'varbinary', length: 'max', nullable: true }) //encrypt
  @Field({ nullable: true })
  DanhGiaTS: string;

  @Column({ type: 'varbinary', length: 'max', nullable: true }) //encrypt
  @Field({ nullable: true })
  DanhGiaDT: string;

  @Column({ type: 'nvarchar', length: 'max', nullable: true })
  @Field({ nullable: true })
  KetLuan: string;

  @Column({ type: 'nvarchar', length: 'max', nullable: true })
  @Field({ nullable: true })
  DeXuat: string;

  // relation

  @OneToOne(() => KetQuaTSNT, ketquaTSNT => ketquaTSNT.BienBanRKN, {cascade: true, eager: true})
  @JoinColumn({
    name: "MaKQ",
    foreignKeyConstraintName: "FK_MaKQ_BienBanRKN"
  })
  KetQuaTSNT: KetQuaTSNT

  @ManyToOne(() => CBCS, cbcs => cbcs.ChuToa_BienBanRKNs)
  @JoinColumn({
    name: "MaChuToa",
    foreignKeyConstraintName: "FK_MaChuToa_BienBanRKN"
  })
  ChuToa: CBCS

  @ManyToOne(() => CBCS, cbcs => cbcs.ThuKy_BienBanRKNs)
  @JoinColumn({
    name: "MaThuKy",
    foreignKeyConstraintName: "FK_MaThuKy_BienBanRKN"
  })
  ThuKy: CBCS

  @ManyToMany(() => CBCS, cbcs => cbcs.BienBanRKNs, {cascade: true, eager: true})
  @JoinTable({
    name: "BienBanRKNs_LanhDaoTGs",
    joinColumn: {
      name: "MaBBRKN",
      foreignKeyConstraintName: "FK_MaBBRKN_BienBanRKNs_LanhDaoTGs"
    },
    inverseJoinColumn: {
      name: "MaLanhDaoTG",
      foreignKeyConstraintName: "FK_MaLanhDaoTG_BienBanRKNs_LanhDaoTGs"
    }
  })
  LanhDaoTGs: [CBCS]

}
