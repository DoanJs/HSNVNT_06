import { Field, ObjectType } from '@nestjs/graphql';
import { CBCS } from 'src/cbcss/CBCS.model';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'CapBacs' })
@ObjectType()
export class CapBac {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'PK_MaCB' })
  @Field()
  MaCB: number;

  @Column({ type: 'nvarchar', length: 50, nullable: true })
  @Field({ nullable: true })
  CapBac: string;

  // relation

  @OneToMany(() => CBCS, (cbcs) => cbcs.CapBac)
  CBCSs: [CBCS];
}
