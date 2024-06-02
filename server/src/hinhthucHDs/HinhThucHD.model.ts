import { Field, ObjectType } from '@nestjs/graphql';
import { DeNghiTSNT } from 'src/denghiTSNTs/DeNghiTSNT.model';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'HinhThucHDs' })
@ObjectType()
export class HinhThucHD {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'PK_HTHD' })
  @Field()
  MaHTHD: number;

  @Column({ type: 'nvarchar', length: 30, nullable: true })
  @Field({ nullable: true })
  HinhThuc: string;


  // relation



  
  @OneToMany(() => DeNghiTSNT, denghiTSNT=> denghiTSNT.HinhThucHD)
  DeNghiTSNTs: [DeNghiTSNT]
}
