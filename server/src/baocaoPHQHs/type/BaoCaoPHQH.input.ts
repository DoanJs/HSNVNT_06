import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class BaoCaoPHQHInput {
  @Field({ nullable: true })
  Ngay?: string;

  @Field({ nullable: true })
  BiDanh?: string;

  @Field({ nullable: true })
  ThoiGianPH?: string;

  @Field({ nullable: true })
  DiaDiemPH?: string;

  @Field({ nullable: true })
  HinhAnh?: string;

  @Field({ nullable: true })
  DDNhanDang?: string;

  @Field({ nullable: true })
  DiaChiCC?: string;

  @Field({ nullable: true })
  TSNhanXet?: string;

  @Field({ nullable: true })
  MaKQ?: number;

  @Field({ nullable: true })
  MaCAQHvaTD?: number;

  @Field({ nullable: true })
  MaDoi?: number;

  @Field({ nullable: true })
  MaDoiTuong?: number;

  @Field({ nullable: true })
  MaToTruongTS?: number;

  @Field({ nullable: true })
  MaLanhDaoPD?: number;
}
