import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SP_GET_DATA_DECRYPT } from 'src/utils/mssql/query';
import { Repository } from 'typeorm';
import { TKNhanh } from './TKNhanh.model';

@Injectable()
export class TKNhanhsService {
  constructor(
    @InjectRepository(TKNhanh) private tknhanhRepository: Repository<TKNhanh>,
  ) { }

  public readonly filterData_Fast = async (
    TenBang: string,
    MaID: string,
    CotKiemTra: any[],
    keySearch: string,
    Link: string,
  ) => {
    let result: any[] = []

    const data_server = await this.tknhanhRepository.query(SP_GET_DATA_DECRYPT(
      TenBang,
      `"${MaID} != 0"`, 0, 0
    )) || await this.tknhanhRepository.query(
      `SELECT * FROM ${TenBang} WHERE ${MaID} != 0`
    )

    data_server.map((data: any) => {
      CotKiemTra.map((obj: any) => {
        if (data[obj]?.toLowerCase().includes(keySearch)) {
          result.push({
            TieuDe: data[obj],
            LienKet: `${Link}/${data[MaID]}`
          })
        }
      })
    })

    return result
  };

  async getData_searchFast(keySearch: string): Promise<TKNhanh[]> {
    let arrBegin: any[] = []

    const baocaoKQGHs_filter = await this.filterData_Fast(
      "BaoCaoKQGHs",
      "MaBCKQGH",
      [
        "PhuongTienSD",
        "VaiNguyTrang",
        "NoiDung",
        "MucDich",
        "DiaDiem",
      ],
      keySearch,
      "baocaokqgh"
    )
    const baocaoKQXMDiaChis_filter = await this.filterData_Fast(
      "BaoCaoKQXMDiaChis",
      "MaBCKQXMDC",
      [
        "HoTenChuHo",
        "TenKhac",
        "QueQuan",
        "HKTT",
        "NoiO",
        "NgheNghiep",
        "NoiLamViec",
        "QuanHeGiaDinh",
        "HoKhacCungDC",
        "BienPhapXM",
      ],
      keySearch,
      "baocaokqxmdiachi"
    )
    const baocaoKQXMQuanHes_filter = await this.filterData_Fast(
      "BaoCaoKQXMQuanHes",
      "MaBCKQXMQH",
      [
        "HoTen",
        "TenKhac",
        "QueQuan",
        "HKTT",
        "NoiO",
        "NgheNghiep",
        "NoiLamViec",
        "QuanHeGDXH",
        "BienPhapXM",
      ],
      keySearch,
      "baocaokqxmquanhe"
    )
    const baocaoKTDNs_filter = await this.filterData_Fast(
      "BaoCaoKTDNs",
      "MaBCKTDN",
      [
        "TinhHinhDT",
        "VanDeRKN",
      ],
      keySearch,
      "baocaoktdn"
    )
    const baocaoPHQHs_filter = await this.filterData_Fast(
      "BaoCaoPHQHs",
      "MaBCPHQH",
      [
        "DiaDiemPH",
        "DDNhanDang",
        "DiaChiCC",
        "TSNhanXet",
        "BiDanh",
      ],
      keySearch,
      "baocaophqh"
    )
    const bienbanRKNs_filter = await this.filterData_Fast(
      "BienBanRKNs",
      "MaBBRKN",
      [
        "KetLuan",
        "DeXuat",
        "DanhGiaLDP",
        "DanhGiaTS",
        "DanhGiaDT",
      ],
      keySearch,
      "bienbanrkn"
    )
    const cbcss_filter = await this.filterData_Fast(
      "CBCSs",
      "MaCBCS",
      [
        "HoTen",
        "TenKhac",
        "QueQuan",
        "HKTT",
        "NoiO",
        "PhuongTien",
        "SDT",
        "CCCD",
        "CMND",
        "SHC",
        "ThongTinChiTiet",
      ],
      keySearch,
      "cbcs"
    )
    const chuyenans_filter = await this.filterData_Fast(
      "ChuyenAns",
      "MaCA",
      [
        "TenCA",
        "BiSo",
        "NoiDung",
      ],
      keySearch,
      "chuyenan"
    )
    const denghiTSNTs_filter = await this.filterData_Fast(
      "DeNghiTSNTs",
      "MaDN",
      [
        "NoiDungDN",
        "NoiDungTN",
        "So",
      ],
      keySearch,
      "denghitsnt"
    )
    const diachiNVs_filter = await this.filterData_Fast(
      "DiaChiNVs",
      "MaDC",
      [
        "DiaChi",
      ],
      keySearch,
      "diachinv"
    )
    const doituongCAs_filter = await this.filterData_Fast(
      "DoiTuongCAs",
      "MaDTCA",
      [
        "BiSo",
      ],
      keySearch,
      "doituongca"
    )

    const doituongs_filter = await this.filterData_Fast(
      "DoiTuongs",
      "MaDoiTuong",
      [
        "TenDT",
        "TenKhac",
        "NoiSinh",
        "NoiO",
        "QueQuan",
        "HKTT",
        "NoiLamViec"
      ],
      keySearch,
      "doituong"
    )
    const kehoachTSNTs_filter = await this.filterData_Fast(
      "KeHoachTSNTs",
      "MaKH",
      [
        "VanDeChuY",
        "NoiDung",
        "So"
      ],
      keySearch,
      "kehoachtsnt"
    )
    const ketquaXMDiaChis_filter = await this.filterData_Fast(
      "KetQuaXMDiaChis",
      "MaKQXMDC",
      [
        "So"
      ],
      keySearch,
      "ketquaxmdiachi"
    )
    const ketquaXMQuanHes_filter = await this.filterData_Fast(
      "KetQuaXMQuanHes",
      "MaKQXMQH",
      [
        "So"
      ],
      keySearch,
      "ketquaxmquanhe"
    )
    const lldbs_filter = await this.filterData_Fast(
      "LLDBs",
      "MaLLDB",
      [
        "BiDanh"
      ],
      keySearch,
      "lldb"
    )
    const phuongtienNVs_filter = await this.filterData_Fast(
      "PhuongTienNVs",
      "MaPT",
      [
        "BKS",
        "DiaDiemPH",
      ],
      keySearch,
      "phuongtiennv"
    )
    const quyetdinhTSNTs_filter = await this.filterData_Fast(
      "QuyetDinhTSNTs",
      "MaQD",
      [
        "BiDanh",
        "NhiemVuCT",
        "So",
      ],
      keySearch,
      "quyetdinhtsnt"
    )
    const tramCTs_filter = await this.filterData_Fast(
      "TramCTs",
      "MaTramCT",
      [
        "TinhHinhDB",
        "LyLichTram",
        "VanDeChuY",
        "QuyDinh",
        "DiaDiem",
      ],
      keySearch,
      "tramct"
    )

    return arrBegin.concat(
      baocaoKQGHs_filter,
      baocaoKQXMDiaChis_filter,
      baocaoKQXMQuanHes_filter,
      baocaoKTDNs_filter,
      baocaoPHQHs_filter,
      bienbanRKNs_filter,
      cbcss_filter,
      chuyenans_filter,
      denghiTSNTs_filter,
      diachiNVs_filter,
      doituongCAs_filter,
      doituongs_filter,
      kehoachTSNTs_filter,
      ketquaXMDiaChis_filter,
      ketquaXMQuanHes_filter,
      lldbs_filter,
      phuongtienNVs_filter,
      quyetdinhTSNTs_filter,
      tramCTs_filter,
    )
  }
}
