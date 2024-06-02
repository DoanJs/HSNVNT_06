import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class BaoCaoKQGHInput {
  @Field({ nullable: true })
  Ngay?: string;

  @Field({ nullable: true })
  HinhAnh?: string;

  @Field({ nullable: true })
  MucDich?: string;

  @Field({ nullable: true })
  ThoiGian?: string;

  @Field({ nullable: true })
  DiaDiem?: string;

  @Field({ nullable: true })
  PhuongTienSD?: string;

  @Field({ nullable: true })
  VaiNguyTrang?: string;

  @Field({ nullable: true })
  NoiDung?: string;

  @Field({ nullable: true })
  MaKQ?: number;

  @Field({ nullable: true })
  MaCAQHvaTD?: number;

  @Field({ nullable: true })
  MaDoi?: number;

  @Field({ nullable: true })
  MaDoiTuong?: number;

  @Field({ nullable: true })
  MaLanhDaoPD?: number;
}
