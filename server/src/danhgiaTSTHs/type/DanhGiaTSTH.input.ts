import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DanhGiaTSTHInput {
  @Field({ nullable: true })
  VaiTro?: string;

  @Field({ nullable: true })
  DanhGia?: string;

  @Field({ nullable: true })
  LyDo?: string;

  @Field({ nullable: true })
  MaKQ?: number;

  @Field({ nullable: true })
  MaCBCS?: number;
}
