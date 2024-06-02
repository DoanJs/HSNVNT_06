import { Field, ObjectType } from '@nestjs/graphql';
import { CBCS } from 'src/cbcss/CBCS.model';
import { DoiTuong } from 'src/doituongs/DoiTuong.model';
import { QuocTich } from 'src/quoctichs/QuocTich.model';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'DanTocs' })
@ObjectType()
export class DanToc {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'PK_MaDT' })
  @Field()
  MaDT: number;

  @Column({ type: 'nvarchar', length: 50, nullable: true })
  @Field({ nullable: true })
  TenDT: string;

  //relation
  @ManyToOne(() => QuocTich, (quoctich) => quoctich.DanTocs, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({
    name: 'MaQT',
    foreignKeyConstraintName: 'FK_MaQT_DanToc',
  })
  QuocTich: QuocTich;

  @OneToMany(() => CBCS, (cbcs) => cbcs.DanToc)
  CBCSs: [CBCS];

  @OneToOne(() => DoiTuong, (doituong) => doituong.DanToc)
  DoiTuongs: [DoiTuong];
}
