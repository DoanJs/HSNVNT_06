import { Field, ObjectType } from '@nestjs/graphql';
import { CBCS } from 'src/cbcss/CBCS.model';
import { DanToc } from 'src/dantocs/DanToc.model';
import { DoiTuong } from 'src/doituongs/DoiTuong.model';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'QuocTichs' })
@ObjectType()
export class QuocTich {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'PK_MaQT' })
  @Field()
  MaQT: number;

  @Column({ type: 'nvarchar', length: 50, nullable: true })
  @Field({ nullable: true })
  TenQT: string;

  // relation

  @OneToMany(() => DanToc, (dantoc) => dantoc.QuocTich)
  DanTocs: [DanToc];

  @OneToMany(() => CBCS, (cbcs) => cbcs.QuocTich)
  CBCSs: [CBCS];







  @OneToMany(() => DoiTuong, (doituong) => doituong.QuocTich)
  DoiTuongs: [DoiTuong];

}
