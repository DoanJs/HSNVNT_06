import { Field, ObjectType } from '@nestjs/graphql';
import { BaoCaoKQGH } from 'src/baocaoKQGHs/BaoCaoKQGH.model';
import { BaoCaoKQXMDiaChi } from 'src/baocaoKQXMDiaChis/BaoCaoKQXMDiaChi.model';
import { BaoCaoKQXMQuanHe } from 'src/baocaoKQXMQuanHes/BaoCaoKQXMQuanHe.model';
import { BaoCaoPHQH } from 'src/baocaoPHQHs/BaoCaoPHQH.model';
import { CAQHvaTD } from 'src/caQHvaTD/CAQHvaTD.model';
import { CBCS } from 'src/cbcss/CBCS.model';
import { KeHoachTSNT } from 'src/kehoachTSNTs/KeHoachTSNT.model';
import { KetQuaTSNT } from 'src/ketquaTSNTs/KetQuaTSNT.model';
import { QuyetDinhTSNT } from 'src/quyetdinhTSNTs/QuyetDinhTSNT.model';
import { TramCT } from 'src/tramCTs/TramCT.model';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'Dois' })
@ObjectType()
export class Doi {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'PK_MaDoi' })
  @Field()
  MaDoi: number;

  @Column({ type: 'nvarchar', length: 50, nullable: true })
  @Field({ nullable: true })
  TenDoi: string;

  // relation

  @ManyToOne(() => CAQHvaTD, (caQHvaTD) => caQHvaTD.Dois, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaCAQHvaTD',
    foreignKeyConstraintName: 'FK_MaCAQHvaTD_Doi',
  })
  CAQHvaTD: CAQHvaTD;

  @OneToMany(() => CBCS, (cbcs) => cbcs.Doi)
  CBCSs: [CBCS];

  @OneToMany(() => QuyetDinhTSNT, (quyetdinhTSNT) => quyetdinhTSNT.Doi)
  QuyetDinhTSNTs: [QuyetDinhTSNT];

  @OneToMany(() => KeHoachTSNT, (kehoachTSNT) => kehoachTSNT.Doi)
  KeHoachTSNTs: [KeHoachTSNT];

  @OneToMany(() => TramCT, (tramCT) => tramCT.Doi)
  TramCTs: [TramCT];

  @OneToMany(() => KetQuaTSNT, (ketquaTSNT) => ketquaTSNT.Doi)
  KetQuaTSNTs: [KetQuaTSNT];

  @OneToMany(() => BaoCaoPHQH, (baocaoPHQH) => baocaoPHQH.Doi)
  BaoCaoPHQHs: [BaoCaoPHQH];

  @OneToMany(() => BaoCaoKQXMQuanHe, (baocaoKQXMQuanHe) => baocaoKQXMQuanHe.Doi)
  BaoCaoKQXMQuanHes: [BaoCaoKQXMQuanHe];

  @OneToMany(() => BaoCaoKQXMDiaChi, (baocaoKQXMDiaChi) => baocaoKQXMDiaChi.Doi)
  BaoCaoKQXMDiaChis: [BaoCaoKQXMDiaChi];

  @OneToMany(() => BaoCaoKQGH, (baocaoKQGH) => baocaoKQGH.Doi)
  BaoCaoKQGHs: [BaoCaoKQGH];
}
