import { SP_CHANGE_BAOCAOKQGH_Input } from '../type/SP_CHANGE_BAOCAOKQGH.input';
import { SP_CHANGE_BAOCAOKQXMDIACHI_Input } from '../type/SP_CHANGE_BAOCAOKQXMDIACHI.input';
import { SP_CHANGE_BAOCAOKQXMQUANHE_Input } from '../type/SP_CHANGE_BAOCAOKQXMQUANHE.input';
import { SP_CHANGE_BAOCAOKTDN_Input } from '../type/SP_CHANGE_BAOCAOKTDN.input';
import { SP_CHANGE_BAOCAOPHQH_Input } from '../type/SP_CHANGE_BAOCAOPHQH.input';
import { SP_CHANGE_BIENBANRKN_Input } from '../type/SP_CHANGE_BIENBANRKN.input';
import { SP_CHANGE_CBCS_Input } from '../type/SP_CHANGE_CBCS.input';
import { SP_CHANGE_CHUYENAN_Input } from '../type/SP_CHANGE_CHUYENAN.Input';
import { SP_CHANGE_DENGHITSNT_Input } from '../type/SP_CHANGE_DENGHITSNT.Input';
import { SP_CHANGE_DIACHINV_Input } from '../type/SP_CHANGE_DIACHINV.Input';
import { SP_CHANGE_DOITUONG_Input } from '../type/SP_CHANGE_DOITUONG.input';
import { SP_CHANGE_KEHOACHTSNT_Input } from '../type/SP_CHANGE_KEHOACHTSNT.input';
import { SP_CHANGE_PHUONGTIENNV_Input } from '../type/SP_CHANGE_PHUONGTIENNV.input';
import { SP_CHANGE_QUYETDINHTSNT_Input } from '../type/SP_CHANGE_QUYETDINHTSNT.input';
import { SP_CHANGE_TRAMCT_Input } from '../type/SP_CHANGE_TRAMCT.input';

export const SP_GET_DATA = (
  NameTable?: string,
  Condition?: string,
  IDColumn?: string,
  Skip?: number,
  Take?: number,
) =>
  `SP_GET_DATA @NameTable = ${NameTable}, 
  @Condition = ${Condition}, 
  @IDColumn = ${IDColumn}, 
  @Skip = ${Skip}, 
  @Take = ${Take}`;

export const SP_CHANGE_DATA = (
  Type?: string,
  NameTable?: string,
  NameColumns?: string,
  ValueCreates?: string,
  ConditionCreate?: string,
  ValueUpdates?: string,
  Condition?: string,
) =>
  `SP_CHANGE_DATA
  @Type = ${Type},
  @NameTable = ${NameTable},
  @NameColumns = ${NameColumns},
  @ValueCreates = ${ValueCreates},
  @ConditionCreate = ${ConditionCreate},
  @ValueUpdates = ${ValueUpdates},
  @Condition = ${Condition}`;

export const SP_GET_DATA_DECRYPT = (
  NameTable: string,
  Condition: string,
  Skip: number,
  Take: number,
) =>
  `SP_GET_DATA_DECRYPT @NameTable = ${NameTable}, 
  @Condition = ${Condition}, 
  @Skip = ${Skip}, 
  @Take = ${Take}`;

export const SP_CHANGE_BAOCAOKQGH = (
  spCHANGEBAOCAOKQGHInput: SP_CHANGE_BAOCAOKQGH_Input,
) =>
  'SP_CHANGE_BAOCAOKQGH ' +
  '@Type= "' +
  spCHANGEBAOCAOKQGHInput.Type +
  '",' +
  '@MaBCKQGH=' +
  spCHANGEBAOCAOKQGHInput.MaBCKQGH +
  ',' +
  '@Ngay=' +
  spCHANGEBAOCAOKQGHInput.BaoCaoKQGHInput.Ngay +
  ',' +
  '@MucDich=' +
  spCHANGEBAOCAOKQGHInput.BaoCaoKQGHInput.MucDich +
  ',' +
  '@ThoiGian=' +
  spCHANGEBAOCAOKQGHInput.BaoCaoKQGHInput.ThoiGian +
  ',' +
  '@DiaDiem=' +
  spCHANGEBAOCAOKQGHInput.BaoCaoKQGHInput.DiaDiem +
  ',' +
  '@PhuongTienSD=' +
  spCHANGEBAOCAOKQGHInput.BaoCaoKQGHInput.PhuongTienSD +
  ',' +
  '@MaLanhDaoPD=' +
  spCHANGEBAOCAOKQGHInput.BaoCaoKQGHInput.MaLanhDaoPD +
  ',' +
  '@MaCAQHvaTD=' +
  spCHANGEBAOCAOKQGHInput.BaoCaoKQGHInput.MaCAQHvaTD +
  ',' +
  '@MaDoi=' +
  spCHANGEBAOCAOKQGHInput.BaoCaoKQGHInput.MaDoi +
  ',' +
  '@MaKQ=' +
  spCHANGEBAOCAOKQGHInput.BaoCaoKQGHInput.MaKQ +
  ',' +
  '@MaDoiTuong=' +
  spCHANGEBAOCAOKQGHInput.BaoCaoKQGHInput.MaDoiTuong +
  ',' +
  '@HinhAnh=' +
  spCHANGEBAOCAOKQGHInput.BaoCaoKQGHInput.HinhAnh +
  ',' +
  '@VaiNguyTrang=' +
  spCHANGEBAOCAOKQGHInput.BaoCaoKQGHInput.VaiNguyTrang +
  ',' +
  '@NoiDung=' +
  spCHANGEBAOCAOKQGHInput.BaoCaoKQGHInput.NoiDung;

export const SP_CHANGE_BAOCAOKQXMDIACHI = (
  spCHANGEBAOCAOKQXMDIACHIInput: SP_CHANGE_BAOCAOKQXMDIACHI_Input,
) =>
  'SP_CHANGE_BAOCAOKQXMDIACHI ' +
  '@Type= "' +
  spCHANGEBAOCAOKQXMDIACHIInput.Type +
  '",' +
  '@MaBCKQXMDC=' +
  spCHANGEBAOCAOKQXMDIACHIInput.MaBCKQXMDC +
  ',' +
  '@Ngay=' +
  spCHANGEBAOCAOKQXMDIACHIInput.BaoCaoKQXMDiaChiInput.Ngay +
  ',' +
  '@TenKhac=' +
  spCHANGEBAOCAOKQXMDIACHIInput.BaoCaoKQXMDiaChiInput.TenKhac +
  ',' +
  '@GioiTinh=' +
  spCHANGEBAOCAOKQXMDIACHIInput.BaoCaoKQXMDiaChiInput.GioiTinh +
  ',' +
  '@NamSinh=' +
  spCHANGEBAOCAOKQXMDIACHIInput.BaoCaoKQXMDiaChiInput.NamSinh +
  ',' +
  '@QueQuan=' +
  spCHANGEBAOCAOKQXMDIACHIInput.BaoCaoKQXMDiaChiInput.QueQuan +
  ',' +
  '@HKTT=' +
  spCHANGEBAOCAOKQXMDIACHIInput.BaoCaoKQXMDiaChiInput.HKTT +
  ',' +
  '@NgheNghiep=' +
  spCHANGEBAOCAOKQXMDIACHIInput.BaoCaoKQXMDiaChiInput.NgheNghiep +
  ',' +
  '@NoiLamViec=' +
  spCHANGEBAOCAOKQXMDIACHIInput.BaoCaoKQXMDiaChiInput.NoiLamViec +
  ',' +
  '@BienPhapXM=' +
  spCHANGEBAOCAOKQXMDIACHIInput.BaoCaoKQXMDiaChiInput.BienPhapXM +
  ',' +
  '@MaDiaChiNV=' +
  spCHANGEBAOCAOKQXMDIACHIInput.BaoCaoKQXMDiaChiInput.MaDiaChiNV +
  ',' +
  '@MaCAQHvaTD=' +
  spCHANGEBAOCAOKQXMDIACHIInput.BaoCaoKQXMDiaChiInput.MaCAQHvaTD +
  ',' +
  '@MaDoi=' +
  spCHANGEBAOCAOKQXMDIACHIInput.BaoCaoKQXMDiaChiInput.MaDoi +
  ',' +
  '@MaDoiTuong=' +
  spCHANGEBAOCAOKQXMDIACHIInput.BaoCaoKQXMDiaChiInput.MaDoiTuong +
  ',' +
  '@MaQD=' +
  spCHANGEBAOCAOKQXMDIACHIInput.BaoCaoKQXMDiaChiInput.MaQD +
  ',' +
  '@MaTSXacMinh=' +
  spCHANGEBAOCAOKQXMDIACHIInput.BaoCaoKQXMDiaChiInput.MaTSXacMinh +
  ',' +
  '@MaLanhDaoPD=' +
  spCHANGEBAOCAOKQXMDIACHIInput.BaoCaoKQXMDiaChiInput.MaLanhDaoPD +
  ',' +
  '@MaBCHPhuTrach=' +
  spCHANGEBAOCAOKQXMDIACHIInput.BaoCaoKQXMDiaChiInput.MaBCHPhuTrach +
  ',' +
  '@HoTenChuHo=' +
  spCHANGEBAOCAOKQXMDIACHIInput.BaoCaoKQXMDiaChiInput.HoTenChuHo +
  ',' +
  '@NoiO=' +
  spCHANGEBAOCAOKQXMDIACHIInput.BaoCaoKQXMDiaChiInput.NoiO +
  ',' +
  '@QuanHeGiaDinh=' +
  spCHANGEBAOCAOKQXMDIACHIInput.BaoCaoKQXMDiaChiInput.QuanHeGiaDinh +
  ',' +
  '@HoKhacCungDC=' +
  spCHANGEBAOCAOKQXMDIACHIInput.BaoCaoKQXMDiaChiInput.HoKhacCungDC;

export const SP_CHANGE_BAOCAOKQXMQUANHE = (
  spCHANGEBAOCAOKQXMQUANHEInput: SP_CHANGE_BAOCAOKQXMQUANHE_Input,
) =>
  'SP_CHANGE_BAOCAOKQXMQUANHE ' +
  '@Type= "' +
  spCHANGEBAOCAOKQXMQUANHEInput.Type +
  '",' +
  '@MaBCKQXMQH=' +
  spCHANGEBAOCAOKQXMQUANHEInput.MaBCKQXMQH +
  ',' +
  '@Ngay=' +
  spCHANGEBAOCAOKQXMQUANHEInput.BaoCaoKQXMQuanHeInput.Ngay +
  ',' +
  '@TenKhac=' +
  spCHANGEBAOCAOKQXMQUANHEInput.BaoCaoKQXMQuanHeInput.TenKhac +
  ',' +
  '@GioiTinh=' +
  spCHANGEBAOCAOKQXMQUANHEInput.BaoCaoKQXMQuanHeInput.GioiTinh +
  ',' +
  '@NamSinh=' +
  spCHANGEBAOCAOKQXMQUANHEInput.BaoCaoKQXMQuanHeInput.NamSinh +
  ',' +
  '@QueQuan=' +
  spCHANGEBAOCAOKQXMQUANHEInput.BaoCaoKQXMQuanHeInput.QueQuan +
  ',' +
  '@HKTT=' +
  spCHANGEBAOCAOKQXMQUANHEInput.BaoCaoKQXMQuanHeInput.HKTT +
  ',' +
  '@NgheNghiep=' +
  spCHANGEBAOCAOKQXMQUANHEInput.BaoCaoKQXMQuanHeInput.NgheNghiep +
  ',' +
  '@ChucVu=' +
  spCHANGEBAOCAOKQXMQUANHEInput.BaoCaoKQXMQuanHeInput.ChucVu +
  ',' +
  '@NoiLamViec=' +
  spCHANGEBAOCAOKQXMQUANHEInput.BaoCaoKQXMQuanHeInput.NoiLamViec +
  ',' +
  '@QuanHeGDXH=' +
  spCHANGEBAOCAOKQXMQUANHEInput.BaoCaoKQXMQuanHeInput.QuanHeGDXH +
  ',' +
  '@BienPhapXM=' +
  spCHANGEBAOCAOKQXMQUANHEInput.BaoCaoKQXMQuanHeInput.BienPhapXM +
  ',' +
  '@MaCAQHvaTD=' +
  spCHANGEBAOCAOKQXMQUANHEInput.BaoCaoKQXMQuanHeInput.MaCAQHvaTD +
  ',' +
  '@MaDoi=' +
  spCHANGEBAOCAOKQXMQUANHEInput.BaoCaoKQXMQuanHeInput.MaDoi +
  ',' +
  '@MaDoiTuong=' +
  spCHANGEBAOCAOKQXMQUANHEInput.BaoCaoKQXMQuanHeInput.MaDoiTuong +
  ',' +
  '@MaQD=' +
  spCHANGEBAOCAOKQXMQUANHEInput.BaoCaoKQXMQuanHeInput.MaQD +
  ',' +
  '@MaTSXacMinh=' +
  spCHANGEBAOCAOKQXMQUANHEInput.BaoCaoKQXMQuanHeInput.MaTSXacMinh +
  ',' +
  '@MaLanhDaoPD=' +
  spCHANGEBAOCAOKQXMQUANHEInput.BaoCaoKQXMQuanHeInput.MaLanhDaoPD +
  ',' +
  '@MaBCHPhuTrach=' +
  spCHANGEBAOCAOKQXMQUANHEInput.BaoCaoKQXMQuanHeInput.MaBCHPhuTrach +
  ',' +
  '@MaBCPHQH=' +
  spCHANGEBAOCAOKQXMQUANHEInput.BaoCaoKQXMQuanHeInput.MaBCPHQH +
  ',' +
  '@HoTen=' +
  spCHANGEBAOCAOKQXMQUANHEInput.BaoCaoKQXMQuanHeInput.HoTen +
  ',' +
  '@NoiO=' +
  spCHANGEBAOCAOKQXMQUANHEInput.BaoCaoKQXMQuanHeInput.NoiO;

export const SP_CHANGE_BAOCAOKTDN = (
  spCHANGEBAOCAOKTDNInput: SP_CHANGE_BAOCAOKTDN_Input,
) =>
  'SP_CHANGE_BAOCAOKTDN ' +
  '@Type= "' +
  spCHANGEBAOCAOKTDNInput.Type +
  '",' +
  '@MaBCKTDN=' +
  spCHANGEBAOCAOKTDNInput.MaBCKTDN +
  ',' +
  '@Ngay=' +
  spCHANGEBAOCAOKTDNInput.BaoCaoKTDNInput.Ngay +
  ',' +
  '@TinhHinhDT=' +
  spCHANGEBAOCAOKTDNInput.BaoCaoKTDNInput.TinhHinhDT +
  ',' +
  '@VanDeRKN=' +
  spCHANGEBAOCAOKTDNInput.BaoCaoKTDNInput.VanDeRKN +
  ',' +
  '@MaKQ=' +
  spCHANGEBAOCAOKTDNInput.BaoCaoKTDNInput.MaKQ +
  ',' +
  '@MaLanhDaoPD=' +
  spCHANGEBAOCAOKTDNInput.BaoCaoKTDNInput.MaLanhDaoPD +
  ',' +
  '@MaCBTongHop=' +
  spCHANGEBAOCAOKTDNInput.BaoCaoKTDNInput.MaCBTongHop;

export const SP_CHANGE_BAOCAOPHQH = (
  spCHANGEBAOCAOPHQHInput: SP_CHANGE_BAOCAOPHQH_Input,
) =>
  'SP_CHANGE_BAOCAOPHQH ' +
  '@Type= "' +
  spCHANGEBAOCAOPHQHInput.Type +
  '",' +
  '@MaBCPHQH=' +
  spCHANGEBAOCAOPHQHInput.MaBCPHQH +
  ',' +
  '@Ngay=' +
  spCHANGEBAOCAOPHQHInput.BaoCaoPHQHInput.Ngay +
  ',' +
  '@BiDanh=' +
  spCHANGEBAOCAOPHQHInput.BaoCaoPHQHInput.BiDanh +
  ',' +
  '@ThoiGianPH=' +
  spCHANGEBAOCAOPHQHInput.BaoCaoPHQHInput.ThoiGianPH +
  ',' +
  '@DiaDiemPH=' +
  spCHANGEBAOCAOPHQHInput.BaoCaoPHQHInput.DiaDiemPH +
  ',' +
  '@DDNhanDang=' +
  spCHANGEBAOCAOPHQHInput.BaoCaoPHQHInput.DDNhanDang +
  ',' +
  '@TSNhanXet=' +
  spCHANGEBAOCAOPHQHInput.BaoCaoPHQHInput.TSNhanXet +
  ',' +
  '@MaKQ=' +
  spCHANGEBAOCAOPHQHInput.BaoCaoPHQHInput.MaKQ +
  ',' +
  '@MaLanhDaoPD=' +
  spCHANGEBAOCAOPHQHInput.BaoCaoPHQHInput.MaLanhDaoPD +
  ',' +
  '@MaCAQHvaTD=' +
  spCHANGEBAOCAOPHQHInput.BaoCaoPHQHInput.MaCAQHvaTD +
  ',' +
  '@MaDoi=' +
  spCHANGEBAOCAOPHQHInput.BaoCaoPHQHInput.MaDoi +
  ',' +
  '@MaDoiTuong=' +
  spCHANGEBAOCAOPHQHInput.BaoCaoPHQHInput.MaDoiTuong +
  ',' +
  '@MaToTruongTS=' +
  spCHANGEBAOCAOPHQHInput.BaoCaoPHQHInput.MaToTruongTS +
  ',' +
  '@HinhAnh=' +
  spCHANGEBAOCAOPHQHInput.BaoCaoPHQHInput.HinhAnh +
  ',' +
  '@DiaChiCC=' +
  spCHANGEBAOCAOPHQHInput.BaoCaoPHQHInput.DiaChiCC;

export const SP_CHANGE_BIENBANRKN = (
  spCHANGEBIENBANRKNInput: SP_CHANGE_BIENBANRKN_Input,
) =>
  'SP_CHANGE_BIENBANRKN ' +
  '@Type= "' +
  spCHANGEBIENBANRKNInput.Type +
  '",' +
  '@MaBBRKN=' +
  spCHANGEBIENBANRKNInput.MaBBRKN +
  ',' +
  '@Ngay=' +
  spCHANGEBIENBANRKNInput.BienBanRKNInput.Ngay +
  ',' +
  '@DanhGiaLDP=' +
  spCHANGEBIENBANRKNInput.BienBanRKNInput.DanhGiaLDP +
  ',' +
  '@DanhGiaTS=' +
  spCHANGEBIENBANRKNInput.BienBanRKNInput.DanhGiaTS +
  ',' +
  '@DanhGiaDT=' +
  spCHANGEBIENBANRKNInput.BienBanRKNInput.DanhGiaDT +
  ',' +
  '@KetLuan=' +
  spCHANGEBIENBANRKNInput.BienBanRKNInput.KetLuan +
  ',' +
  '@DeXuat=' +
  spCHANGEBIENBANRKNInput.BienBanRKNInput.DeXuat +
  ',' +
  '@MaKQ=' +
  spCHANGEBIENBANRKNInput.BienBanRKNInput.MaKQ +
  ',' +
  '@MaChuToa=' +
  spCHANGEBIENBANRKNInput.BienBanRKNInput.MaChuToa +
  ',' +
  '@MaThuKy=' +
  spCHANGEBIENBANRKNInput.BienBanRKNInput.MaThuKy;

export const SP_CHANGE_CBCS = (spCHANGECBCSInput: SP_CHANGE_CBCS_Input) =>
  'SP_CHANGE_CBCS ' +
  '@Type= "' +
  spCHANGECBCSInput.Type +
  '",' +
  '@MaCBCS=' +
  spCHANGECBCSInput.MaCBCS +
  ',' +
  '@HoTen=' +
  spCHANGECBCSInput.CBCSInput.HoTen +
  ',' +
  '@TenKhac=' +
  spCHANGECBCSInput.CBCSInput.TenKhac +
  ',' +
  '@NgaySinh=' +
  spCHANGECBCSInput.CBCSInput.NgaySinh +
  ',' +
  '@QueQuan=' +
  spCHANGECBCSInput.CBCSInput.QueQuan +
  ',' +
  '@HKTT=' +
  spCHANGECBCSInput.CBCSInput.HKTT +
  ',' +
  '@PhuongTien=' +
  spCHANGECBCSInput.CBCSInput.PhuongTien +
  ',' +
  '@ThongTinChiTiet=' +
  spCHANGECBCSInput.CBCSInput.ThongTinChiTiet +
  ',' +
  '@GioiTinh=' +
  spCHANGECBCSInput.CBCSInput.GioiTinh +
  ',' +
  '@AnhDD=' +
  spCHANGECBCSInput.CBCSInput.AnhDD +
  ',' +
  '@NoiO=' +
  spCHANGECBCSInput.CBCSInput.NoiO +
  ',' +
  '@SDT=' +
  spCHANGECBCSInput.CBCSInput.SDT +
  ',' +
  '@CCCD=' +
  spCHANGECBCSInput.CBCSInput.CCCD +
  ',' +
  '@CMND=' +
  spCHANGECBCSInput.CBCSInput.CMND +
  ',' +
  '@SHC=' +
  spCHANGECBCSInput.CBCSInput.SHC +
  ',' +
  '@MaQT=' +
  spCHANGECBCSInput.CBCSInput.MaQT +
  ',' +
  '@MaDT=' +
  spCHANGECBCSInput.CBCSInput.MaDT +
  ',' +
  '@MaTG=' +
  spCHANGECBCSInput.CBCSInput.MaTG +
  ',' +
  '@MaCAQHvaTD=' +
  spCHANGECBCSInput.CBCSInput.MaCAQHvaTD +
  ',' +
  '@MaCB=' +
  spCHANGECBCSInput.CBCSInput.MaCB +
  ',' +
  '@MaCV=' +
  spCHANGECBCSInput.CBCSInput.MaCV +
  ',' +
  '@MaDoi=' +
  spCHANGECBCSInput.CBCSInput.MaDoi;

export const SP_CHANGE_CHUYENAN = (
  spCHANGECHUYENANInput: SP_CHANGE_CHUYENAN_Input,
) =>
  'SP_CHANGE_CHUYENAN ' +
  '@Type= "' +
  spCHANGECHUYENANInput.Type +
  '",' +
  '@MaCA=' +
  spCHANGECHUYENANInput.MaCA +
  ',' +
  '@BiSo=' +
  spCHANGECHUYENANInput.ChuyenAnInput.BiSo +
  ',' +
  '@ThoiGianBD=' +
  spCHANGECHUYENANInput.ChuyenAnInput.ThoiGianBD +
  ',' +
  '@TenCA=' +
  spCHANGECHUYENANInput.ChuyenAnInput.TenCA +
  ',' +
  '@NoiDung=' +
  spCHANGECHUYENANInput.ChuyenAnInput.NoiDung +
  ',' +
  '@MaTC=' +
  spCHANGECHUYENANInput.ChuyenAnInput.MaTC;

export const SP_CHANGE_DENGHITSNT = (
  spCHANGEDENGHITSNTInput: SP_CHANGE_DENGHITSNT_Input,
) =>
  'SP_CHANGE_DENGHITSNT ' +
  '@Type= "' +
  spCHANGEDENGHITSNTInput.Type +
  '",' +
  '@MaDN=' +
  spCHANGEDENGHITSNTInput.MaDN +
  ',' +
  '@So=' +
  spCHANGEDENGHITSNTInput.DeNghiTSNTInput.So +
  ',' +
  '@ThoiGianBD=' +
  spCHANGEDENGHITSNTInput.DeNghiTSNTInput.ThoiGianBD +
  ',' +
  '@ThoiGianKT=' +
  spCHANGEDENGHITSNTInput.DeNghiTSNTInput.ThoiGianKT +
  ',' +
  '@NoiDungDN=' +
  spCHANGEDENGHITSNTInput.DeNghiTSNTInput.NoiDungDN +
  ',' +
  '@NoiDungTN=' +
  spCHANGEDENGHITSNTInput.DeNghiTSNTInput.NoiDungTN +
  ',' +
  '@MaDoiTuong=' +
  spCHANGEDENGHITSNTInput.DeNghiTSNTInput.MaDoiTuong +
  ',' +
  '@MaCAQHvaTD=' +
  spCHANGEDENGHITSNTInput.DeNghiTSNTInput.MaCAQHvaTD +
  ',' +
  '@MaHTHD=' +
  spCHANGEDENGHITSNTInput.DeNghiTSNTInput.MaHTHD +
  ',' +
  '@MaCATTPvaTD=' +
  spCHANGEDENGHITSNTInput.DeNghiTSNTInput.MaCATTPvaTD;

export const SP_CHANGE_DIACHINV = (
  spCHANGEDIACHINVInput: SP_CHANGE_DIACHINV_Input,
) =>
  'SP_CHANGE_DIACHINV ' +
  '@Type= "' +
  spCHANGEDIACHINVInput.Type +
  '",' +
  '@MaDC=' +
  spCHANGEDIACHINVInput.MaDC +
  ',' +
  '@ThoiGianPH=' +
  spCHANGEDIACHINVInput.DiaChiNVInput.ThoiGianPH +
  ',' +
  '@DiaChi=' +
  spCHANGEDIACHINVInput.DiaChiNVInput.DiaChi +
  ',' +
  '@HinhAnh=' +
  spCHANGEDIACHINVInput.DiaChiNVInput.HinhAnh +
  ',' +
  '@MaKQ=' +
  spCHANGEDIACHINVInput.DiaChiNVInput.MaKQ;

export const SP_CHANGE_KEHOACHTSNT = (
  spCHANGEKEHOACHTSNTInput: SP_CHANGE_KEHOACHTSNT_Input,
) =>
  'SP_CHANGE_KEHOACHTSNT ' +
  '@Type= "' +
  spCHANGEKEHOACHTSNTInput.Type +
  '",' +
  '@MaKH=' +
  spCHANGEKEHOACHTSNTInput.MaKH +
  ',' +
  '@So=' +
  spCHANGEKEHOACHTSNTInput.KeHoachTSNTInput.So +
  ',' +
  '@Ngay=' +
  spCHANGEKEHOACHTSNTInput.KeHoachTSNTInput.Ngay +
  ',' +
  '@MaTramCT=' +
  spCHANGEKEHOACHTSNTInput.KeHoachTSNTInput.MaTramCT +
  ',' +
  '@MaLanhDaoPD=' +
  spCHANGEKEHOACHTSNTInput.KeHoachTSNTInput.MaLanhDaoPD +
  ',' +
  '@MaBCHPhuTrach=' +
  spCHANGEKEHOACHTSNTInput.KeHoachTSNTInput.MaBCHPhuTrach +
  ',' +
  '@MaDoiTuong=' +
  spCHANGEKEHOACHTSNTInput.KeHoachTSNTInput.MaDoiTuong +
  ',' +
  '@MaDN=' +
  spCHANGEKEHOACHTSNTInput.KeHoachTSNTInput.MaDN +
  ',' +
  '@MaQD=' +
  spCHANGEKEHOACHTSNTInput.KeHoachTSNTInput.MaQD +
  ',' +
  '@MaCAQHvaTD=' +
  spCHANGEKEHOACHTSNTInput.KeHoachTSNTInput.MaCAQHvaTD +
  ',' +
  '@MaDoi=' +
  spCHANGEKEHOACHTSNTInput.KeHoachTSNTInput.MaDoi +
  ',' +
  '@VanDeChuY=' +
  spCHANGEKEHOACHTSNTInput.KeHoachTSNTInput.VanDeChuY +
  ',' +
  '@NoiDung=' +
  spCHANGEKEHOACHTSNTInput.KeHoachTSNTInput.NoiDung;

export const SP_CHANGE_PHUONGTIENNV = (
  spCHANGEPHUONGTIENNVInput: SP_CHANGE_PHUONGTIENNV_Input,
) =>
  'SP_CHANGE_PHUONGTIENNV ' +
  '@Type= "' +
  spCHANGEPHUONGTIENNVInput.Type +
  '",' +
  '@MaPT=' +
  spCHANGEPHUONGTIENNVInput.MaPT +
  ',' +
  '@ThoiGianPH=' +
  spCHANGEPHUONGTIENNVInput.PhuongTienNVInput.ThoiGianPH +
  ',' +
  '@DiaDiemPH=' +
  spCHANGEPHUONGTIENNVInput.PhuongTienNVInput.DiaDiemPH +
  ',' +
  '@MaKQ=' +
  spCHANGEPHUONGTIENNVInput.PhuongTienNVInput.MaKQ +
  ',' +
  '@BKS=' +
  spCHANGEPHUONGTIENNVInput.PhuongTienNVInput.BKS +
  ',' +
  '@HinhAnh=' +
  spCHANGEPHUONGTIENNVInput.PhuongTienNVInput.HinhAnh;

export const SP_CHANGE_QUYETDINHTSNT = (
  spCHANGEQUYETDINHTSNTInput: SP_CHANGE_QUYETDINHTSNT_Input,
) =>
  'SP_CHANGE_QUYETDINHTSNT ' +
  '@Type= "' +
  spCHANGEQUYETDINHTSNTInput.Type +
  '",' +
  '@MaQD=' +
  spCHANGEQUYETDINHTSNTInput.MaQD +
  ',' +
  '@So=' +
  spCHANGEQUYETDINHTSNTInput.QuyetDinhTSNTInput.So +
  ',' +
  '@Ngay=' +
  spCHANGEQUYETDINHTSNTInput.QuyetDinhTSNTInput.Ngay +
  ',' +
  '@BiDanh=' +
  spCHANGEQUYETDINHTSNTInput.QuyetDinhTSNTInput.BiDanh +
  ',' +
  '@ThoiGianBD=' +
  spCHANGEQUYETDINHTSNTInput.QuyetDinhTSNTInput.ThoiGianBD +
  ',' +
  '@ThoiGianKT=' +
  spCHANGEQUYETDINHTSNTInput.QuyetDinhTSNTInput.ThoiGianKT +
  ',' +
  '@NhiemVuCT=' +
  spCHANGEQUYETDINHTSNTInput.QuyetDinhTSNTInput.NhiemVuCT +
  ',' +
  '@MaDoiTuong=' +
  spCHANGEQUYETDINHTSNTInput.QuyetDinhTSNTInput.MaDoiTuong +
  ',' +
  '@MaDN=' +
  spCHANGEQUYETDINHTSNTInput.QuyetDinhTSNTInput.MaDN +
  ',' +
  '@MaLanhDaoPD=' +
  spCHANGEQUYETDINHTSNTInput.QuyetDinhTSNTInput.MaLanhDaoPD +
  ',' +
  '@MaDoi=' +
  spCHANGEQUYETDINHTSNTInput.QuyetDinhTSNTInput.MaDoi +
  ',' +
  '@MaCATTPvaTD=' +
  spCHANGEQUYETDINHTSNTInput.QuyetDinhTSNTInput.MaCATTPvaTD +
  ',' +
  '@MaCAQHvaTD=' +
  spCHANGEQUYETDINHTSNTInput.QuyetDinhTSNTInput.MaCAQHvaTD;

export const SP_CHANGE_TRAMCT = (spCHANGETRAMCTInput: SP_CHANGE_TRAMCT_Input) =>
  'SP_CHANGE_TRAMCT ' +
  '@Type= "' +
  spCHANGETRAMCTInput.Type +
  '",' +
  '@MaTramCT=' +
  spCHANGETRAMCTInput.MaTramCT +
  ',' +
  '@Ngay=' +
  spCHANGETRAMCTInput.TramCTInput.Ngay +
  ',' +
  '@TinhHinhDB=' +
  spCHANGETRAMCTInput.TramCTInput.TinhHinhDB +
  ',' +
  '@VanDeChuY=' +
  spCHANGETRAMCTInput.TramCTInput.VanDeChuY +
  ',' +
  '@QuyDinh=' +
  spCHANGETRAMCTInput.TramCTInput.QuyDinh +
  ',' +
  '@MaTSXayDung=' +
  spCHANGETRAMCTInput.TramCTInput.MaTSXayDung +
  ',' +
  '@MaLanhDaoPD=' +
  spCHANGETRAMCTInput.TramCTInput.MaLanhDaoPD +
  ',' +
  '@MaCAQHvaTD=' +
  spCHANGETRAMCTInput.TramCTInput.MaCAQHvaTD +
  ',' +
  '@MaDoi=' +
  spCHANGETRAMCTInput.TramCTInput.MaDoi +
  ',' +
  '@DiaDiem=' +
  spCHANGETRAMCTInput.TramCTInput.DiaDiem +
  ',' +
  '@SoDoTram=' +
  spCHANGETRAMCTInput.TramCTInput.SoDoTram +
  ',' +
  '@LyLichTram=' +
  spCHANGETRAMCTInput.TramCTInput.LyLichTram;

export const SP_CHANGE_DOITUONG = (
  spCHANGEDOITUONGInput: SP_CHANGE_DOITUONG_Input,
) =>
  'SP_CHANGE_DOITUONG ' +
  '@Type= "' +
  spCHANGEDOITUONGInput.Type +
  '",' +
  '@MaDoiTuong=' +
  spCHANGEDOITUONGInput.MaDoiTuong +
  ',' +
  '@TenKhac=' +
  spCHANGEDOITUONGInput.DoiTuongInput.TenKhac +
  ',' +
  '@GioiTinh=' +
  spCHANGEDOITUONGInput.DoiTuongInput.GioiTinh +
  ',' +
  '@NgaySinh=' +
  spCHANGEDOITUONGInput.DoiTuongInput.NgaySinh +
  ',' +
  '@NoiSinh=' +
  spCHANGEDOITUONGInput.DoiTuongInput.NoiSinh +
  ',' +
  '@QueQuan=' +
  spCHANGEDOITUONGInput.DoiTuongInput.QueQuan +
  ',' +
  '@HKTT=' +
  spCHANGEDOITUONGInput.DoiTuongInput.HKTT +
  ',' +
  '@NgheNghiep=' +
  spCHANGEDOITUONGInput.DoiTuongInput.NgheNghiep +
  ',' +
  '@ChucVu=' +
  spCHANGEDOITUONGInput.DoiTuongInput.ChucVu +
  ',' +
  '@NoiLamViec=' +
  spCHANGEDOITUONGInput.DoiTuongInput.NoiLamViec +
  ',' +
  '@PhuongTien=' +
  spCHANGEDOITUONGInput.DoiTuongInput.PhuongTien +
  ',' +
  '@ThongTinKhac=' +
  spCHANGEDOITUONGInput.DoiTuongInput.ThongTinKhac +
  ',' +
  '@MaQT=' +
  spCHANGEDOITUONGInput.DoiTuongInput.MaQT +
  ',' +
  '@MaDT=' +
  spCHANGEDOITUONGInput.DoiTuongInput.MaDT +
  ',' +
  '@MaTG=' +
  spCHANGEDOITUONGInput.DoiTuongInput.MaTG +
  ',' +
  '@MaTC=' +
  spCHANGEDOITUONGInput.DoiTuongInput.MaTC +
  ',' +
  '@MaLoai=' +
  spCHANGEDOITUONGInput.DoiTuongInput.MaLoai +
  ',' +
  '@TenDT=' +
  spCHANGEDOITUONGInput.DoiTuongInput.TenDT +
  ',' +
  '@CCCD=' +
  spCHANGEDOITUONGInput.DoiTuongInput.CCCD +
  ',' +
  '@CMND=' +
  spCHANGEDOITUONGInput.DoiTuongInput.CMND +
  ',' +
  '@SHC=' +
  spCHANGEDOITUONGInput.DoiTuongInput.SHC +
  ',' +
  '@AnhDD=' +
  spCHANGEDOITUONGInput.DoiTuongInput.AnhDD +
  ',' +
  '@NoiO=' +
  spCHANGEDOITUONGInput.DoiTuongInput.NoiO +
  ',' +
  '@SDT=' +
  spCHANGEDOITUONGInput.DoiTuongInput.SDT;
