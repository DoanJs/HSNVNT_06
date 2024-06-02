import { Field, ObjectType } from '@nestjs/graphql';
import { CBCS } from 'src/cbcss/CBCS.model';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'ChucVus' })
@ObjectType()
export class ChucVu {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'PK_MaCV' })
  @Field()
  MaCV: number;

  @Column({ type: 'nvarchar', length: 50, nullable: true })
  @Field({ nullable: true })
  ChucVu: string;

  // relation

  @OneToMany(() => CBCS, (cbcs) => cbcs.ChucVu)
  CBCSs: [CBCS];
}
