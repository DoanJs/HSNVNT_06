import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class BaoCaoKTDNInput {
  @Field({ nullable: true })
  Ngay?: string;

  @Field({ nullable: true })
  TinhHinhDT?: string;

  @Field({ nullable: true })
  VanDeRKN?: string;

  @Field({ nullable: true })
  MaKQ?: number;

  @Field({ nullable: true })
  MaLanhDaoPD?: number;

  @Field({ nullable: true })
  MaCBTongHop?: number;
}
