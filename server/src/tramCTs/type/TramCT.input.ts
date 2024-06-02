import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class TramCTInput {
  @Field({ nullable: true })
  Ngay?: string;

  @Field({ nullable: true })
  DiaDiem?: string;

  @Field({ nullable: true })
  TinhHinhDB?: string;

  @Field({ nullable: true })
  LyLichTram?: string;

  @Field({ nullable: true })
  SoDoTram?: string;

  @Field({ nullable: true })
  VanDeChuY?: string;

  @Field({ nullable: true })
  QuyDinh?: string;

  @Field({ nullable: true })
  MaCAQHvaTD?: number;

  @Field({ nullable: true })
  MaDoi?: number;

  @Field({ nullable: true })
  MaTSXayDung?: number;

  @Field({ nullable: true })
  MaLanhDaoPD?: number;
}
