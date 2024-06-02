/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type Account = {
  __typename?: 'Account';
  AccountID: Scalars['Float']['output'];
  Position?: Maybe<Scalars['String']['output']>;
  Role?: Maybe<Scalars['String']['output']>;
  Username: Scalars['String']['output'];
};

export type AccountInput = {
  Password: Scalars['String']['input'];
  Position?: InputMaybe<Scalars['String']['input']>;
  Role?: InputMaybe<Scalars['String']['input']>;
  Username: Scalars['String']['input'];
};

export type BaoCaoKqgh = {
  __typename?: 'BaoCaoKQGH';
  DiaDiem?: Maybe<Scalars['String']['output']>;
  Doi: Doi;
  DoiTuong: DoiTuong;
  DonVi: CaqHvaTd;
  HinhAnh?: Maybe<Scalars['String']['output']>;
  KetQuaTSNT: KetQuaTsnt;
  LanhDaoPD: Cbcs;
  MaBCKQGH: Scalars['Float']['output'];
  MucDich?: Maybe<Scalars['String']['output']>;
  Ngay?: Maybe<Scalars['DateTime']['output']>;
  NoiDung?: Maybe<Scalars['String']['output']>;
  PhuongTienSD?: Maybe<Scalars['String']['output']>;
  TSThucHiens: Array<Cbcs>;
  ThoiGian?: Maybe<Scalars['DateTime']['output']>;
  VaiNguyTrang?: Maybe<Scalars['String']['output']>;
};

export type BaoCaoKqghInput = {
  DiaDiem?: InputMaybe<Scalars['String']['input']>;
  HinhAnh?: InputMaybe<Scalars['String']['input']>;
  MaCAQHvaTD?: InputMaybe<Scalars['Float']['input']>;
  MaDoi?: InputMaybe<Scalars['Float']['input']>;
  MaDoiTuong?: InputMaybe<Scalars['Float']['input']>;
  MaKQ?: InputMaybe<Scalars['Float']['input']>;
  MaLanhDaoPD?: InputMaybe<Scalars['Float']['input']>;
  MucDich?: InputMaybe<Scalars['String']['input']>;
  Ngay?: InputMaybe<Scalars['String']['input']>;
  NoiDung?: InputMaybe<Scalars['String']['input']>;
  PhuongTienSD?: InputMaybe<Scalars['String']['input']>;
  ThoiGian?: InputMaybe<Scalars['String']['input']>;
  VaiNguyTrang?: InputMaybe<Scalars['String']['input']>;
};

export type BaoCaoKqxmDiaChi = {
  __typename?: 'BaoCaoKQXMDiaChi';
  BanChiHuy: Cbcs;
  BienPhapXM?: Maybe<Scalars['String']['output']>;
  DiaChiNV: DiaChiNv;
  Doi: Doi;
  DonVi: CaqHvaTd;
  GioiTinh?: Maybe<Scalars['Float']['output']>;
  HKTT?: Maybe<Scalars['String']['output']>;
  HoKhacCungDC?: Maybe<Scalars['String']['output']>;
  HoTenChuHo?: Maybe<Scalars['String']['output']>;
  LanhDaoPD: Cbcs;
  MaBCKQXMDC: Scalars['Float']['output'];
  NamSinh?: Maybe<Scalars['DateTime']['output']>;
  Ngay?: Maybe<Scalars['DateTime']['output']>;
  NgheNghiep?: Maybe<Scalars['String']['output']>;
  NoiLamViec?: Maybe<Scalars['String']['output']>;
  NoiO?: Maybe<Scalars['String']['output']>;
  QuanHeGiaDinh?: Maybe<Scalars['String']['output']>;
  QueQuan?: Maybe<Scalars['String']['output']>;
  TSXacMinh: Cbcs;
  TenKhac?: Maybe<Scalars['String']['output']>;
};

export type BaoCaoKqxmDiaChiInput = {
  BienPhapXM?: InputMaybe<Scalars['String']['input']>;
  GioiTinh?: InputMaybe<Scalars['Float']['input']>;
  HKTT?: InputMaybe<Scalars['String']['input']>;
  HoKhacCungDC?: InputMaybe<Scalars['String']['input']>;
  HoTenChuHo?: InputMaybe<Scalars['String']['input']>;
  MaBCHPhuTrach?: InputMaybe<Scalars['Float']['input']>;
  MaCAQHvaTD?: InputMaybe<Scalars['Float']['input']>;
  MaDiaChiNV?: InputMaybe<Scalars['Float']['input']>;
  MaDoi?: InputMaybe<Scalars['Float']['input']>;
  MaDoiTuong?: InputMaybe<Scalars['Float']['input']>;
  MaLanhDaoPD?: InputMaybe<Scalars['Float']['input']>;
  MaQD?: InputMaybe<Scalars['Float']['input']>;
  MaTSXacMinh?: InputMaybe<Scalars['Float']['input']>;
  NamSinh?: InputMaybe<Scalars['String']['input']>;
  Ngay?: InputMaybe<Scalars['String']['input']>;
  NgheNghiep?: InputMaybe<Scalars['String']['input']>;
  NoiLamViec?: InputMaybe<Scalars['String']['input']>;
  NoiO?: InputMaybe<Scalars['String']['input']>;
  QuanHeGiaDinh?: InputMaybe<Scalars['String']['input']>;
  QueQuan?: InputMaybe<Scalars['String']['input']>;
  TenKhac?: InputMaybe<Scalars['String']['input']>;
};

export type BaoCaoKqxmQuanHe = {
  __typename?: 'BaoCaoKQXMQuanHe';
  BanChiHuy: Cbcs;
  BaoCaoPHQH: BaoCaoPhqh;
  BienPhapXM?: Maybe<Scalars['String']['output']>;
  ChucVu?: Maybe<Scalars['String']['output']>;
  Doi: Doi;
  DonVi: CaqHvaTd;
  GioiTinh?: Maybe<Scalars['Float']['output']>;
  HKTT?: Maybe<Scalars['String']['output']>;
  HoTen?: Maybe<Scalars['String']['output']>;
  LanhDaoPD: Cbcs;
  MaBCKQXMQH: Scalars['Float']['output'];
  NamSinh?: Maybe<Scalars['DateTime']['output']>;
  Ngay?: Maybe<Scalars['DateTime']['output']>;
  NgheNghiep?: Maybe<Scalars['String']['output']>;
  NoiLamViec?: Maybe<Scalars['String']['output']>;
  NoiO?: Maybe<Scalars['String']['output']>;
  QuanHeGDXH?: Maybe<Scalars['String']['output']>;
  QueQuan?: Maybe<Scalars['String']['output']>;
  TSXacMinh: Cbcs;
  TenKhac?: Maybe<Scalars['String']['output']>;
};

export type BaoCaoKqxmQuanHeInput = {
  BienPhapXM?: InputMaybe<Scalars['String']['input']>;
  ChucVu?: InputMaybe<Scalars['String']['input']>;
  GioiTinh?: InputMaybe<Scalars['Float']['input']>;
  HKTT?: InputMaybe<Scalars['String']['input']>;
  HoTen?: InputMaybe<Scalars['String']['input']>;
  MaBCHPhuTrach?: InputMaybe<Scalars['Float']['input']>;
  MaBCPHQH?: InputMaybe<Scalars['Float']['input']>;
  MaCAQHvaTD?: InputMaybe<Scalars['Float']['input']>;
  MaDoi?: InputMaybe<Scalars['Float']['input']>;
  MaDoiTuong?: InputMaybe<Scalars['Float']['input']>;
  MaLanhDaoPD?: InputMaybe<Scalars['Float']['input']>;
  MaQD?: InputMaybe<Scalars['Float']['input']>;
  MaTSXacMinh?: InputMaybe<Scalars['Float']['input']>;
  NamSinh?: InputMaybe<Scalars['String']['input']>;
  Ngay?: InputMaybe<Scalars['String']['input']>;
  NgheNghiep?: InputMaybe<Scalars['String']['input']>;
  NoiLamViec?: InputMaybe<Scalars['String']['input']>;
  NoiO?: InputMaybe<Scalars['String']['input']>;
  QuanHeGDXH?: InputMaybe<Scalars['String']['input']>;
  QueQuan?: InputMaybe<Scalars['String']['input']>;
  TenKhac?: InputMaybe<Scalars['String']['input']>;
};

export type BaoCaoKtdn = {
  __typename?: 'BaoCaoKTDN';
  MaBCKTDN: Scalars['Float']['output'];
  Ngay?: Maybe<Scalars['DateTime']['output']>;
  TinhHinhDT?: Maybe<Scalars['String']['output']>;
  VanDeRKN?: Maybe<Scalars['String']['output']>;
};

export type BaoCaoKtdnInput = {
  MaCBTongHop?: InputMaybe<Scalars['Float']['input']>;
  MaKQ?: InputMaybe<Scalars['Float']['input']>;
  MaLanhDaoPD?: InputMaybe<Scalars['Float']['input']>;
  Ngay?: InputMaybe<Scalars['String']['input']>;
  TinhHinhDT?: InputMaybe<Scalars['String']['input']>;
  VanDeRKN?: InputMaybe<Scalars['String']['input']>;
};

export type BaoCaoPhqh = {
  __typename?: 'BaoCaoPHQH';
  BaoCaoKQXMQuanHe: BaoCaoKqxmQuanHe;
  BiDanh?: Maybe<Scalars['String']['output']>;
  DDNhanDang?: Maybe<Scalars['String']['output']>;
  DiaChiCC?: Maybe<Scalars['String']['output']>;
  DiaDiemPH?: Maybe<Scalars['String']['output']>;
  Doi: Doi;
  DoiTuong: DoiTuong;
  DonVi: CaqHvaTd;
  HinhAnh?: Maybe<Scalars['String']['output']>;
  KetQuaTSNT: KetQuaTsnt;
  KetQuaXMQuanHe: KetQuaXmQuanHe;
  LanhDaoPD: Cbcs;
  MaBCPHQH: Scalars['Float']['output'];
  Ngay?: Maybe<Scalars['DateTime']['output']>;
  TSNhanXet?: Maybe<Scalars['String']['output']>;
  TSThucHiens: Array<Cbcs>;
  ThoiGianPH?: Maybe<Scalars['DateTime']['output']>;
  ToTruongTS: Cbcs;
};

export type BaoCaoPhqhInput = {
  BiDanh?: InputMaybe<Scalars['String']['input']>;
  DDNhanDang?: InputMaybe<Scalars['String']['input']>;
  DiaChiCC?: InputMaybe<Scalars['String']['input']>;
  DiaDiemPH?: InputMaybe<Scalars['String']['input']>;
  HinhAnh?: InputMaybe<Scalars['String']['input']>;
  MaCAQHvaTD?: InputMaybe<Scalars['Float']['input']>;
  MaDoi?: InputMaybe<Scalars['Float']['input']>;
  MaDoiTuong?: InputMaybe<Scalars['Float']['input']>;
  MaKQ?: InputMaybe<Scalars['Float']['input']>;
  MaLanhDaoPD?: InputMaybe<Scalars['Float']['input']>;
  MaToTruongTS?: InputMaybe<Scalars['Float']['input']>;
  Ngay?: InputMaybe<Scalars['String']['input']>;
  TSNhanXet?: InputMaybe<Scalars['String']['input']>;
  ThoiGianPH?: InputMaybe<Scalars['String']['input']>;
};

export type BienBanRkn = {
  __typename?: 'BienBanRKN';
  DanhGiaDT?: Maybe<Scalars['String']['output']>;
  DanhGiaLDP?: Maybe<Scalars['String']['output']>;
  DanhGiaTS?: Maybe<Scalars['String']['output']>;
  DeXuat?: Maybe<Scalars['String']['output']>;
  KetLuan?: Maybe<Scalars['String']['output']>;
  MaBBRKN: Scalars['Float']['output'];
  Ngay?: Maybe<Scalars['DateTime']['output']>;
};

export type BienBanRknInput = {
  DanhGiaDT?: InputMaybe<Scalars['String']['input']>;
  DanhGiaLDP?: InputMaybe<Scalars['String']['input']>;
  DanhGiaTS?: InputMaybe<Scalars['String']['input']>;
  DeXuat?: InputMaybe<Scalars['String']['input']>;
  KetLuan?: InputMaybe<Scalars['String']['input']>;
  MaChuToa?: InputMaybe<Scalars['String']['input']>;
  MaKQ?: InputMaybe<Scalars['String']['input']>;
  MaThuKy?: InputMaybe<Scalars['String']['input']>;
  Ngay?: InputMaybe<Scalars['String']['input']>;
};

export type BienPhapDt = {
  __typename?: 'BienPhapDT';
  BienPhapDT?: Maybe<Scalars['String']['output']>;
  DoiTuongs: Array<DoiTuong>;
  MaBPDT: Scalars['Float']['output'];
};

export type CaqHvaTd = {
  __typename?: 'CAQHvaTD';
  BaoCaoKQGHs: Array<BaoCaoKqgh>;
  BaoCaoKQXMDiaChis: Array<BaoCaoKqxmDiaChi>;
  BaoCaoKQXMQuanHes: Array<BaoCaoKqxmQuanHe>;
  BaoCaoPHQHs: Array<BaoCaoPhqh>;
  CAQHvaTD?: Maybe<Scalars['String']['output']>;
  CATTPvaTD: CattPvaTd;
  CBCSs: Array<Cbcs>;
  DeNghiTSNTs: Array<DeNghiTsnt>;
  Dois: Array<Doi>;
  KeHoachTSNTs: Array<KeHoachTsnt>;
  KyHieu?: Maybe<Scalars['String']['output']>;
  MaCAQHvaTD: Scalars['Float']['output'];
  QuyetDinhTSNTs: Array<QuyetDinhTsnt>;
  TramCTs: Array<TramCt>;
};

export type CaqHvaTdInput = {
  CAQHvaTD?: InputMaybe<Scalars['String']['input']>;
  KyHieu?: InputMaybe<Scalars['String']['input']>;
  MaCATTPvaTD?: InputMaybe<Scalars['Float']['input']>;
};

export type CattPvaTd = {
  __typename?: 'CATTPvaTD';
  CAQHvaTDs: Array<CaqHvaTd>;
  CATTPvaTD?: Maybe<Scalars['String']['output']>;
  CapCA: CapCa;
  DeNghiTSNTs: Array<DeNghiTsnt>;
  MaCATTPvaTD: Scalars['Float']['output'];
  QuyetDinhTSNTs: Array<QuyetDinhTsnt>;
};

export type CattPvaTdInput = {
  CATTPvaTD?: InputMaybe<Scalars['String']['input']>;
  MaCapCA?: InputMaybe<Scalars['Float']['input']>;
};

export type Cbcs = {
  __typename?: 'CBCS';
  AnhDD?: Maybe<Scalars['String']['output']>;
  BanChiHuy_BaoCaoKQXMDiaChis: Array<BaoCaoKqxmDiaChi>;
  BanChiHuy_BaoCaoKQXMQuanHes: Array<BaoCaoKqxmQuanHe>;
  BanChiHuy_KeHoachTSNTs: Array<KeHoachTsnt>;
  CAQHvaTD: CaqHvaTd;
  CBPhuTrachDN_DeNghiTSNTs: Array<DeNghiTsnt>;
  CCCD?: Maybe<Scalars['String']['output']>;
  CMND?: Maybe<Scalars['String']['output']>;
  CapBac: CapBac;
  ChucVu: ChucVu;
  DaiDienDonViTSNT_DeNghiTSNTs: Array<DeNghiTsnt>;
  DanToc: DanToc;
  DanhGiaTSTHs: Array<DanhGiaTsth>;
  Doi: Doi;
  GioiTinh?: Maybe<Scalars['Float']['output']>;
  HKTT?: Maybe<Scalars['String']['output']>;
  HoTen?: Maybe<Scalars['String']['output']>;
  LanhDaoCapTren_DeNghiTSNTs: Array<DeNghiTsnt>;
  LanhDaoDVDN_DeNghiTSNTs: Array<DeNghiTsnt>;
  LanhDaoPD_BaoCaoKQGHs: Array<BaoCaoKqgh>;
  LanhDaoPD_BaoCaoKQXMDiaChis: Array<BaoCaoKqxmDiaChi>;
  LanhDaoPD_BaoCaoKQXMQuanHes: Array<BaoCaoKqxmQuanHe>;
  LanhDaoPD_BaoCaoPHQHs: Array<BaoCaoPhqh>;
  LanhDaoPD_KeHoachTSNTs: Array<KeHoachTsnt>;
  LanhDaoPD_TramCTs: Array<TramCt>;
  LanhDaoQD_QuyetDinhTSNTs: Array<QuyetDinhTsnt>;
  LucLuongThamGiaKHs: Array<LucLuongThamGiaKh>;
  MaCBCS: Scalars['Float']['output'];
  NgaySinh?: Maybe<Scalars['DateTime']['output']>;
  NoiO?: Maybe<Scalars['String']['output']>;
  PhuongTien?: Maybe<Scalars['String']['output']>;
  QueQuan?: Maybe<Scalars['String']['output']>;
  QuocTich: QuocTich;
  SDT?: Maybe<Scalars['String']['output']>;
  SHC?: Maybe<Scalars['String']['output']>;
  TSQuanLy_LLDBs: Array<Lldb>;
  TSThucHien_BaoCaoKQGHs: Array<BaoCaoKqgh>;
  TSThucHien_BaoCaoPHQHs: Array<BaoCaoPhqh>;
  TSThucHien_DiaChiNVs: Array<DiaChiNv>;
  TSThucHien_PhuongTienNVs: Array<PhuongTienNv>;
  TSXacMinh_BaoCaoKQXMDiaChis: Array<BaoCaoKqxmDiaChi>;
  TSXacMinh_BaoCaoKQXMQuanHes: Array<BaoCaoKqxmQuanHe>;
  TSXayDung_TramCTs: Array<TramCt>;
  TenKhac?: Maybe<Scalars['String']['output']>;
  ThongTinChiTiet?: Maybe<Scalars['String']['output']>;
  ToTruongTS_BaoCaoPHQHs: Array<BaoCaoPhqh>;
  TonGiao: TonGiao;
};

export type CbcsInput = {
  AnhDD?: InputMaybe<Scalars['String']['input']>;
  CCCD?: InputMaybe<Scalars['String']['input']>;
  CMND?: InputMaybe<Scalars['String']['input']>;
  GioiTinh?: InputMaybe<Scalars['Float']['input']>;
  HKTT?: InputMaybe<Scalars['String']['input']>;
  HoTen?: InputMaybe<Scalars['String']['input']>;
  MaCAQHvaTD?: InputMaybe<Scalars['Float']['input']>;
  MaCB?: InputMaybe<Scalars['Float']['input']>;
  MaCV?: InputMaybe<Scalars['Float']['input']>;
  MaDT?: InputMaybe<Scalars['Float']['input']>;
  MaDoi?: InputMaybe<Scalars['Float']['input']>;
  MaQT?: InputMaybe<Scalars['Float']['input']>;
  MaTG?: InputMaybe<Scalars['Float']['input']>;
  NgaySinh?: InputMaybe<Scalars['String']['input']>;
  NoiO?: InputMaybe<Scalars['String']['input']>;
  PhuongTien?: InputMaybe<Scalars['String']['input']>;
  QueQuan?: InputMaybe<Scalars['String']['input']>;
  SDT?: InputMaybe<Scalars['String']['input']>;
  SHC?: InputMaybe<Scalars['String']['input']>;
  TenKhac?: InputMaybe<Scalars['String']['input']>;
  ThongTinChiTiet?: InputMaybe<Scalars['String']['input']>;
};

export type CapBac = {
  __typename?: 'CapBac';
  CBCSs: Array<Cbcs>;
  CapBac?: Maybe<Scalars['String']['output']>;
  MaCB: Scalars['Float']['output'];
};

export type CapCa = {
  __typename?: 'CapCA';
  CATTPvaTDs: Array<CattPvaTd>;
  CapCA?: Maybe<Scalars['String']['output']>;
  MaCapCA: Scalars['Float']['output'];
};

export type ChucVu = {
  __typename?: 'ChucVu';
  CBCSs: Array<Cbcs>;
  ChucVu?: Maybe<Scalars['String']['output']>;
  MaCV: Scalars['Float']['output'];
};

export type ChuyenAn = {
  __typename?: 'ChuyenAn';
  BiSo?: Maybe<Scalars['String']['output']>;
  DoiTuongCAs: Array<DoiTuongCa>;
  MaCA: Scalars['Float']['output'];
  NoiDung?: Maybe<Scalars['String']['output']>;
  TenCA?: Maybe<Scalars['String']['output']>;
  ThoiGianBD?: Maybe<Scalars['DateTime']['output']>;
  TinhChat: TinhChatDt;
};

export type ChuyenAnInput = {
  BiSo?: InputMaybe<Scalars['String']['input']>;
  MaTC?: InputMaybe<Scalars['String']['input']>;
  NoiDung?: InputMaybe<Scalars['String']['input']>;
  TenCA?: InputMaybe<Scalars['String']['input']>;
  ThoiGianBD?: InputMaybe<Scalars['String']['input']>;
};

export type Ddnb = {
  __typename?: 'DDNB';
  DacDiem?: Maybe<Scalars['String']['output']>;
  KetQuaTSNTs: Array<KetQuaTsnt>;
  MaDDNB: Scalars['Float']['output'];
};

export type DanToc = {
  __typename?: 'DanToc';
  CBCSs: Array<Cbcs>;
  DoiTuongs: Array<DoiTuong>;
  MaDT: Scalars['Float']['output'];
  QuocTich: QuocTich;
  TenDT?: Maybe<Scalars['String']['output']>;
};

export type DanTocInput = {
  MaQT?: InputMaybe<Scalars['Float']['input']>;
  TenDT?: InputMaybe<Scalars['String']['input']>;
};

export type DanhGiaTsth = {
  __typename?: 'DanhGiaTSTH';
  CBCS: Cbcs;
  DanhGia?: Maybe<Scalars['String']['output']>;
  KetQuaTSNT: KetQuaTsnt;
  LyDo?: Maybe<Scalars['String']['output']>;
  MaDanhGiaTSTH: Scalars['Float']['output'];
  VaiTro?: Maybe<Scalars['String']['output']>;
};

export type DanhGiaTsthInput = {
  DanhGia?: InputMaybe<Scalars['String']['input']>;
  LyDo?: InputMaybe<Scalars['String']['input']>;
  MaCBCS?: InputMaybe<Scalars['Float']['input']>;
  MaKQ?: InputMaybe<Scalars['Float']['input']>;
  VaiTro?: InputMaybe<Scalars['String']['input']>;
};

export type DauMoiPh_Dn = {
  __typename?: 'DauMoiPH_DN';
  CBTrucTiepPH: Cbcs;
  DeNghiTSNT: DeNghiTsnt;
  LDDonViDN: Cbcs;
  MaDMPH: Scalars['Float']['output'];
};

export type DauMoiPh_DnInput = {
  MaCBTrucTiepPH?: InputMaybe<Scalars['Float']['input']>;
  MaDN?: InputMaybe<Scalars['Float']['input']>;
  MaLDDonViDN?: InputMaybe<Scalars['Float']['input']>;
};

export type DeNghiTsnt = {
  __typename?: 'DeNghiTSNT';
  CAQHvaTD: CaqHvaTd;
  CATTPvaTD: CattPvaTd;
  CBPhuTrachDN: Cbcs;
  DaiDienDonViTSNT: Cbcs;
  DiaBanDNs: Array<TinhTp>;
  DoiTuong: DoiTuong;
  DonViDN: CaqHvaTd;
  HinhThucHD: HinhThucHd;
  KeHoachTSNT: KeHoachTsnt;
  LanhDaoCapTren: Cbcs;
  LanhDaoDVDN: Cbcs;
  MaDN: Scalars['Float']['output'];
  Ngay?: Maybe<Scalars['DateTime']['output']>;
  NoiDungDN?: Maybe<Scalars['String']['output']>;
  NoiDungTN?: Maybe<Scalars['String']['output']>;
  QuyetDinhTSNT: QuyetDinhTsnt;
  So?: Maybe<Scalars['String']['output']>;
  ThoiGianBD?: Maybe<Scalars['DateTime']['output']>;
  ThoiGianKT?: Maybe<Scalars['DateTime']['output']>;
};

export type DeNghiTsntInput = {
  MaCAQHvaTD?: InputMaybe<Scalars['Float']['input']>;
  MaCATTPvaTD?: InputMaybe<Scalars['Float']['input']>;
  MaDoiTuong?: InputMaybe<Scalars['Float']['input']>;
  MaHTHD?: InputMaybe<Scalars['Float']['input']>;
  Ngay?: InputMaybe<Scalars['String']['input']>;
  NoiDungDN?: InputMaybe<Scalars['String']['input']>;
  NoiDungTN?: InputMaybe<Scalars['String']['input']>;
  So?: InputMaybe<Scalars['String']['input']>;
  ThoiGianBD?: InputMaybe<Scalars['String']['input']>;
  ThoiGianKT?: InputMaybe<Scalars['String']['input']>;
};

export type DiaChiNv = {
  __typename?: 'DiaChiNV';
  BaoCaoKQXMDiaChi: BaoCaoKqxmDiaChi;
  DiaChi?: Maybe<Scalars['String']['output']>;
  HinhAnh?: Maybe<Scalars['String']['output']>;
  KetQuaTSNT: KetQuaTsnt;
  MaDC: Scalars['Float']['output'];
  TSThucHiens: Array<Cbcs>;
  ThoiGianPH?: Maybe<Scalars['DateTime']['output']>;
};

export type DiaChiNvInput = {
  DiaChi?: InputMaybe<Scalars['String']['input']>;
  HinhAnh?: InputMaybe<Scalars['String']['input']>;
  MaKQ?: InputMaybe<Scalars['Float']['input']>;
  ThoiGianPH?: InputMaybe<Scalars['String']['input']>;
};

export type Doi = {
  __typename?: 'Doi';
  BaoCaoKQGHs: Array<BaoCaoKqgh>;
  BaoCaoKQXMDiaChis: Array<BaoCaoKqxmDiaChi>;
  BaoCaoKQXMQuanHes: Array<BaoCaoKqxmQuanHe>;
  BaoCaoPHQHs: Array<BaoCaoPhqh>;
  CAQHvaTD: CaqHvaTd;
  CBCSs: Array<Cbcs>;
  KeHoachTSNTs: Array<KeHoachTsnt>;
  MaDoi: Scalars['Float']['output'];
  QuyetDinhTSNTs: Array<QuyetDinhTsnt>;
  TenDoi?: Maybe<Scalars['String']['output']>;
  TramCTs: Array<TramCt>;
};

export type DoiInput = {
  MaCAQHvaTD?: InputMaybe<Scalars['Float']['input']>;
  TenDoi?: InputMaybe<Scalars['String']['input']>;
};

export type DoiTuong = {
  __typename?: 'DoiTuong';
  AnhDD?: Maybe<Scalars['String']['output']>;
  BaoCaoKQGHs: Array<BaoCaoKqgh>;
  BienPhapDTs: Array<BienPhapDt>;
  CCCD?: Maybe<Scalars['String']['output']>;
  CMND?: Maybe<Scalars['String']['output']>;
  ChucVu?: Maybe<Scalars['String']['output']>;
  DanToc: DanToc;
  DeNghiTSNTs: Array<DeNghiTsnt>;
  DoiTuongCAs: Array<DoiTuongCa>;
  GioiTinh?: Maybe<Scalars['Float']['output']>;
  HKTT?: Maybe<Scalars['String']['output']>;
  KeHoachTSNTs: Array<KeHoachTsnt>;
  LoaiDT: LoaiDt;
  MaDoiTuong: Scalars['Float']['output'];
  NgaySinh?: Maybe<Scalars['DateTime']['output']>;
  NgheNghiep?: Maybe<Scalars['String']['output']>;
  NoiLamViec?: Maybe<Scalars['String']['output']>;
  NoiO?: Maybe<Scalars['String']['output']>;
  NoiSinh?: Maybe<Scalars['String']['output']>;
  PhuongTien?: Maybe<Scalars['String']['output']>;
  QueQuan?: Maybe<Scalars['String']['output']>;
  QuocTich: QuocTich;
  QuyetDinhTSNTs: Array<QuyetDinhTsnt>;
  SDT?: Maybe<Scalars['String']['output']>;
  SHC?: Maybe<Scalars['String']['output']>;
  TenDT: Scalars['String']['output'];
  TenKhac?: Maybe<Scalars['String']['output']>;
  ThongTinKhac?: Maybe<Scalars['String']['output']>;
  TinhChatDT: TinhChatDt;
  TonGiao: TonGiao;
};

export type DoiTuongCa = {
  __typename?: 'DoiTuongCA';
  BiSo?: Maybe<Scalars['String']['output']>;
  ChuyenAn: ChuyenAn;
  DoiTuong: DoiTuong;
  MaDTCA: Scalars['Float']['output'];
  ViTri?: Maybe<Scalars['String']['output']>;
};

export type DoiTuongCaInput = {
  BiSo?: InputMaybe<Scalars['String']['input']>;
  MaCA?: InputMaybe<Scalars['Float']['input']>;
  MaDoiTuong?: InputMaybe<Scalars['Float']['input']>;
  ViTri?: InputMaybe<Scalars['String']['input']>;
};

export type DoiTuongInput = {
  AnhDD?: InputMaybe<Scalars['String']['input']>;
  CCCD?: InputMaybe<Scalars['String']['input']>;
  CMND?: InputMaybe<Scalars['String']['input']>;
  ChucVu?: InputMaybe<Scalars['String']['input']>;
  GioiTinh?: InputMaybe<Scalars['String']['input']>;
  HKTT?: InputMaybe<Scalars['String']['input']>;
  MaDT?: InputMaybe<Scalars['Float']['input']>;
  MaLoai?: InputMaybe<Scalars['Float']['input']>;
  MaQT?: InputMaybe<Scalars['Float']['input']>;
  MaTC?: InputMaybe<Scalars['Float']['input']>;
  MaTG?: InputMaybe<Scalars['Float']['input']>;
  NgaySinh?: InputMaybe<Scalars['String']['input']>;
  NgheNghiep?: InputMaybe<Scalars['String']['input']>;
  NoiLamViec?: InputMaybe<Scalars['String']['input']>;
  NoiO?: InputMaybe<Scalars['String']['input']>;
  NoiSinh?: InputMaybe<Scalars['String']['input']>;
  PhuongTien?: InputMaybe<Scalars['String']['input']>;
  QueQuan?: InputMaybe<Scalars['String']['input']>;
  SDT?: InputMaybe<Scalars['String']['input']>;
  SHC?: InputMaybe<Scalars['String']['input']>;
  TenDT?: InputMaybe<Scalars['String']['input']>;
  TenKhac?: InputMaybe<Scalars['String']['input']>;
  ThongTinKhac?: InputMaybe<Scalars['String']['input']>;
};

export type HinhThucHd = {
  __typename?: 'HinhThucHD';
  DeNghiTSNTs: Array<DeNghiTsnt>;
  HinhThuc?: Maybe<Scalars['String']['output']>;
  MaHTHD: Scalars['Float']['output'];
};

export type KeHoachTsnt = {
  __typename?: 'KeHoachTSNT';
  BCHPhuTrach: Cbcs;
  DeNghiTSNT: DeNghiTsnt;
  Doi: Doi;
  DoiTuong: DoiTuong;
  DonVi: CaqHvaTd;
  KetQuaTSNT: KetQuaTsnt;
  LLDBs: Array<Lldb>;
  LLTGKeHoachs: Array<LucLuongThamGiaKh>;
  LanhDaoPD: Cbcs;
  MaKH: Scalars['Float']['output'];
  Ngay?: Maybe<Scalars['String']['output']>;
  NoiDung?: Maybe<Scalars['String']['output']>;
  QuyetDinhTSNT: QuyetDinhTsnt;
  So?: Maybe<Scalars['String']['output']>;
  TramCT: TramCt;
  VanDeChuY?: Maybe<Scalars['String']['output']>;
};

export type KeHoachTsntInput = {
  MaBCHPhuTrach?: InputMaybe<Scalars['Float']['input']>;
  MaCAQHvaTD?: InputMaybe<Scalars['Float']['input']>;
  MaDN?: InputMaybe<Scalars['Float']['input']>;
  MaDoi?: InputMaybe<Scalars['Float']['input']>;
  MaDoiTuong?: InputMaybe<Scalars['Float']['input']>;
  MaLanhDaoPD?: InputMaybe<Scalars['Float']['input']>;
  MaQD?: InputMaybe<Scalars['Float']['input']>;
  MaTramCT?: InputMaybe<Scalars['Float']['input']>;
  Ngay?: InputMaybe<Scalars['String']['input']>;
  NoiDung?: InputMaybe<Scalars['String']['input']>;
  So?: InputMaybe<Scalars['String']['input']>;
  VanDeChuY?: InputMaybe<Scalars['String']['input']>;
};

export type KetQuaTsnt = {
  __typename?: 'KetQuaTSNT';
  BaoCaoKQGHs: Array<BaoCaoKqgh>;
  BaoCaoKTDN: BaoCaoKtdn;
  BaoCaoPHQHs: Array<BaoCaoPhqh>;
  DDNBs: Array<Ddnb>;
  DanhGiaTSTHs: Array<DanhGiaTsth>;
  DiaChiNVs: Array<DiaChiNv>;
  KeHoachTSNT: KeHoachTsnt;
  MaKQ: Scalars['Float']['output'];
  PhamViTSs: Array<TinhTp>;
  PhuongTienNVs: Array<PhuongTienNv>;
  QuyetDinhTSNT: QuyetDinhTsnt;
  ThoiGianBD?: Maybe<Scalars['DateTime']['output']>;
  ThoiGianKT?: Maybe<Scalars['DateTime']['output']>;
};

export type KetQuaTsntInput = {
  MaCAQHvaTD?: InputMaybe<Scalars['Float']['input']>;
  MaCATTPvaTD?: InputMaybe<Scalars['Float']['input']>;
  MaDoi?: InputMaybe<Scalars['Float']['input']>;
  MaDoiTuong?: InputMaybe<Scalars['Float']['input']>;
  MaKH?: InputMaybe<Scalars['Float']['input']>;
  MaQD?: InputMaybe<Scalars['Float']['input']>;
  ThoiGianBD?: InputMaybe<Scalars['String']['input']>;
  ThoiGianKT?: InputMaybe<Scalars['String']['input']>;
};

export type KetQuaXmDiaChi = {
  __typename?: 'KetQuaXMDiaChi';
  CAQHvaTD: CaqHvaTd;
  CATTPvaTD: CattPvaTd;
  DeNghiTSNT: DeNghiTsnt;
  DiaChiNV: DiaChiNv;
  DoiTuong: DoiTuong;
  LanhDaoPD: Cbcs;
  MaKQXMDC: Scalars['Float']['output'];
  Ngay?: Maybe<Scalars['String']['output']>;
  QuyetDinhTSNT: QuyetDinhTsnt;
  So?: Maybe<Scalars['String']['output']>;
};

export type KetQuaXmDiaChiInput = {
  MaCAQHvaTD?: InputMaybe<Scalars['Float']['input']>;
  MaCATTPvaTD?: InputMaybe<Scalars['Float']['input']>;
  MaDC?: InputMaybe<Scalars['Float']['input']>;
  MaDN?: InputMaybe<Scalars['Float']['input']>;
  MaDoiTuong?: InputMaybe<Scalars['Float']['input']>;
  MaLanhDaoPD?: InputMaybe<Scalars['Float']['input']>;
  MaQD?: InputMaybe<Scalars['Float']['input']>;
  Ngay?: InputMaybe<Scalars['String']['input']>;
  So?: InputMaybe<Scalars['String']['input']>;
};

export type KetQuaXmQuanHe = {
  __typename?: 'KetQuaXMQuanHe';
  BaoCaoPHQH: BaoCaoPhqh;
  CAQHvaTD: CaqHvaTd;
  CATTPvaTD: CattPvaTd;
  DeNghiTSNT: DeNghiTsnt;
  DoiTuong: DoiTuong;
  LanhDaoPD: Cbcs;
  MaKQXMQH: Scalars['Float']['output'];
  Ngay?: Maybe<Scalars['String']['output']>;
  QuyetDinhTSNT: QuyetDinhTsnt;
  So?: Maybe<Scalars['String']['output']>;
};

export type KetQuaXmQuanHeInput = {
  MaBCPHQH?: InputMaybe<Scalars['Float']['input']>;
  MaCAQHvaTD?: InputMaybe<Scalars['Float']['input']>;
  MaCATTPvaTD?: InputMaybe<Scalars['Float']['input']>;
  MaDN?: InputMaybe<Scalars['Float']['input']>;
  MaDoiTuong?: InputMaybe<Scalars['Float']['input']>;
  MaLanhDaoPD?: InputMaybe<Scalars['Float']['input']>;
  MaQD?: InputMaybe<Scalars['Float']['input']>;
  Ngay?: InputMaybe<Scalars['String']['input']>;
  So?: InputMaybe<Scalars['String']['input']>;
};

export type KyDuyet_Dn = {
  __typename?: 'KyDuyet_DN';
  DaiDienCATTPvaTD: Cbcs;
  DaiDienDonViDN: Cbcs;
  DaiDienDonViTSNT: Cbcs;
  DeNghiTSNT: DeNghiTsnt;
  MaKDDN: Scalars['Float']['output'];
};

export type KyDuyet_DnInput = {
  MaDN?: InputMaybe<Scalars['Float']['input']>;
  MaDaiDienCATTPvaTD?: InputMaybe<Scalars['Float']['input']>;
  MaDaiDienDonViDN?: InputMaybe<Scalars['Float']['input']>;
  MaDaiDienDonViTSNT?: InputMaybe<Scalars['Float']['input']>;
};

export type Lldb = {
  __typename?: 'LLDB';
  BiDanh?: Maybe<Scalars['String']['output']>;
  KeHoachTSNTs: Array<KeHoachTsnt>;
  LoaiLLDB: LoaiLldb;
  MaLLDB: Scalars['Float']['output'];
  TSQuanLy: Cbcs;
};

export type LldbInput = {
  BiDanh?: InputMaybe<Scalars['String']['input']>;
  MaLoaiLLDB?: InputMaybe<Scalars['Float']['input']>;
  MaTSQuanLy?: InputMaybe<Scalars['Float']['input']>;
};

export type LoaiDt = {
  __typename?: 'LoaiDT';
  DoiTuongs: Array<DoiTuong>;
  LoaiDT?: Maybe<Scalars['String']['output']>;
  MaLoaiDT: Scalars['Float']['output'];
};

export type LoaiLldb = {
  __typename?: 'LoaiLLDB';
  KyHieu?: Maybe<Scalars['String']['output']>;
  LLDBs: Array<Lldb>;
  MaLoaiLLDB: Scalars['Float']['output'];
  TenLLDB?: Maybe<Scalars['String']['output']>;
};

export type LoaiLldbInput = {
  KyHieu?: InputMaybe<Scalars['String']['input']>;
  TenLLDB?: InputMaybe<Scalars['String']['input']>;
};

export type LucLuongThamGiaKh = {
  __typename?: 'LucLuongThamGiaKH';
  CBCS: Cbcs;
  KeHoachTSNT: KeHoachTsnt;
  MaLLTGKH: Scalars['Float']['output'];
  ViTri?: Maybe<Scalars['String']['output']>;
};

export type LucLuongThamGiaKhInput = {
  MaCBCS?: InputMaybe<Scalars['Float']['input']>;
  MaKH?: InputMaybe<Scalars['Float']['input']>;
  ViTri?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAccount: Account;
  createBaoCaoKQGH: BaoCaoKqgh;
  createBaoCaoKQXMDiaChi: BaoCaoKqxmDiaChi;
  createBaoCaoKQXMQuanHe: BaoCaoKqxmQuanHe;
  createBaoCaoKTDN: BaoCaoKtdn;
  createBaoCaoPHQH: BaoCaoPhqh;
  createBienBanRKN: BienBanRkn;
  createBienPhapDT: BienPhapDt;
  createCAQHvaTD: CaqHvaTd;
  createCATTPvaTD: CattPvaTd;
  createCBCS: Cbcs;
  createCapBac: CapBac;
  createCapCA: CapCa;
  createChucVu: ChucVu;
  createChuyenAn: ChuyenAn;
  createDDNB: Ddnb;
  createDanToc: DanToc;
  createDanhGiaTSTH: DanhGiaTsth;
  createDauMoiPH_DN: DauMoiPh_Dn;
  createDeNghiTSNT: DeNghiTsnt;
  createDiaChiNV: DiaChiNv;
  createDoi: Doi;
  createDoiTuong: DoiTuong;
  createDoiTuongCA: DoiTuongCa;
  createHinhThucHD: HinhThucHd;
  createKeHoachTSNT: KeHoachTsnt;
  createKetQuaTSNT: KetQuaTsnt;
  createKetQuaXMDiaChi: KetQuaXmDiaChi;
  createKetQuaXMQuanHe: KetQuaXmQuanHe;
  createKyDuyet_DN: KyDuyet_Dn;
  createLLDB: Lldb;
  createLoaiDT: LoaiDt;
  createLoaiLLDB: LoaiLldb;
  createLucLuongThamGiaKH: LucLuongThamGiaKh;
  createPhuongTienNV: PhuongTienNv;
  createQuocTich: QuocTich;
  createQuyetDinhTSNT: QuyetDinhTsnt;
  createTinhChatDT: TinhChatDt;
  createTinhTP: TinhTp;
  createTonGiao: TonGiao;
  createTramCT: TramCt;
  deleteBaoCaoKQGH: BaoCaoKqgh;
  deleteBaoCaoKQXMDiaChi: BaoCaoKqxmDiaChi;
  deleteBaoCaoKQXMQuanHe: BaoCaoKqxmQuanHe;
  deleteBaoCaoKTDN: BaoCaoKtdn;
  deleteBaoCaoPHQH: BaoCaoPhqh;
  deleteBienBanRKN: BienBanRkn;
  deleteBienPhapDT: BienPhapDt;
  deleteCAQHvaTD: CaqHvaTd;
  deleteCATTPvaTD: CattPvaTd;
  deleteCBCS: Cbcs;
  deleteCapBac: CapBac;
  deleteCapCA: CapCa;
  deleteChucVu: ChucVu;
  deleteChuyenAn: ChuyenAn;
  deleteDDNB: Ddnb;
  deleteDanToc: DanToc;
  deleteDanhGiaTSTH: DanhGiaTsth;
  deleteDauMoiPH_DN: DauMoiPh_Dn;
  deleteDeNghiTSNT: DeNghiTsnt;
  deleteDiaChiNV: DiaChiNv;
  deleteDoi: Doi;
  deleteDoiTuong: DoiTuong;
  deleteDoiTuongCA: DoiTuongCa;
  deleteHinhThucHD: HinhThucHd;
  deleteKeHoachTSNT: KeHoachTsnt;
  deleteKetQuaTSNT: KetQuaTsnt;
  deleteKetQuaXMDiaChi: KetQuaXmDiaChi;
  deleteKetQuaXMQuanHe: KetQuaXmQuanHe;
  deleteKyDuyet_DN: KyDuyet_Dn;
  deleteLLDB: Lldb;
  deleteLoaiDT: LoaiDt;
  deleteLoaiLLDB: LoaiLldb;
  deleteLucLuongThamGiaKH: LucLuongThamGiaKh;
  deletePhuongTienNV: PhuongTienNv;
  deleteQuocTich: QuocTich;
  deleteQuyetDinhTSNT: QuyetDinhTsnt;
  deleteTinhChatDT: TinhChatDt;
  deleteTinhTP: TinhTp;
  deleteTonGiao: TonGiao;
  deleteTramCT: TramCt;
  editBaoCaoKQGH: BaoCaoKqgh;
  editBaoCaoKQXMDiaChi: BaoCaoKqxmDiaChi;
  editBaoCaoKQXMQuanHe: BaoCaoKqxmQuanHe;
  editBaoCaoKTDN: BaoCaoKtdn;
  editBaoCaoPHQH: BaoCaoPhqh;
  editBienBanRKN: BienBanRkn;
  editBienPhapDT: BienPhapDt;
  editCAQHvaTD: CaqHvaTd;
  editCATTPvaTD: CattPvaTd;
  editCBCS: Cbcs;
  editCapBac: CapBac;
  editCapCA: CapCa;
  editChucVu: ChucVu;
  editChuyenAn: ChuyenAn;
  editDDNB: Ddnb;
  editDanToc: DanToc;
  editDanhGiaTSTH: DanhGiaTsth;
  editDauMoiPH_DN: DauMoiPh_Dn;
  editDeNghiTSNT: DeNghiTsnt;
  editDiaChiNV: DiaChiNv;
  editDoi: Doi;
  editDoiTuong: DoiTuong;
  editDoiTuongCA: DoiTuongCa;
  editHinhThucHD: HinhThucHd;
  editKeHoachTSNT: KeHoachTsnt;
  editKetQuaTSNT: KetQuaTsnt;
  editKetQuaXMDiaChi: KetQuaXmDiaChi;
  editKetQuaXMQuanHe: KetQuaXmQuanHe;
  editKyDuyet_DN: KyDuyet_Dn;
  editLLDB: Lldb;
  editLoaiDT: LoaiDt;
  editLoaiLLDB: LoaiLldb;
  editLucLuongThamGiaKH: LucLuongThamGiaKh;
  editPhuongTienNV: PhuongTienNv;
  editQuocTich: QuocTich;
  editQuyetDinhTSNT: QuyetDinhTsnt;
  editTinhChatDT: TinhChatDt;
  editTinhTP: TinhTp;
  editTonGiao: TonGiao;
  editTramCT: TramCt;
  getData_searchFast: Array<TkNhanh>;
};


export type MutationCreateAccountArgs = {
  accountInput: AccountInput;
};


export type MutationCreateBaoCaoKqghArgs = {
  baocaoKQGHInput: BaoCaoKqghInput;
};


export type MutationCreateBaoCaoKqxmDiaChiArgs = {
  baocaoKQXMDiaChiInput: BaoCaoKqxmDiaChiInput;
};


export type MutationCreateBaoCaoKqxmQuanHeArgs = {
  baocaoKQXMQuanHeInput: BaoCaoKqxmQuanHeInput;
};


export type MutationCreateBaoCaoKtdnArgs = {
  baocaoKTDNInput: BaoCaoKtdnInput;
};


export type MutationCreateBaoCaoPhqhArgs = {
  baocaoPHQHInput: BaoCaoPhqhInput;
};


export type MutationCreateBienBanRknArgs = {
  bienbanRKNInput: BienBanRknInput;
};


export type MutationCreateBienPhapDtArgs = {
  bienPhapDT: Scalars['String']['input'];
};


export type MutationCreateCaqHvaTdArgs = {
  caQHvaTDInput: CaqHvaTdInput;
};


export type MutationCreateCattPvaTdArgs = {
  caTTPvaTDInput: CattPvaTdInput;
};


export type MutationCreateCbcsArgs = {
  cbcsInput: CbcsInput;
};


export type MutationCreateCapBacArgs = {
  capBac: Scalars['String']['input'];
};


export type MutationCreateCapCaArgs = {
  capCA: Scalars['String']['input'];
};


export type MutationCreateChucVuArgs = {
  chucVu: Scalars['String']['input'];
};


export type MutationCreateChuyenAnArgs = {
  chuyenanInput: ChuyenAnInput;
};


export type MutationCreateDdnbArgs = {
  ddnb: Scalars['String']['input'];
};


export type MutationCreateDanTocArgs = {
  danTocInput: DanTocInput;
};


export type MutationCreateDanhGiaTsthArgs = {
  danhgiaTSTHInput: DanhGiaTsthInput;
};


export type MutationCreateDauMoiPh_DnArgs = {
  dauMoiPH_DNInput: DauMoiPh_DnInput;
};


export type MutationCreateDeNghiTsntArgs = {
  denghiTSNTInput: DeNghiTsntInput;
};


export type MutationCreateDiaChiNvArgs = {
  diachiNVInput: DiaChiNvInput;
};


export type MutationCreateDoiArgs = {
  doiInput: DoiInput;
};


export type MutationCreateDoiTuongArgs = {
  doituongInput: DoiTuongInput;
};


export type MutationCreateDoiTuongCaArgs = {
  doituongCAInput: DoiTuongCaInput;
};


export type MutationCreateHinhThucHdArgs = {
  hinhthuc: Scalars['String']['input'];
};


export type MutationCreateKeHoachTsntArgs = {
  kehoachTSNTInput: KeHoachTsntInput;
};


export type MutationCreateKetQuaTsntArgs = {
  ketquaTSNTInput: KetQuaTsntInput;
};


export type MutationCreateKetQuaXmDiaChiArgs = {
  ketQuaXMDiaChiInput: KetQuaXmDiaChiInput;
};


export type MutationCreateKetQuaXmQuanHeArgs = {
  ketQuaXMQuanHeInput: KetQuaXmQuanHeInput;
};


export type MutationCreateKyDuyet_DnArgs = {
  kyDuyet_DNInput: KyDuyet_DnInput;
};


export type MutationCreateLldbArgs = {
  lldbInput: LldbInput;
};


export type MutationCreateLoaiDtArgs = {
  loaiDT: Scalars['String']['input'];
};


export type MutationCreateLoaiLldbArgs = {
  loaiLLDBInput: LoaiLldbInput;
};


export type MutationCreateLucLuongThamGiaKhArgs = {
  lucluongThamGiaKHInput: LucLuongThamGiaKhInput;
};


export type MutationCreatePhuongTienNvArgs = {
  phuongtienNVInput: PhuongTienNvInput;
};


export type MutationCreateQuocTichArgs = {
  tenQT: Scalars['String']['input'];
};


export type MutationCreateQuyetDinhTsntArgs = {
  quyetdinhTSNTInput: QuyetDinhTsntInput;
};


export type MutationCreateTinhChatDtArgs = {
  tinhchat: Scalars['String']['input'];
};


export type MutationCreateTinhTpArgs = {
  tinhTPInput: TinhTpInput;
};


export type MutationCreateTonGiaoArgs = {
  tenTG: Scalars['String']['input'];
};


export type MutationCreateTramCtArgs = {
  tramCTInput: TramCtInput;
};


export type MutationDeleteBaoCaoKqghArgs = {
  baocaoKQGHInput: BaoCaoKqghInput;
  id: Scalars['Float']['input'];
};


export type MutationDeleteBaoCaoKqxmDiaChiArgs = {
  baocaoKQXMDiaChiInput: BaoCaoKqxmDiaChiInput;
  id: Scalars['Float']['input'];
};


export type MutationDeleteBaoCaoKqxmQuanHeArgs = {
  baocaoKQXMQuanHeInput: BaoCaoKqxmQuanHeInput;
  id: Scalars['Float']['input'];
};


export type MutationDeleteBaoCaoKtdnArgs = {
  baocaoKTDNInput: BaoCaoKtdnInput;
  id: Scalars['Float']['input'];
};


export type MutationDeleteBaoCaoPhqhArgs = {
  baocaoPHQHInput: BaoCaoPhqhInput;
  id: Scalars['Float']['input'];
};


export type MutationDeleteBienBanRknArgs = {
  bienbanRKNInput: BienBanRknInput;
  id: Scalars['Float']['input'];
};


export type MutationDeleteBienPhapDtArgs = {
  id: Scalars['Float']['input'];
};


export type MutationDeleteCaqHvaTdArgs = {
  id: Scalars['Float']['input'];
};


export type MutationDeleteCattPvaTdArgs = {
  id: Scalars['Float']['input'];
};


export type MutationDeleteCbcsArgs = {
  cbcsInput: CbcsInput;
  id: Scalars['Float']['input'];
};


export type MutationDeleteCapBacArgs = {
  id: Scalars['Float']['input'];
};


export type MutationDeleteCapCaArgs = {
  id: Scalars['Float']['input'];
};


export type MutationDeleteChucVuArgs = {
  id: Scalars['Float']['input'];
};


export type MutationDeleteChuyenAnArgs = {
  chuyenanInput: ChuyenAnInput;
  id: Scalars['Float']['input'];
};


export type MutationDeleteDdnbArgs = {
  id: Scalars['Float']['input'];
};


export type MutationDeleteDanTocArgs = {
  id: Scalars['Float']['input'];
};


export type MutationDeleteDanhGiaTsthArgs = {
  id: Scalars['Float']['input'];
};


export type MutationDeleteDauMoiPh_DnArgs = {
  id: Scalars['Float']['input'];
};


export type MutationDeleteDeNghiTsntArgs = {
  denghiTSNTInput: DeNghiTsntInput;
  id: Scalars['Float']['input'];
};


export type MutationDeleteDiaChiNvArgs = {
  diachiNVInput: DiaChiNvInput;
  id: Scalars['Float']['input'];
};


export type MutationDeleteDoiArgs = {
  id: Scalars['Float']['input'];
};


export type MutationDeleteDoiTuongArgs = {
  doituongInput: DoiTuongInput;
  id: Scalars['Float']['input'];
};


export type MutationDeleteDoiTuongCaArgs = {
  id: Scalars['Float']['input'];
};


export type MutationDeleteHinhThucHdArgs = {
  id: Scalars['Float']['input'];
};


export type MutationDeleteKeHoachTsntArgs = {
  id: Scalars['Float']['input'];
  kehoachTSNTInput: KeHoachTsntInput;
};


export type MutationDeleteKetQuaTsntArgs = {
  id: Scalars['Float']['input'];
};


export type MutationDeleteKetQuaXmDiaChiArgs = {
  id: Scalars['Float']['input'];
};


export type MutationDeleteKetQuaXmQuanHeArgs = {
  id: Scalars['Float']['input'];
};


export type MutationDeleteKyDuyet_DnArgs = {
  id: Scalars['Float']['input'];
};


export type MutationDeleteLldbArgs = {
  id: Scalars['Float']['input'];
};


export type MutationDeleteLoaiDtArgs = {
  id: Scalars['Float']['input'];
};


export type MutationDeleteLoaiLldbArgs = {
  id: Scalars['Float']['input'];
};


export type MutationDeleteLucLuongThamGiaKhArgs = {
  id: Scalars['Float']['input'];
};


export type MutationDeletePhuongTienNvArgs = {
  id: Scalars['Float']['input'];
  phuongtienNVInput: PhuongTienNvInput;
};


export type MutationDeleteQuocTichArgs = {
  id: Scalars['Float']['input'];
};


export type MutationDeleteQuyetDinhTsntArgs = {
  id: Scalars['Float']['input'];
  quyetdinhTSNTInput: QuyetDinhTsntInput;
};


export type MutationDeleteTinhChatDtArgs = {
  id: Scalars['Float']['input'];
};


export type MutationDeleteTinhTpArgs = {
  id: Scalars['Float']['input'];
};


export type MutationDeleteTonGiaoArgs = {
  id: Scalars['Float']['input'];
};


export type MutationDeleteTramCtArgs = {
  id: Scalars['Float']['input'];
  tramCTInput: TramCtInput;
};


export type MutationEditBaoCaoKqghArgs = {
  baocaoKQGHInput: BaoCaoKqghInput;
  id: Scalars['Float']['input'];
};


export type MutationEditBaoCaoKqxmDiaChiArgs = {
  baocaoKQXMDiaChiInput: BaoCaoKqxmDiaChiInput;
  id: Scalars['Float']['input'];
};


export type MutationEditBaoCaoKqxmQuanHeArgs = {
  baocaoKQXMQuanHeInput: BaoCaoKqxmQuanHeInput;
  id: Scalars['Float']['input'];
};


export type MutationEditBaoCaoKtdnArgs = {
  baocaoKTDNInput: BaoCaoKtdnInput;
  id: Scalars['Float']['input'];
};


export type MutationEditBaoCaoPhqhArgs = {
  baocaoPHQHInput: BaoCaoPhqhInput;
  id: Scalars['Float']['input'];
};


export type MutationEditBienBanRknArgs = {
  bienbanRKNInput: BienBanRknInput;
  id: Scalars['Float']['input'];
};


export type MutationEditBienPhapDtArgs = {
  bienPhapDT: Scalars['String']['input'];
  id: Scalars['Float']['input'];
};


export type MutationEditCaqHvaTdArgs = {
  caQHvaTDInput: CaqHvaTdInput;
  id: Scalars['Float']['input'];
};


export type MutationEditCattPvaTdArgs = {
  caTTPvaTDInput: CattPvaTdInput;
  id: Scalars['Float']['input'];
};


export type MutationEditCbcsArgs = {
  cbcsInput: CbcsInput;
  id: Scalars['Float']['input'];
};


export type MutationEditCapBacArgs = {
  capBac: Scalars['String']['input'];
  id: Scalars['Float']['input'];
};


export type MutationEditCapCaArgs = {
  capCA: Scalars['String']['input'];
  id: Scalars['Float']['input'];
};


export type MutationEditChucVuArgs = {
  chucVu: Scalars['String']['input'];
  id: Scalars['Float']['input'];
};


export type MutationEditChuyenAnArgs = {
  chuyenanInput: ChuyenAnInput;
  id: Scalars['Float']['input'];
};


export type MutationEditDdnbArgs = {
  ddnb: Scalars['String']['input'];
  id: Scalars['Float']['input'];
};


export type MutationEditDanTocArgs = {
  danTocInput: DanTocInput;
  id: Scalars['Float']['input'];
};


export type MutationEditDanhGiaTsthArgs = {
  danhgiaTSTHInput: DanhGiaTsthInput;
  id: Scalars['Float']['input'];
};


export type MutationEditDauMoiPh_DnArgs = {
  dauMoiPH_DNInput: DauMoiPh_DnInput;
  id: Scalars['Float']['input'];
};


export type MutationEditDeNghiTsntArgs = {
  denghiTSNTInput: DeNghiTsntInput;
  id: Scalars['Float']['input'];
};


export type MutationEditDiaChiNvArgs = {
  diachiNVInput: DiaChiNvInput;
  id: Scalars['Float']['input'];
};


export type MutationEditDoiArgs = {
  doiInput: DoiInput;
  id: Scalars['Float']['input'];
};


export type MutationEditDoiTuongArgs = {
  doituongInput: DoiTuongInput;
  id: Scalars['Float']['input'];
};


export type MutationEditDoiTuongCaArgs = {
  doituongCAInput: DoiTuongCaInput;
  id: Scalars['Float']['input'];
};


export type MutationEditHinhThucHdArgs = {
  hinhthuc: Scalars['String']['input'];
  id: Scalars['Float']['input'];
};


export type MutationEditKeHoachTsntArgs = {
  id: Scalars['Float']['input'];
  kehoachTSNTInput: KeHoachTsntInput;
};


export type MutationEditKetQuaTsntArgs = {
  id: Scalars['Float']['input'];
  ketquaTSNTInput: KetQuaTsntInput;
};


export type MutationEditKetQuaXmDiaChiArgs = {
  id: Scalars['Float']['input'];
  ketQuaXMDiaChiInput: KetQuaXmDiaChiInput;
};


export type MutationEditKetQuaXmQuanHeArgs = {
  id: Scalars['Float']['input'];
  ketQuaXMQuanHeInput: KetQuaXmQuanHeInput;
};


export type MutationEditKyDuyet_DnArgs = {
  id: Scalars['Float']['input'];
  kyDuyet_DNInput: KyDuyet_DnInput;
};


export type MutationEditLldbArgs = {
  id: Scalars['Float']['input'];
  lldbInput: LldbInput;
};


export type MutationEditLoaiDtArgs = {
  id: Scalars['Float']['input'];
  loaiDT: Scalars['String']['input'];
};


export type MutationEditLoaiLldbArgs = {
  id: Scalars['Float']['input'];
  loaiLLDBInput: LoaiLldbInput;
};


export type MutationEditLucLuongThamGiaKhArgs = {
  id: Scalars['Float']['input'];
  lucluongThamGiaKHInput: LucLuongThamGiaKhInput;
};


export type MutationEditPhuongTienNvArgs = {
  id: Scalars['Float']['input'];
  phuongtienNVInput: PhuongTienNvInput;
};


export type MutationEditQuocTichArgs = {
  id: Scalars['Float']['input'];
  tenQT: Scalars['String']['input'];
};


export type MutationEditQuyetDinhTsntArgs = {
  id: Scalars['Float']['input'];
  quyetdinhTSNTInput: QuyetDinhTsntInput;
};


export type MutationEditTinhChatDtArgs = {
  id: Scalars['Float']['input'];
  tinhchat: Scalars['String']['input'];
};


export type MutationEditTinhTpArgs = {
  id: Scalars['Float']['input'];
  tinhTPInput: TinhTpInput;
};


export type MutationEditTonGiaoArgs = {
  id: Scalars['Float']['input'];
  tenTG: Scalars['String']['input'];
};


export type MutationEditTramCtArgs = {
  id: Scalars['Float']['input'];
  tramCTInput: TramCtInput;
};


export type MutationGetData_SearchFastArgs = {
  keySearch: Scalars['String']['input'];
};

export type PhuongTienNv = {
  __typename?: 'PhuongTienNV';
  BKS?: Maybe<Scalars['String']['output']>;
  DiaDiemPH?: Maybe<Scalars['String']['output']>;
  HinhAnh?: Maybe<Scalars['String']['output']>;
  KetQuaTSNT: KetQuaTsnt;
  MaPT: Scalars['Float']['output'];
  TSThucHiens: Array<Cbcs>;
  ThoiGianPH?: Maybe<Scalars['DateTime']['output']>;
};

export type PhuongTienNvInput = {
  BKS?: InputMaybe<Scalars['String']['input']>;
  DiaDiemPH?: InputMaybe<Scalars['String']['input']>;
  HinhAnh?: InputMaybe<Scalars['String']['input']>;
  MaKQ?: InputMaybe<Scalars['Float']['input']>;
  ThoiGianPH?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  account: Account;
  accounts: Array<Account>;
  baoCaoKTDN: BaoCaoKtdn;
  baoCaoKTDNs: Array<BaoCaoKtdn>;
  baocaoKQGH: BaoCaoKqgh;
  baocaoKQGHs: Array<BaoCaoKqgh>;
  baocaoKQXMDiaChi: BaoCaoKqxmDiaChi;
  baocaoKQXMDiaChis: Array<BaoCaoKqxmDiaChi>;
  baocaoKQXMQuanHe: BaoCaoKqxmQuanHe;
  baocaoKQXMQuanHes: Array<BaoCaoKqxmQuanHe>;
  baocaoPHQH: BaoCaoPhqh;
  baocaoPHQHs: Array<BaoCaoPhqh>;
  bienBanRKN: BienBanRkn;
  bienBanRKNs: Array<BienBanRkn>;
  bienPhapDT: BienPhapDt;
  bienPhapDTs: Array<BienPhapDt>;
  caQHvaTD: CaqHvaTd;
  caQHvaTDs: Array<CaqHvaTd>;
  caTTPvaTD: CattPvaTd;
  caTTPvaTDs: Array<CattPvaTd>;
  capCA: CapCa;
  capCAs: Array<CapCa>;
  capbac: CapBac;
  capbacs: Array<CapBac>;
  cbcs: Cbcs;
  cbcss: Array<Cbcs>;
  chucvu: ChucVu;
  chucvus: Array<ChucVu>;
  chuyenan: ChuyenAn;
  chuyenans: Array<ChuyenAn>;
  danhgiaTSTH: DanhGiaTsth;
  danhgiaTSTHs: Array<DanhGiaTsth>;
  dantoc: DanToc;
  dantocs: Array<DanToc>;
  dauMoiPH_DN: DauMoiPh_Dn;
  dauMoiPH_DNs: Array<DauMoiPh_Dn>;
  ddnb: Ddnb;
  ddnbs: Array<Ddnb>;
  denghiTSNT: DeNghiTsnt;
  denghiTSNTs: Array<DeNghiTsnt>;
  diachiNV: DiaChiNv;
  diachiNVs: Array<DiaChiNv>;
  doi: Doi;
  dois: Array<Doi>;
  doituong: DoiTuong;
  doituongCA: DoiTuongCa;
  doituongCAs: Array<DoiTuongCa>;
  doituongs: Array<DoiTuong>;
  hinhthucHD: HinhThucHd;
  hinhthucHDs: Array<HinhThucHd>;
  kehoachTSNT: KeHoachTsnt;
  kehoachTSNTs: Array<KeHoachTsnt>;
  ketQuaXMDiaChi: KetQuaXmDiaChi;
  ketQuaXMDiaChis: Array<KetQuaXmDiaChi>;
  ketQuaXMQuanHe: KetQuaXmQuanHe;
  ketQuaXMQuanHes: Array<KetQuaXmQuanHe>;
  ketquaTSNT: KetQuaTsnt;
  ketquaTSNTs: Array<KetQuaTsnt>;
  kyDuyet_DN: KyDuyet_Dn;
  kyDuyet_DNs: Array<KyDuyet_Dn>;
  lldb: Lldb;
  lldbs: Array<Lldb>;
  loaiDT: LoaiDt;
  loaiDTs: Array<LoaiDt>;
  loaiLLDB: LoaiLldb;
  loaiLLDBs: Array<LoaiLldb>;
  lucluongThamGiaKH: LucLuongThamGiaKh;
  lucluongThamGiaKHs: Array<LucLuongThamGiaKh>;
  phuongtienNV: PhuongTienNv;
  phuongtienNVs: Array<PhuongTienNv>;
  quocTich: QuocTich;
  quocTichs: Array<QuocTich>;
  quyetdinhTSNT: QuyetDinhTsnt;
  quyetdinhTSNTs: Array<QuyetDinhTsnt>;
  tinhChatDT: TinhChatDt;
  tinhChatDTs: Array<TinhChatDt>;
  tinhTP: TinhTp;
  tinhTPs: Array<TinhTp>;
  tonGiao: TonGiao;
  tonGiaos: Array<TonGiao>;
  tramCT: TramCt;
  tramCTs: Array<TramCt>;
};


export type QueryAccountArgs = {
  accountID: Scalars['Float']['input'];
};


export type QueryAccountsArgs = {
  utilsParams: UtilsParamsInput;
};


export type QueryBaoCaoKtdnArgs = {
  id: Scalars['Float']['input'];
};


export type QueryBaoCaoKtdNsArgs = {
  utilsParams: UtilsParamsInput;
};


export type QueryBaocaoKqghArgs = {
  id: Scalars['Float']['input'];
};


export type QueryBaocaoKqgHsArgs = {
  utilsParams: UtilsParamsInput;
};


export type QueryBaocaoKqxmDiaChiArgs = {
  id: Scalars['Float']['input'];
};


export type QueryBaocaoKqxmDiaChisArgs = {
  utilsParams: UtilsParamsInput;
};


export type QueryBaocaoKqxmQuanHeArgs = {
  id: Scalars['Float']['input'];
};


export type QueryBaocaoKqxmQuanHesArgs = {
  utilsParams: UtilsParamsInput;
};


export type QueryBaocaoPhqhArgs = {
  id: Scalars['Float']['input'];
};


export type QueryBaocaoPhqHsArgs = {
  utilsParams: UtilsParamsInput;
};


export type QueryBienBanRknArgs = {
  id: Scalars['Float']['input'];
};


export type QueryBienBanRkNsArgs = {
  utilsParams: UtilsParamsInput;
};


export type QueryBienPhapDtArgs = {
  id: Scalars['Float']['input'];
};


export type QueryBienPhapDTsArgs = {
  utilsParams: UtilsParamsInput;
};


export type QueryCaQHvaTdArgs = {
  id: Scalars['Float']['input'];
};


export type QueryCaQHvaTDsArgs = {
  utilsParams: UtilsParamsInput;
};


export type QueryCaTtPvaTdArgs = {
  id: Scalars['Float']['input'];
};


export type QueryCaTtPvaTDsArgs = {
  utilsParams: UtilsParamsInput;
};


export type QueryCapCaArgs = {
  id: Scalars['Float']['input'];
};


export type QueryCapCAsArgs = {
  utilsParams: UtilsParamsInput;
};


export type QueryCapbacArgs = {
  id: Scalars['Float']['input'];
};


export type QueryCapbacsArgs = {
  utilsParams: UtilsParamsInput;
};


export type QueryCbcsArgs = {
  id: Scalars['Float']['input'];
};


export type QueryCbcssArgs = {
  utilsParams: UtilsParamsInput;
};


export type QueryChucvuArgs = {
  id: Scalars['Float']['input'];
};


export type QueryChucvusArgs = {
  utilsParams: UtilsParamsInput;
};


export type QueryChuyenanArgs = {
  id: Scalars['Float']['input'];
};


export type QueryChuyenansArgs = {
  utilsParams: UtilsParamsInput;
};


export type QueryDanhgiaTsthArgs = {
  id: Scalars['Float']['input'];
};


export type QueryDanhgiaTstHsArgs = {
  utilsParams: UtilsParamsInput;
};


export type QueryDantocArgs = {
  id: Scalars['Float']['input'];
};


export type QueryDantocsArgs = {
  utilsParams: UtilsParamsInput;
};


export type QueryDauMoiPh_DnArgs = {
  id: Scalars['Float']['input'];
};


export type QueryDauMoiPh_DNsArgs = {
  utilsParams: UtilsParamsInput;
};


export type QueryDdnbArgs = {
  id: Scalars['Float']['input'];
};


export type QueryDdnbsArgs = {
  utilsParams: UtilsParamsInput;
};


export type QueryDenghiTsntArgs = {
  id: Scalars['Float']['input'];
};


export type QueryDenghiTsnTsArgs = {
  utilsParams: UtilsParamsInput;
};


export type QueryDiachiNvArgs = {
  id: Scalars['Float']['input'];
};


export type QueryDiachiNVsArgs = {
  utilsParams: UtilsParamsInput;
};


export type QueryDoiArgs = {
  id: Scalars['Float']['input'];
};


export type QueryDoisArgs = {
  utilsParams: UtilsParamsInput;
};


export type QueryDoituongArgs = {
  id: Scalars['Float']['input'];
};


export type QueryDoituongCaArgs = {
  id: Scalars['Float']['input'];
};


export type QueryDoituongCAsArgs = {
  utilsParams: UtilsParamsInput;
};


export type QueryDoituongsArgs = {
  utilsParams: UtilsParamsInput;
};


export type QueryHinhthucHdArgs = {
  id: Scalars['Float']['input'];
};


export type QueryHinhthucHDsArgs = {
  utilsParams: UtilsParamsInput;
};


export type QueryKehoachTsntArgs = {
  id: Scalars['Float']['input'];
};


export type QueryKehoachTsnTsArgs = {
  utilsParams: UtilsParamsInput;
};


export type QueryKetQuaXmDiaChiArgs = {
  id: Scalars['Float']['input'];
};


export type QueryKetQuaXmDiaChisArgs = {
  utilsParams: UtilsParamsInput;
};


export type QueryKetQuaXmQuanHeArgs = {
  id: Scalars['Float']['input'];
};


export type QueryKetQuaXmQuanHesArgs = {
  utilsParams: UtilsParamsInput;
};


export type QueryKetquaTsntArgs = {
  id: Scalars['Float']['input'];
};


export type QueryKetquaTsnTsArgs = {
  utilsParams: UtilsParamsInput;
};


export type QueryKyDuyet_DnArgs = {
  id: Scalars['Float']['input'];
};


export type QueryKyDuyet_DNsArgs = {
  utilsParams: UtilsParamsInput;
};


export type QueryLldbArgs = {
  id: Scalars['Float']['input'];
};


export type QueryLldbsArgs = {
  utilsParams: UtilsParamsInput;
};


export type QueryLoaiDtArgs = {
  id: Scalars['Float']['input'];
};


export type QueryLoaiDTsArgs = {
  utilsParams: UtilsParamsInput;
};


export type QueryLoaiLldbArgs = {
  id: Scalars['Float']['input'];
};


export type QueryLoaiLldBsArgs = {
  utilsParams: UtilsParamsInput;
};


export type QueryLucluongThamGiaKhArgs = {
  id: Scalars['Float']['input'];
};


export type QueryLucluongThamGiaKHsArgs = {
  utilsParams: UtilsParamsInput;
};


export type QueryPhuongtienNvArgs = {
  id: Scalars['Float']['input'];
};


export type QueryPhuongtienNVsArgs = {
  utilsParams: UtilsParamsInput;
};


export type QueryQuocTichArgs = {
  id: Scalars['Float']['input'];
};


export type QueryQuocTichsArgs = {
  utilsParams: UtilsParamsInput;
};


export type QueryQuyetdinhTsntArgs = {
  id: Scalars['Float']['input'];
};


export type QueryQuyetdinhTsnTsArgs = {
  utilsParams: UtilsParamsInput;
};


export type QueryTinhChatDtArgs = {
  id: Scalars['Float']['input'];
};


export type QueryTinhChatDTsArgs = {
  utilsParams: UtilsParamsInput;
};


export type QueryTinhTpArgs = {
  id: Scalars['Float']['input'];
};


export type QueryTinhTPsArgs = {
  utilsParams: UtilsParamsInput;
};


export type QueryTonGiaoArgs = {
  id: Scalars['Float']['input'];
};


export type QueryTonGiaosArgs = {
  utilsParams: UtilsParamsInput;
};


export type QueryTramCtArgs = {
  id: Scalars['Float']['input'];
};


export type QueryTramCTsArgs = {
  utilsParams: UtilsParamsInput;
};

export type QuocTich = {
  __typename?: 'QuocTich';
  CBCSs: Array<Cbcs>;
  DanTocs: Array<DanToc>;
  DoiTuongs: Array<DoiTuong>;
  MaQT: Scalars['Float']['output'];
  TenQT?: Maybe<Scalars['String']['output']>;
};

export type QuyetDinhTsnt = {
  __typename?: 'QuyetDinhTSNT';
  BiDanh?: Maybe<Scalars['String']['output']>;
  CAQHvaTD: CaqHvaTd;
  CATTPvaTD: CattPvaTd;
  DeNghiTSNT: DeNghiTsnt;
  Doi: Doi;
  DoiTuong: DoiTuong;
  KeHoachTSNT: KeHoachTsnt;
  KetQuaTSNT: KetQuaTsnt;
  LanhDaoPD: Cbcs;
  MaQD: Scalars['Float']['output'];
  Ngay?: Maybe<Scalars['DateTime']['output']>;
  NhiemVuCT?: Maybe<Scalars['String']['output']>;
  PhamViTSs: Array<TinhTp>;
  So?: Maybe<Scalars['String']['output']>;
  ThoiGianBD?: Maybe<Scalars['DateTime']['output']>;
  ThoiGianKT?: Maybe<Scalars['DateTime']['output']>;
};

export type QuyetDinhTsntInput = {
  BiDanh?: InputMaybe<Scalars['String']['input']>;
  MaCAQHvaTD?: InputMaybe<Scalars['Float']['input']>;
  MaCATTPvaTD?: InputMaybe<Scalars['Float']['input']>;
  MaDN?: InputMaybe<Scalars['Float']['input']>;
  MaDoi?: InputMaybe<Scalars['Float']['input']>;
  MaDoiTuong?: InputMaybe<Scalars['Float']['input']>;
  MaLanhDaoPD?: InputMaybe<Scalars['Float']['input']>;
  Ngay?: InputMaybe<Scalars['String']['input']>;
  NhiemVuCT?: InputMaybe<Scalars['String']['input']>;
  So?: InputMaybe<Scalars['String']['input']>;
  ThoiGianBD?: InputMaybe<Scalars['String']['input']>;
  ThoiGianKT?: InputMaybe<Scalars['String']['input']>;
};

export type TkNhanh = {
  __typename?: 'TKNhanh';
  LienKet?: Maybe<Scalars['String']['output']>;
  MaTKN: Scalars['Float']['output'];
  TieuDe?: Maybe<Scalars['String']['output']>;
};

export type TinhChatDt = {
  __typename?: 'TinhChatDT';
  ChuyenAns: Array<ChuyenAn>;
  DoiTuongs: Array<DoiTuong>;
  MaTCDT: Scalars['Float']['output'];
  TinhChat?: Maybe<Scalars['String']['output']>;
};

export type TinhTp = {
  __typename?: 'TinhTP';
  Cap?: Maybe<Scalars['String']['output']>;
  DeNghiTSNTs: Array<DeNghiTsnt>;
  KetQuaTSNTs: Array<KetQuaTsnt>;
  MaTinhTP: Scalars['Float']['output'];
  QuyetDinhTSNTs: Array<QuyetDinhTsnt>;
  TinhTP?: Maybe<Scalars['String']['output']>;
};

export type TinhTpInput = {
  Cap?: InputMaybe<Scalars['String']['input']>;
  TinhTP?: InputMaybe<Scalars['String']['input']>;
};

export type TonGiao = {
  __typename?: 'TonGiao';
  CBCSs: Array<Cbcs>;
  DoiTuongs: Array<DoiTuong>;
  MaTG: Scalars['Float']['output'];
  TenTG?: Maybe<Scalars['String']['output']>;
};

export type TramCt = {
  __typename?: 'TramCT';
  CAQHvaTD: CaqHvaTd;
  DiaDiem?: Maybe<Scalars['String']['output']>;
  Doi: Doi;
  KeHoachTSNTs: Array<KeHoachTsnt>;
  LanhDaoPD: Cbcs;
  LyLichTram?: Maybe<Scalars['String']['output']>;
  MaTramCT: Scalars['Float']['output'];
  Ngay?: Maybe<Scalars['String']['output']>;
  QuyDinh?: Maybe<Scalars['String']['output']>;
  SoDoTram?: Maybe<Scalars['String']['output']>;
  TSXayDung: Cbcs;
  TinhHinhDB?: Maybe<Scalars['String']['output']>;
  VanDeChuY?: Maybe<Scalars['String']['output']>;
};

export type TramCtInput = {
  DiaDiem?: InputMaybe<Scalars['String']['input']>;
  LyLichTram?: InputMaybe<Scalars['String']['input']>;
  MaCAQHvaTD?: InputMaybe<Scalars['Float']['input']>;
  MaDoi?: InputMaybe<Scalars['Float']['input']>;
  MaLanhDaoPD?: InputMaybe<Scalars['Float']['input']>;
  MaTSXayDung?: InputMaybe<Scalars['Float']['input']>;
  Ngay?: InputMaybe<Scalars['String']['input']>;
  QuyDinh?: InputMaybe<Scalars['String']['input']>;
  SoDoTram?: InputMaybe<Scalars['String']['input']>;
  TinhHinhDB?: InputMaybe<Scalars['String']['input']>;
  VanDeChuY?: InputMaybe<Scalars['String']['input']>;
};

export type UtilsParamsInput = {
  condition?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
};
