import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class BienBanRKNInput {
  @Field({ nullable: true })
  Ngay?: string;

  @Field({ nullable: true })
  DanhGiaLDP?: string;

  @Field({ nullable: true })
  DanhGiaTS?: string;

  @Field({ nullable: true })
  DanhGiaDT?: string;

  @Field({ nullable: true })
  KetLuan?: string;

  @Field({ nullable: true })
  DeXuat?: string;

  @Field({ nullable: true })
  MaKQ?: string;

  @Field({ nullable: true })
  MaChuToa?: string;

  @Field({ nullable: true })
  MaThuKy?: string;
}
