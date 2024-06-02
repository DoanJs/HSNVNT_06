import { Field, ObjectType } from '@nestjs/graphql';
import { CBCS } from 'src/cbcss/CBCS.model';
import { KeHoachTSNT } from 'src/kehoachTSNTs/KeHoachTSNT.model';
import { LoaiLLDB } from 'src/loaiLLDBs/LoaiLLDB.model';
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'LLDBs' })
@ObjectType()
export class LLDB {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'PK_MaLLDB' })
  @Field()
  MaLLDB: number;

  @Column({ type: 'nvarchar', length: 30, nullable: true })
  @Field({ nullable: true })
  BiDanh: string;

  // relation

  @ManyToOne(() => LoaiLLDB, loaiLLDB => loaiLLDB.LLDBs, { cascade: true, eager: true })
  @JoinColumn({
    name: "MaLoaiLLDB",
    foreignKeyConstraintName: "FK_MaLoaiLLDB_LLDB"
  })
  LoaiLLDB: LoaiLLDB

  @ManyToMany(() => KeHoachTSNT, kehoachTSNT => kehoachTSNT.LLDBs)
  KeHoachTSNTs: [KeHoachTSNT]

  @ManyToOne(() => CBCS, cbcs => cbcs.TSQuanLy_LLDBs, { cascade: true, eager: true })
  @JoinColumn({
    name: "MaTSQuanLy",
    foreignKeyConstraintName: "FK_MaTSQuanLy_LLDB"
  })
  TSQuanLy: CBCS
}
