import { Field, ObjectType } from '@nestjs/graphql';
import { DeNghiTSNT } from 'src/denghiTSNTs/DeNghiTSNT.model';
import { KetQuaTSNT } from 'src/ketquaTSNTs/KetQuaTSNT.model';
import { QuyetDinhTSNT } from 'src/quyetdinhTSNTs/QuyetDinhTSNT.model';
import {
    Column,
    Entity,
    ManyToMany,
    PrimaryGeneratedColumn
} from 'typeorm';

@Entity({ name: 'TinhTPs' })
@ObjectType()
export class TinhTP {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'PK_MaTinhTP' })
  @Field()
  MaTinhTP: number;

  @Column({ type: 'nvarchar', length: 100, nullable: true })
  @Field({ nullable: true })
  TinhTP: string;

  @Column({ type: 'nvarchar', length: 30, nullable: true })
  @Field({ nullable: true })
  Cap: string;


  // relation
  
  @ManyToMany(() => DeNghiTSNT, denghiTSNT => denghiTSNT.DiaBanDNs)
  DeNghiTSNTs: [DeNghiTSNT]

  @ManyToMany(() => QuyetDinhTSNT, quyetdinhTSNT => quyetdinhTSNT.PhamViTSs)
  QuyetDinhTSNTs: [QuyetDinhTSNT]

  @ManyToMany(() => KetQuaTSNT, ketquaTSNT => ketquaTSNT.PhamViTSs)
  KetQuaTSNTs: [KetQuaTSNT]
}
