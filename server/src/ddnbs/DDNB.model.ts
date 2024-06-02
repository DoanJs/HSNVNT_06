import { Field, ObjectType } from '@nestjs/graphql';
import { KetQuaTSNT } from 'src/ketquaTSNTs/KetQuaTSNT.model';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'DDNBs' })
@ObjectType()
export class DDNB {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'PK_MaDDNB' })
  @Field()
  MaDDNB: number;

  @Column({ type: 'nvarchar', length: 100, nullable: true })
  @Field({ nullable: true })
  DacDiem: string;

  // relation

  @ManyToMany(() => KetQuaTSNT, (ketquaTSNT) => ketquaTSNT.DDNBs)
  KetQuaTSNTs: [KetQuaTSNT];
}
