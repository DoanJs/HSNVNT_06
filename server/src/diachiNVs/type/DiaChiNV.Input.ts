import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DiaChiNVInput {
  @Field({ nullable: true })
  ThoiGianPH?: string;

  @Field({ nullable: true })
  DiaChi?: string;

  @Field({ nullable: true })
  HinhAnh?: string;

  @Field({ nullable: true })
  MaKQ?: number;
}
