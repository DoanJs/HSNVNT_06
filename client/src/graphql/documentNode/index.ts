import { gql } from "@apollo/client";

export const QUERY_quyetdinhTSNTs = gql`
  query QUERY_quyetdinhTSNTs($utilsParams: UtilsParamsInput!){
    quyetdinhTSNTs(utilsParams: $utilsParams) {
      MaQD
      So
      Ngay
      BiDanh
      ThoiGianBD
      ThoiGianKT
      DoiTuong {
        MaDoiTuong
        TenDT
        TinhChatDT {
          TinhChat
        }
      }
      DeNghiTSNT {
        MaDN
        DonViDN {
          MaCAQHvaTD
          CAQHvaTD
        }
      }
    }
  }
`;
export const QUERY_doituongs = gql`
  query QUERY_doituongs($utilsParams: UtilsParamsInput!){
    doituongs(utilsParams: $utilsParams) {
      MaDoiTuong
      TenDT
      NgaySinh
      NoiO
      TinhChatDT {
        TinhChat
      }
      GioiTinh
      QuyetDinhTSNTs {
        MaQD
      }
    }
  }
`;
export const QUERY_doituong = gql`
  query QUERY_doituong($id: Float!){
    doituong(id: $id) {
        MaDoiTuong
        TenDT
        TenKhac
        AnhDD
        NgaySinh
        GioiTinh
        NoiSinh
        QuocTich{
          TenQT
        }
        DanToc{
          TenDT
        }
        TonGiao{
          TenTG
        }
        QueQuan
        HKTT
        CCCD
        CMND
        SHC
        NoiO
        NgheNghiep
        NoiLamViec
        SDT
        PhuongTien
        BienPhapDTs {
         BienPhapDT
        }
        LoaiDT {
          LoaiDT
        }
        TinhChatDT {
          TinhChat
        }
        QuyetDinhTSNTs {
          MaQD
          BiDanh
          NhiemVuCT
          KetQuaTSNT {
            MaKQ
            ThoiGianBD
            ThoiGianKT
            BaoCaoKTDN {
              MaBCKTDN
              TinhHinhDT
              VanDeRKN
            }
            DanhGiaTSTHs {
              MaDanhGiaTSTH
              VaiTro
              DanhGia
              LyDo
              CBCS {
                MaCBCS
                HoTen
                ChucVu {
                  ChucVu
                }
              }
            }
            BaoCaoPHQHs {
              MaBCPHQH
              BiDanh
            }
            PhuongTienNVs {
              MaPT
              BKS
            }
            BaoCaoKQGHs {
              MaBCKQGH
              MucDich
            }
            DiaChiNVs {
              MaDC
              DiaChi
            }
          }
          KeHoachTSNT {
            MaKH
            VanDeChuY
            TramCT {
              MaTramCT
              DiaDiem
              VanDeChuY
              QuyDinh
            }
          }
        }
      }
  }
`;
export const QUERY_chuyenans = gql`
  query QUERY_chuyenans($utilsParams: UtilsParamsInput!){
    chuyenans(utilsParams:$utilsParams){
      MaCA
      TenCA
      BiSo
      TinhChat{
        MaTCDT
        TinhChat
      }
      ThoiGianBD
    }
  }
`
export const QUERY_chuyenan = gql`
  query QUERY_chuyenan($id: Float!){
    chuyenan(id: $id){
      MaCA
      TenCA
      BiSo
      ThoiGianBD
      NoiDung
      DoiTuongCAs {
        MaDTCA
        ViTri
        BiSo
        DoiTuong {
          MaDoiTuong
          TenDT
          NgaySinh
          NoiO
          CMND
          CCCD
          SHC
        }
      }
    }
  }
`
export const QUERY_cbcss = gql`
  query QUERY_cbcss($utilsParams: UtilsParamsInput!){
    cbcss (utilsParams: $utilsParams){
      MaCBCS
      HoTen
      TenKhac
      NgaySinh
      Doi {
        MaDoi
        TenDoi
      }
      DanhGiaTSTHs {
        MaDanhGiaTSTH
        VaiTro
        DanhGia
        LyDo
        KetQuaTSNT {
          MaKQ
          ThoiGianBD
          ThoiGianKT
          KeHoachTSNT {
            MaKH
            DoiTuong {
              MaDoiTuong
              TenDT
            }
            QuyetDinhTSNT {
              MaQD
              BiDanh
              ThoiGianBD
              ThoiGianKT
            }
          }
        }
      }
    }
  }
`
export const QUERY_account = gql`
  query QUERY_account($id: Float!){
    account(accountID: $id) {
      AccountID
      Username
      Role
      Position
    }
  }
`
export const QUERY_denghiTSNTs = gql`
  query QUERY_denghiTSNTs($utilsParams: UtilsParamsInput!){
    denghiTSNTs(utilsParams: $utilsParams) {
      MaDN
      So
      Ngay
      ThoiGianBD
      ThoiGianKT
      DoiTuong {
        MaDoiTuong
        TenDT
      }
      CATTPvaTD {
        MaCATTPvaTD
        CATTPvaTD
      }
      CAQHvaTD {
        MaCAQHvaTD
        CAQHvaTD
      }
    }
  }
`
export const QUERY_baocaoPHQHs = gql`
  query QUERY_baocaoPHQHs($utilsParams: UtilsParamsInput!){
    baocaoPHQHs(utilsParams: $utilsParams) {
      MaBCPHQH
      ThoiGianPH
      DiaChiCC
      DiaDiemPH
      HinhAnh
      TSThucHiens {
        MaCBCS
        HoTen
      }
      DoiTuong {
        MaDoiTuong
        TenDT
      }
      KetQuaTSNT {
        QuyetDinhTSNT {
          BiDanh
        }
      }
    }
  }
`
export const QUERY_baocaoPHQH = gql`
  query QUERY_baocaoPHQH($id: Float!){
    baocaoPHQH(id: $id) {
      MaBCPHQH
      Ngay
      BiDanh
      ThoiGianPH
      DDNhanDang
      DiaChiCC
      DiaDiemPH
      HinhAnh
      TSNhanXet
      TSThucHiens {
        MaCBCS
        HoTen
      }
      DoiTuong {
        MaDoiTuong
        TenDT
      }
      KetQuaTSNT {
        QuyetDinhTSNT {
          BiDanh
        }
      }
      BaoCaoKQXMQuanHe {
        MaBCKQXMQH
        HoTen
        TenKhac
        GioiTinh
        NamSinh
        QueQuan
        HKTT
        NoiO
        NoiLamViec
        ChucVu
        NgheNghiep
        QuanHeGDXH
        BienPhapXM
        TSXacMinh {
          MaCBCS
          HoTen
        }
      }
    }
  }
`
export const QUERY_diachiNVs = gql`
  query QUERY_diachiNVs($utilsParams: UtilsParamsInput!){
    diachiNVs(utilsParams: $utilsParams) {
      MaDC
      DiaChi
      ThoiGianPH
      HinhAnh
      KetQuaTSNT {
        QuyetDinhTSNT {
          BiDanh
          DoiTuong {
            MaDoiTuong
            TenDT
          }
        }
      }
      TSThucHiens {
        MaCBCS
        HoTen
      }
    }
  }
`
export const QUERY_diachiNV = gql`
  query QUERY_diachiNV($id: Float!){
    diachiNV(id: $id) {
      MaDC
      DiaChi
      ThoiGianPH
      HinhAnh
      KetQuaTSNT {
        QuyetDinhTSNT {
          DoiTuong {
            MaDoiTuong
            TenDT
          }
        }
      }
      TSThucHiens {
        MaCBCS
        HoTen
      }
      BaoCaoKQXMDiaChi {
        HoTenChuHo
        TenKhac
        NamSinh
        GioiTinh
        QueQuan
        HKTT
        NoiO
        NgheNghiep
        NoiLamViec
        QuanHeGiaDinh
        HoKhacCungDC
        BienPhapXM
        TSXacMinh {
          MaCBCS
          HoTen
        }
      }
    }
  }
`
export const QUERY_phuongtienNVs = gql`
  query QUERY_phuongtienNVs($utilsParams: UtilsParamsInput!){
    phuongtienNVs(utilsParams: $utilsParams) {
      MaPT
      BKS
      ThoiGianPH
      DiaDiemPH
      HinhAnh
      KetQuaTSNT {
        QuyetDinhTSNT {
          BiDanh
          DoiTuong {
            MaDoiTuong
            TenDT
          }
        }
      }
      TSThucHiens {
        MaCBCS
        HoTen
      }
    }
  }
`
export const QUERY_phuongtienNV = gql`
  query QUERY_phuongtienNV($id: Float!){
    phuongtienNV(id: $id) {
      MaPT
      BKS
      ThoiGianPH
      DiaDiemPH
      HinhAnh
      KetQuaTSNT {
        QuyetDinhTSNT {
          BiDanh
          DoiTuong {
            MaDoiTuong
            TenDT
          }
        }
      }
      TSThucHiens {
        MaCBCS
        HoTen
      }
    }
  }
`
export const QUERY_baocaoKQGHs = gql`
  query QUERY_baocaoKQGHs($utilsParams: UtilsParamsInput!){
    baocaoKQGHs(utilsParams: $utilsParams) {
      MaBCKQGH
      ThoiGian
      DiaDiem
      HinhAnh
      KetQuaTSNT {
        QuyetDinhTSNT {
          BiDanh
        }
      }
      DoiTuong {
        MaDoiTuong
        TenDT
      }
      TSThucHiens {
        MaCBCS
        HoTen
      }
    }
  }
`
export const QUERY_baocaoKQGH = gql`
  query QUERY_baocaoKQGH($id: Float!){
    baocaoKQGH(id: $id) {
      MaBCKQGH
      Ngay
      ThoiGian
      DiaDiem
      HinhAnh
      PhuongTienSD
      VaiNguyTrang
      NoiDung
      MucDich
      DoiTuong {
        MaDoiTuong
        TenDT
      }
      TSThucHiens {
        MaCBCS
        HoTen
      }
    }
  }
`
export const QUERY_cbcs = gql`
  query QUERY_cbcs($id: Float!){
    cbcs (id: $id){
      MaCBCS
      HoTen
      TenKhac
      NgaySinh
      GioiTinh
      Doi {
        TenDoi
      }
      ChucVu {
        ChucVu
      }
      DanhGiaTSTHs {
        MaDanhGiaTSTH
        DanhGia
        KetQuaTSNT {
          QuyetDinhTSNT {
            BiDanh
            DoiTuong {
              MaDoiTuong
              TenDT
            }
          }
          ThoiGianBD
          ThoiGianKT
        }
      }
      TSThucHien_BaoCaoPHQHs {
        MaBCPHQH
        Ngay
        BiDanh
        KetQuaTSNT {
          QuyetDinhTSNT {
            BiDanh
            DoiTuong {
              MaDoiTuong
              TenDT
            }
          }
        }
        TSThucHiens {
          MaCBCS
          HoTen
        }
      }
      TSThucHien_BaoCaoKQGHs {
        MaBCKQGH
        Ngay
        KetQuaTSNT {
          QuyetDinhTSNT {
            BiDanh
            DoiTuong {
              MaDoiTuong
              TenDT
            }
          }
        }
        TSThucHiens {
          MaCBCS
          HoTen
        }
      }
      TSThucHien_PhuongTienNVs {
        MaPT
        BKS
        ThoiGianPH
        DiaDiemPH
        KetQuaTSNT {
          QuyetDinhTSNT {
            BiDanh
            DoiTuong {
              MaDoiTuong
              TenDT
            }
          }
        }
        TSThucHiens {
          MaCBCS
          HoTen
        }
      }
      TSThucHien_DiaChiNVs {
        MaDC
        ThoiGianPH
        DiaChi
        HinhAnh
        KetQuaTSNT {
          QuyetDinhTSNT {
            BiDanh
            DoiTuong {
              MaDoiTuong
              TenDT
            }
          }
        }
        TSThucHiens {
          MaCBCS
          HoTen
        }
      }
    }
  }
`
// 
export const MUTATION_getData_searchFast = gql`
  mutation MUTATION_getData_searchFast($keySearch: String!){
    getData_searchFast(keySearch: $keySearch) {
      TieuDe
      LienKet
    }
  }
`
export const MUTATION_editAccount = gql`
  mutation MUTATION_editAccount($id: Float!, $accountExtendInput: AccountExtendInput!){
    editAccount(id: $id, accountExtendInput: $accountExtendInput) {
      Username
    }
  }
`



























export const QUERY_doituongCAsOpen = gql`
  query QUERY_doituongCAsOpen($conditionCol: String!, $value: String!){
    doituongCAsOpen(conditionCol: $conditionCol, value: $value){
      MaDTCA
      ChuyenAn {
        MaCA
        BiSo
        TenCA
      }
    }
  }
`;


