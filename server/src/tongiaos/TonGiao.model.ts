import { Field, ObjectType } from '@nestjs/graphql';
import { CBCS } from 'src/cbcss/CBCS.model';
import { DoiTuong } from 'src/doituongs/DoiTuong.model';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'TonGiaos' })
@ObjectType()
export class TonGiao {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'PK_MaTG' })
  @Field()
  MaTG: number;

  @Column({ type: 'nvarchar', length: 50, nullable: true })
  @Field({ nullable: true })
  TenTG: string;

  //relation
  @OneToMany(() => CBCS, cbcs => cbcs.TonGiao)
  CBCSs: [CBCS]

  @OneToMany(() => DoiTuong, (doituong) => doituong.TonGiao)
  DoiTuongs: [DoiTuong];
}
