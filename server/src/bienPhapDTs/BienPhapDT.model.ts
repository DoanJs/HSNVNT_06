import { Field, ObjectType } from '@nestjs/graphql';
import { DoiTuong } from 'src/doituongs/DoiTuong.model';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'BienPhapDTs' })
@ObjectType()
export class BienPhapDT {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'PK_MaBPDT' })
  @Field()
  MaBPDT: number;

  @Column({ type: 'nvarchar', length: 50, nullable: true })
  @Field({ nullable: true })
  BienPhapDT: string;

  // relation

  @ManyToMany(() => DoiTuong, (doituong) => doituong.BienPhapDTs, {
    cascade: true,
    eager: true,
  })
  @JoinTable({
    name: 'BienPhapDTs_DoiTuongs',
    joinColumn: {
      name: 'MaBPDT',
      foreignKeyConstraintName: 'FK_MaBPDT_BienPhapDTs_DoiTuongs',
    },
    inverseJoinColumn: {
      name: 'MaDoiTuong',
      foreignKeyConstraintName: 'FK_MaDoiTuong_BienPhapDTs_DoiTuongs',
    },
  })
  DoiTuongs: [DoiTuong];
}
