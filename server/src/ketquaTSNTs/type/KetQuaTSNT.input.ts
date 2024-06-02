import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class KetQuaTSNTInput {
  @Field({ nullable: true })
  ThoiGianBD?: string;

  @Field({ nullable: true })
  ThoiGianKT?: string;

  @Field({ nullable: true })
  MaQD?: number;
  
  @Field({ nullable: true })
  MaKH?: number;

  @Field({ nullable: true })
  MaCATTPvaTD?: number;

  @Field({ nullable: true })
  MaCAQHvaTD?: number;

  @Field({ nullable: true })
  MaDoi?: number;

  @Field({ nullable: true })
  MaDoiTuong?: number;
}
