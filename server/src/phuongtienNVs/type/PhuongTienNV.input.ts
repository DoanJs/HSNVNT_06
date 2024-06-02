import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class PhuongTienNVInput {
  @Field({ nullable: true })
  ThoiGianPH?: string;

  @Field({ nullable: true })
  DiaDiemPH?: string;

  @Field({ nullable: true })
  BKS?: string;

  @Field({ nullable: true })
  HinhAnh?: string;

  @Field({ nullable: true })
  MaKQ?: number;
}
