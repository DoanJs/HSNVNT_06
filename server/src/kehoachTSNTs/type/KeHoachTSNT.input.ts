import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class KeHoachTSNTInput {
  @Field({ nullable: true })
  So?: string;

  @Field({ nullable: true })
  Ngay?: string;

  @Field({ nullable: true })
  VanDeChuY?: string;

  @Field({ nullable: true })
  NoiDung?: string;

  

  @Field({ nullable: true })
  MaDN?: number;

  @Field({ nullable: true })
  MaQD?: number;

  @Field({ nullable: true })
  MaCAQHvaTD?: number;

  @Field({ nullable: true })
  MaDoiTuong?: number;

  @Field({ nullable: true })
  MaDoi?: number;
  
  @Field({ nullable: true })
  MaTramCT?: number;

  @Field({ nullable: true })
  MaLanhDaoPD?: number;

  @Field({ nullable: true })
  MaBCHPhuTrach?: number;
}
