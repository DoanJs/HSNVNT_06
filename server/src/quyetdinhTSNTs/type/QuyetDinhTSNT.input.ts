import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class QuyetDinhTSNTInput {
  @Field({ nullable: true })
  So?: string;

  @Field({ nullable: true })
  Ngay?: string;

  @Field({ nullable: true })
  BiDanh?: string;

  @Field({ nullable: true })
  ThoiGianBD?: string;

  @Field({ nullable: true })
  ThoiGianKT?: string;

  @Field({ nullable: true })
  NhiemVuCT?: string;

  @Field({ nullable: true })
  MaDoiTuong?: number;

  @Field({ nullable: true })
  MaDN?: number;

  @Field({ nullable: true })
  MaLanhDaoPD?: number;

  @Field({ nullable: true })
  MaDoi?: number;

  @Field({ nullable: true })
  MaCATTPvaTD?: number;

  @Field({ nullable: true })
  MaCAQHvaTD?: number;
}
