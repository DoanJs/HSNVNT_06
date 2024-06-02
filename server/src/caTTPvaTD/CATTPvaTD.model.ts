import { Field, ObjectType } from '@nestjs/graphql';
import { CAQHvaTD } from 'src/caQHvaTD/CAQHvaTD.model';
import { CapCA } from 'src/capCAs/CapCA.model';
import { DeNghiTSNT } from 'src/denghiTSNTs/DeNghiTSNT.model';
import { KetQuaXMDiaChi } from 'src/ketQuaXMDiaChis/KetQuaXMDiaChi.model';
import { KetQuaXMQuanHe } from 'src/ketQuaXMQuanHes/KetQuaXMQuanHe.model';
import { KetQuaTSNT } from 'src/ketquaTSNTs/KetQuaTSNT.model';
import { QuyetDinhTSNT } from 'src/quyetdinhTSNTs/QuyetDinhTSNT.model';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'CATTPvaTDs' })
@ObjectType()
export class CATTPvaTD {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'PK_MaCATTPvaTD' })
  @Field()
  MaCATTPvaTD: number;

  @Column({ type: 'nvarchar', length: 100, nullable: true })
  @Field({ nullable: true })
  CATTPvaTD: string;

  // relation
  @ManyToOne(() => CapCA, (capCA) => capCA.CATTPvaTDs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaCapCA',
    foreignKeyConstraintName: 'FK_MaCapCA_CATTPvaTD',
  })
  CapCA: CapCA;

  @OneToMany(() => DeNghiTSNT, (denghiTSNT) => denghiTSNT.CATTPvaTD)
  DeNghiTSNTs: [DeNghiTSNT];

  @OneToMany(() => CAQHvaTD, (caQHvaTD) => caQHvaTD.CAQHvaTD)
  CAQHvaTDs: [CAQHvaTD];

  @OneToMany(() => KetQuaTSNT, (ketquaTSNT) => ketquaTSNT.CATTPvaTD)
  KetQuaTSNTs: [KetQuaTSNT];

  @OneToMany(() => KetQuaXMQuanHe, (ketquaXMQuanHe) => ketquaXMQuanHe.CATTPvaTD)
  KetQuaXMQuanHes: [KetQuaXMQuanHe];

  @OneToMany(() => KetQuaXMDiaChi, (ketquaXMDiaChi) => ketquaXMDiaChi.CATTPvaTD)
  KetQuaXMDiaChis: [KetQuaXMDiaChi];

  @OneToMany(() => QuyetDinhTSNT, (quyetdinhTSNT) => quyetdinhTSNT.CATTPvaTD)
  QuyetDinhTSNTs: [QuyetDinhTSNT];
}
