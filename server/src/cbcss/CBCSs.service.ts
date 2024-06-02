import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaoCaoKQGH } from 'src/baocaoKQGHs/BaoCaoKQGH.model';
import { BaoCaoKQXMDiaChi } from 'src/baocaoKQXMDiaChis/BaoCaoKQXMDiaChi.model';
import { BaoCaoKQXMQuanHe } from 'src/baocaoKQXMQuanHes/BaoCaoKQXMQuanHe.model';
import { BaoCaoPHQH } from 'src/baocaoPHQHs/BaoCaoPHQH.model';
import { CapBac } from 'src/capbacs/CapBac.model';
import { CAQHvaTD } from 'src/caQHvaTD/CAQHvaTD.model';
import { ChucVu } from 'src/chucvus/ChucVu.model';
import { DanhGiaTSTH } from 'src/danhgiaTSTHs/DanhGiaTSTH.model';
import { DanToc } from 'src/dantocs/DanToc.model';
import { DataLoaderService } from 'src/dataloader/Dataloader.service';
import { DeNghiTSNT } from 'src/denghiTSNTs/DeNghiTSNT.model';
import { DiaChiNV } from 'src/diachiNVs/DiaChiNV.model';
import { Doi } from 'src/dois/Doi.model';
import { KeHoachTSNT } from 'src/kehoachTSNTs/KeHoachTSNT.model';
import { LLDB } from 'src/lldbs/LLDB.model';
import { LucLuongThamGiaKH } from 'src/lltgKeHoachs/LucLuongThamGiaKH.model';
import PhuongTienNV from 'src/phuongtienNVs/PhuongTienNV.model';
import { QuocTich } from 'src/quoctichs/QuocTich.model';
import { QuyetDinhTSNT } from 'src/quyetdinhTSNTs/QuyetDinhTSNT.model';
import { TonGiao } from 'src/tongiaos/TonGiao.model';
import { TramCT } from 'src/tramCTs/TramCT.model';
import { SP_CHANGE_CBCS, SP_GET_DATA, SP_GET_DATA_DECRYPT } from 'src/utils/mssql/query';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { Repository } from 'typeorm';
import { CBCS } from './CBCS.model';
import { CBCSInput } from './type/CBCS.Input';

@Injectable()
export class CBCSsService {
  constructor(
    @InjectRepository(CBCS) private cbcsRepository: Repository<CBCS>,
    private readonly dataloaderService: DataLoaderService,
  ) {}

  public readonly CBCS_DataInput = (
    Type: string,
    MaCBCS: number | null,
    cbcsInput: CBCSInput,
  ) => {
    return {
      Type,
      MaCBCS,
      CBCSInput: {
        HoTen: `N'${cbcsInput.HoTen}'`, //crypto
        TenKhac: cbcsInput.TenKhac ? `N'${cbcsInput.TenKhac}'` : null,
        NgaySinh: cbcsInput.NgaySinh ? cbcsInput.NgaySinh : null,
        QueQuan: cbcsInput.QueQuan ? `N'${cbcsInput.QueQuan}'` : null,
        HKTT: cbcsInput.HKTT ? `N'${cbcsInput.HKTT}'` : null,
        PhuongTien: cbcsInput.PhuongTien ? `N'${cbcsInput.PhuongTien}'` : null,
        ThongTinChiTiet: cbcsInput.ThongTinChiTiet
          ? `N'${cbcsInput.ThongTinChiTiet}'`
          : null,
        GioiTinh: cbcsInput.GioiTinh ? cbcsInput.GioiTinh : null,
        NoiO: `N'${cbcsInput.NoiO}'`, //crypto
        AnhDD: `N'${cbcsInput.AnhDD}'`, //crypto
        SDT: `N'${cbcsInput.SDT}'`, //crypto
        CCCD: `N'${cbcsInput.CCCD}'`, //crypto
        CMND: `N'${cbcsInput.CMND}'`, //crypto
        SHC: `N'${cbcsInput.SHC}'`, //crypto
        MaQT: cbcsInput.MaQT ? cbcsInput.MaQT : null,
        MaDT: cbcsInput.MaDT ? cbcsInput.MaDT : null,
        MaTG: cbcsInput.MaTG ? cbcsInput.MaTG : null,
        MaCAQHvaTD: cbcsInput.MaCAQHvaTD ? cbcsInput.MaCAQHvaTD : null,
        MaCB: cbcsInput.MaCB ? cbcsInput.MaCB : null,
        MaCV: cbcsInput.MaCV ? cbcsInput.MaCV : null,
        MaDoi: cbcsInput.MaDoi ? cbcsInput.MaDoi : null,
      },
    };
  };

  cbcss(utilsParams: UtilsParamsInput): Promise<CBCS[]> {
    return this.cbcsRepository.query(
      SP_GET_DATA_DECRYPT(
        'CBCSs',
        `'MaCBCS != 0'`,
        utilsParams.skip ? utilsParams.skip : 0,
        utilsParams.take ? utilsParams.take : 0,
      ),
    );
  }

  async cbcs(id: number): Promise<CBCS> {
    const result = await this.cbcsRepository.query(
      SP_GET_DATA_DECRYPT('CBCSs', `'MaCBCS = ${id}'`, 0, 1),
    );
    return result[0];
  }

  async createCBCS(cbcsInput: CBCSInput): Promise<CBCS> {
    const result = await this.cbcsRepository.query(
      SP_CHANGE_CBCS(this.CBCS_DataInput('CREATE', null, cbcsInput)),
    );
    return result[0];
  }

  async editCBCS(cbcsInput: CBCSInput, id: number): Promise<CBCS> {
    const result = await this.cbcsRepository.query(
      SP_CHANGE_CBCS(this.CBCS_DataInput('EDIT', id, cbcsInput)),
    );
    return result[0];
  }

  async deleteCBCS(cbcsInput: CBCSInput, id: number): Promise<CBCS> {
    const result = await this.cbcsRepository.query(
      SP_CHANGE_CBCS(this.CBCS_DataInput('DELETE', id, cbcsInput)),
    );
    return result[0];
  }

  //ResolveField

  async QuocTich(cbcs: any): Promise<QuocTich> {
    return this.dataloaderService.loaderQuocTich.load(cbcs.MaQT);
  }

  async DanToc(cbcs: any): Promise<DanToc> {
    return this.dataloaderService.loaderDanToc.load(cbcs.MaDT);
  }

  async TonGiao(cbcs: any): Promise<TonGiao> {
    return this.dataloaderService.loaderTonGiao.load(cbcs.MaTG);
  }

  async CAQHvaTD(cbcs: any): Promise<CAQHvaTD> {
    return this.dataloaderService.loaderCAQHvaTD.load(cbcs.MaCAQHvaTD);
  }

  async CapBac(cbcs: any): Promise<CapBac> {
    return this.dataloaderService.loaderCapBac.load(cbcs.MaCB);
  }

  async ChucVu(cbcs: any): Promise<ChucVu> {
    return this.dataloaderService.loaderChucVu.load(cbcs.MaCV);
  }

  async Doi(cbcs: any): Promise<Doi> {
    return this.dataloaderService.loaderDoi.load(cbcs.MaDoi);
  }

  async LanhDaoDVDN_DeNghiTSNTs(MaCBCS: number): Promise<DeNghiTSNT[]> {
    return this.cbcsRepository.query(
      SP_GET_DATA_DECRYPT('DeNghiTSNTs', `'MaLanhDaoDVDN = ${MaCBCS}'`, 0, 0),
    );
  }

  async CBPhuTrachDN_DeNghiTSNTs(MaCBCS: number): Promise<DeNghiTSNT[]> {
    return this.cbcsRepository.query(
      SP_GET_DATA_DECRYPT('DeNghiTSNTs', `'MaCBPhuTrachDN = ${MaCBCS}'`, 0, 0),
    );
  }

  async LanhDaoCapTren_DeNghiTSNTs(MaCBCS: number): Promise<DeNghiTSNT[]> {
    return this.cbcsRepository.query(
      SP_GET_DATA_DECRYPT(
        'DeNghiTSNTs',
        `'MaLanhDaoCapTren = ${MaCBCS}'`,
        0,
        0,
      ),
    );
  }

  async DaiDienDonViTSNT_DeNghiTSNTs(MaCBCS: number): Promise<DeNghiTSNT[]> {
    return this.cbcsRepository.query(
      SP_GET_DATA_DECRYPT(
        'DeNghiTSNTs',
        `'MaDaiDienDonViTSNT = ${MaCBCS}'`,
        0,
        0,
      ),
    );
  }

  async LanhDaoQD_QuyetDinhTSNTs(MaCBCS: number): Promise<QuyetDinhTSNT[]> {
    return this.cbcsRepository.query(
      SP_GET_DATA_DECRYPT('QuyetDinhTSNTs', `'MaLanhDaoQD = ${MaCBCS}'`, 0, 0),
    );
  }

  async LanhDaoPD_KeHoachTSNTs(MaCBCS: number): Promise<KeHoachTSNT[]> {
    return this.cbcsRepository.query(
      SP_GET_DATA_DECRYPT('KeHoachTSNTs', `'MaLanhDaoPD = ${MaCBCS}'`, 0, 0),
    );
  }

  async BanChiHuy_KeHoachTSNTs(MaCBCS: number): Promise<KeHoachTSNT[]> {
    return this.cbcsRepository.query(
      SP_GET_DATA_DECRYPT('KeHoachTSNTs', `'MaBanChiHuy = ${MaCBCS}'`, 0, 0),
    );
  }

  async LucLuongThamGiaKHs(MaCBCS: number): Promise<LucLuongThamGiaKH[]> {
    return this.cbcsRepository.query(
      SP_GET_DATA('LucLuongThamGiaKHs', `'MaCBCS = ${MaCBCS}'`, 'MaLLTGKH', 0, 0)
    );
  }

  async DanhGiaTSTHs(MaCBCS: number): Promise<DanhGiaTSTH[]> {
    return this.cbcsRepository.query(
      SP_GET_DATA('DanhGiaTSTHs', `'MaCBCS = ${MaCBCS}'`, 'MaDanhGiaTSTH', 0, 0)
    );
  }

  async TSThucHien_BaoCaoPHQHs(MaCBCS: number): Promise<BaoCaoPHQH[]> {
    const result = (await this.cbcsRepository.query(
      SP_GET_DATA('BaoCaoPHQHs_CBCSs', `'MaCBCS = ${MaCBCS}'`, 'MaBCPHQH', 0, 0)
    )) as [{ MaBCPHQH: number }];
    const resultLoader = result.map((obj) =>
      this.dataloaderService.loaderBaoCaoPHQH.load(obj.MaBCPHQH),
    );
    return await Promise.all(resultLoader);
  }

  async TSThucHien_PhuongTienNVs(MaCBCS: number): Promise<PhuongTienNV[]> {
    const result = (await this.cbcsRepository.query(
      SP_GET_DATA('PhuongTienNVs_CBCSs', `'MaCBCS = ${MaCBCS}'`, 'MaPT', 0, 0)
    )) as [{ MaPT: number }];
    const resultLoader = result.map((obj) =>
      this.dataloaderService.loaderPhuongTienNV.load(obj.MaPT),
    );
    return await Promise.all(resultLoader);
  }

  async TSThucHien_DiaChiNVs(MaCBCS: number): Promise<DiaChiNV[]> {
    const result = (await this.cbcsRepository.query(
      SP_GET_DATA('DiaChiNVs_CBCSs', `'MaCBCS = ${MaCBCS}'`, 'MaDC', 0, 0)
    )) as [{ MaDC: number }];
    const resultLoader = result.map((obj) =>
      this.dataloaderService.loaderDiaChiNV.load(obj.MaDC),
    );
    return await Promise.all(resultLoader);
  }

  async LanhDaoPD_BaoCaoPHQHs(MaCBCS: number): Promise<BaoCaoPHQH[]> {
    return this.cbcsRepository.query(
      SP_GET_DATA_DECRYPT('BaoCaoPHQHs', `'MaLanhDaoPD = ${MaCBCS}'`, 0, 0),
    );
  }

  async ToTruongTS_BaoCaoPHQHs(MaCBCS: number): Promise<BaoCaoPHQH[]> {
    return this.cbcsRepository.query(
      SP_GET_DATA_DECRYPT('BaoCaoPHQHs', `'MaToTruongTS = ${MaCBCS}'`, 0, 0),
    );
  }

  async TSThucHien_BaoCaoKQGHs(MaCBCS: number): Promise<BaoCaoKQGH[]> {
    const result = (await this.cbcsRepository.query(
      SP_GET_DATA('BaoCaoKQGHs_CBCSs', `'MaCBCS = ${MaCBCS}'`, 'MaBCKQGH', 0, 0)
    )) as [{ MaBCKQGH: number }];
    const resultLoader = result.map((obj) =>
      this.dataloaderService.loaderBaoCaoKQGH.load(obj.MaBCKQGH),
    );
    return await Promise.all(resultLoader);
  }

  async LanhDaoPD_BaoCaoKQGHs(MaCBCS: number): Promise<BaoCaoKQGH[]> {
    return this.cbcsRepository.query(
      SP_GET_DATA_DECRYPT('BaoCaoKQGHs', `'MaLanhDaoPD = ${MaCBCS}'`, 0, 0),
    );
  }

  async TSXayDung_TramCTs(MaCBCS: number): Promise<TramCT[]> {
    return this.cbcsRepository.query(
      SP_GET_DATA_DECRYPT('TramCTs', `'MaTSXayDung = ${MaCBCS}'`, 0, 0),
    );
  }

  async LanhDaoPD_TramCTs(MaCBCS: number): Promise<TramCT[]> {
    return this.cbcsRepository.query(
      SP_GET_DATA_DECRYPT('TramCTs', `'MaLanhDaoPD = ${MaCBCS}'`, 0, 0),
    );
  }

  async TSXacMinh_BaoCaoKQXMQuanHes(
    MaCBCS: number,
  ): Promise<BaoCaoKQXMQuanHe[]> {
    return this.cbcsRepository.query(
      SP_GET_DATA_DECRYPT(
        'BaoCaoKQXMQuanHes',
        `'MaTSXacMinh = ${MaCBCS}'`,
        0,
        0,
      ),
    );
  }

  async LanhDaoPD_BaoCaoKQXMQuanHes(
    MaCBCS: number,
  ): Promise<BaoCaoKQXMQuanHe[]> {
    return this.cbcsRepository.query(
      SP_GET_DATA_DECRYPT(
        'BaoCaoKQXMQuanHes',
        `'MaLanhDaoPD = ${MaCBCS}'`,
        0,
        0,
      ),
    );
  }

  async BanChiHuy_BaoCaoKQXMQuanHes(
    MaCBCS: number,
  ): Promise<BaoCaoKQXMQuanHe[]> {
    return this.cbcsRepository.query(
      SP_GET_DATA_DECRYPT(
        'BaoCaoKQXMQuanHes',
        `'MaBanChiHuy = ${MaCBCS}'`,
        0,
        0,
      ),
    );
  }
  async TSXacMinh_BaoCaoKQXMDiaChis(
    MaCBCS: number,
  ): Promise<BaoCaoKQXMDiaChi[]> {
    return this.cbcsRepository.query(
      SP_GET_DATA_DECRYPT(
        'BaoCaoKQXMDiaChis',
        `'MaTSXacMinh = ${MaCBCS}'`,
        0,
        0,
      ),
    );
  }

  async LanhDaoPD_BaoCaoKQXMDiaChis(
    MaCBCS: number,
  ): Promise<BaoCaoKQXMDiaChi[]> {
    return this.cbcsRepository.query(
      SP_GET_DATA_DECRYPT(
        'BaoCaoKQXMDiaChis',
        `'MaLanhDaoPD = ${MaCBCS}'`,
        0,
        0,
      ),
    );
  }

  async BanChiHuy_BaoCaoKQXMDiaChis(
    MaCBCS: number,
  ): Promise<BaoCaoKQXMDiaChi[]> {
    return this.cbcsRepository.query(
      SP_GET_DATA_DECRYPT(
        'BaoCaoKQXMDiaChis',
        `'MaBanChiHuy = ${MaCBCS}'`,
        0,
        0,
      ),
    );
  }

  async TSQuanLy_LLDBs(id: number): Promise<LLDB[]> {
    return this.cbcsRepository.query(
      SP_GET_DATA('LLDBs', `'MaTSQuanLy = ${id}'`, 'MaLLDB', 0, 0)
    );
  }
}
