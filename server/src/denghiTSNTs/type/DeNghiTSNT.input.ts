import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DeNghiTSNTInput {
  @Field({ nullable: true })
  So?: string;

  @Field({ nullable: true })
  Ngay?: string;

  @Field({ nullable: true })
  ThoiGianBD?: string;

  @Field({ nullable: true })
  ThoiGianKT?: string;

  @Field({ nullable: true })
  NoiDungDN?: string;

  @Field({ nullable: true })
  NoiDungTN?: string;

  @Field({ nullable: true })
  MaCATTPvaTD?: number;

  @Field({ nullable: true })
  MaCAQHvaTD?: number;

  @Field({ nullable: true })
  MaDoiTuong?: number;

  @Field({ nullable: true })
  MaHTHD?: number;
}
