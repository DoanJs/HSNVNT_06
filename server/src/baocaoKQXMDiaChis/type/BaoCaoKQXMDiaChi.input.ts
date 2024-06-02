import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class BaoCaoKQXMDiaChiInput {
  @Field({ nullable: true })
  Ngay?: string;

  @Field({ nullable: true })
  HoTenChuHo?: string;

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
  NoiLamViec?: string;

  @Field({ nullable: true })
  QuanHeGiaDinh?: string;

  @Field({ nullable: true })
  HoKhacCungDC?: string;

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
  MaDiaChiNV?: number;

  @Field({ nullable: true })
  MaTSXacMinh?: number;

  @Field({ nullable: true })
  MaLanhDaoPD?: number;

  @Field({ nullable: true })
  MaBCHPhuTrach?: number;
}
