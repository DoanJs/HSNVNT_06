import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class BaoCaoKQXMQuanHeInput {
  @Field({ nullable: true })
  Ngay?: string;

  @Field({ nullable: true })
  HoTen?: string;

  @Field({ nullable: true })
  TenKhac?: string;

  @Field({ nullable: true })
  GioiTinh?: number;

  @Field({ nullable: true })
  NamSinh?: string;

  @Field({ nullable: true })
  QueQuan?: string;

  @Field({ nullable: true })
  HKTT?: string;

  @Field({ nullable: true })
  NoiO?: string;

  @Field({ nullable: true })
  NgheNghiep?: string;

  @Field({ nullable: true })
  ChucVu?: string;

  @Field({ nullable: true })
  NoiLamViec?: string;

  @Field({ nullable: true })
  QuanHeGDXH?: string;

  @Field({ nullable: true })
  BienPhapXM?: string;

  @Field({ nullable: true })
  MaCAQHvaTD?: number;

  @Field({ nullable: true })
  MaDoi?: number;

  @Field({ nullable: true })
  MaDoiTuong?: number;

  @Field({ nullable: true })
  MaQD?: number;

  @Field({ nullable: true })
  MaBCPHQH?: number;

  @Field({ nullable: true })
  MaTSXacMinh?: number;

  @Field({ nullable: true })
  MaLanhDaoPD?: number;

  @Field({ nullable: true })
  MaBCHPhuTrach?: number;
}
