import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaoCaoKQXMDiaChi } from './BaoCaoKQXMDiaChi.model';
import { BaoCaoKQXMDiaChiInput } from './type/BaoCaoKQXMDiaChi.input';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import {
  SP_CHANGE_BAOCAOKQXMDIACHI,
  SP_GET_DATA_DECRYPT,
} from 'src/utils/mssql/query';
import { DiaChiNV } from 'src/diachiNVs/DiaChiNV.model';
import { CAQHvaTD } from 'src/caQHvaTD/CAQHvaTD.model';
import { DataLoaderService } from 'src/dataloader/Dataloader.service';
import { Doi } from 'src/dois/Doi.model';
import { CBCS } from 'src/cbcss/CBCS.model';

@Injectable()
export default class BaoCaoKQXMDiaChisService {
  constructor(
    @InjectRepository(BaoCaoKQXMDiaChi)
    private baocaoKQXMDiaChiRepository: Repository<BaoCaoKQXMDiaChi>,
    private dataloaderService: DataLoaderService
  ) { }
  public readonly baocaoKQXMDiaChi_DataInput = (
    Type: string,
    MaBCKQXMDC: number | null,
    baocaoKQXMDiaChiInput: BaoCaoKQXMDiaChiInput,
  ) => {
    return {
      Type,
      MaBCKQXMDC,
      BaoCaoKQXMDiaChiInput: {
        Ngay: baocaoKQXMDiaChiInput.Ngay
          ? `N'${baocaoKQXMDiaChiInput.Ngay}'`
          : null,
        HoTenChuHo: `N'${baocaoKQXMDiaChiInput.HoTenChuHo}'`, //crypto
        TenKhac: baocaoKQXMDiaChiInput.TenKhac
          ? `N'${baocaoKQXMDiaChiInput.TenKhac}'`
          : null,
        GioiTinh: baocaoKQXMDiaChiInput.GioiTinh
          ? baocaoKQXMDiaChiInput.GioiTinh
          : null,
        NamSinh: baocaoKQXMDiaChiInput.NamSinh
          ? baocaoKQXMDiaChiInput.NamSinh
          : null,
        QueQuan: baocaoKQXMDiaChiInput.QueQuan
          ? `N'${baocaoKQXMDiaChiInput.QueQuan}'`
          : null,
        HKTT: baocaoKQXMDiaChiInput.HKTT
          ? `N'${baocaoKQXMDiaChiInput.HKTT}'`
          : null,
        NoiO: `N'${baocaoKQXMDiaChiInput.NoiO}'`, //crypto
        NgheNghiep: baocaoKQXMDiaChiInput.NgheNghiep
          ? `N'${baocaoKQXMDiaChiInput.NgheNghiep}'`
          : null,
        NoiLamViec: baocaoKQXMDiaChiInput.NoiLamViec
          ? `N'${baocaoKQXMDiaChiInput.NoiLamViec}'`
          : null,
        QuanHeGiaDinh: `N'${baocaoKQXMDiaChiInput.QuanHeGiaDinh}'`, //crypto
        HoKhacCungDC: `N'${baocaoKQXMDiaChiInput.HoKhacCungDC}'`, //crypto
        BienPhapXM: baocaoKQXMDiaChiInput.BienPhapXM
          ? `N'${baocaoKQXMDiaChiInput.BienPhapXM}'`
          : null,
        MaCAQHvaTD: baocaoKQXMDiaChiInput.MaCAQHvaTD
          ? baocaoKQXMDiaChiInput.MaCAQHvaTD
          : null,
        MaDoi: baocaoKQXMDiaChiInput.MaDoi ? baocaoKQXMDiaChiInput.MaDoi : null,
        MaDoiTuong: baocaoKQXMDiaChiInput.MaDoiTuong ? baocaoKQXMDiaChiInput.MaDoiTuong : null,
        MaQD: baocaoKQXMDiaChiInput.MaQD ? baocaoKQXMDiaChiInput.MaQD : null,
        MaDiaChiNV: baocaoKQXMDiaChiInput.MaDiaChiNV
          ? baocaoKQXMDiaChiInput.MaDiaChiNV
          : null,
        MaTSXacMinh: baocaoKQXMDiaChiInput.MaTSXacMinh
          ? baocaoKQXMDiaChiInput.MaTSXacMinh
          : null,
        MaLanhDaoPD: baocaoKQXMDiaChiInput.MaLanhDaoPD
          ? baocaoKQXMDiaChiInput.MaLanhDaoPD
          : null,
        MaBCHPhuTrach: baocaoKQXMDiaChiInput.MaBCHPhuTrach
          ? baocaoKQXMDiaChiInput.MaBCHPhuTrach
          : null,
      },
    };
  };

  baocaoKQXMDiaChis(
    utilsParams: UtilsParamsInput,
  ): Promise<BaoCaoKQXMDiaChi[]> {
    return this.baocaoKQXMDiaChiRepository.query(
      SP_GET_DATA_DECRYPT(
        'BaoCaoKQXMDiaChis',
        "'MaBCKQXMDC != 0'",
        utilsParams.skip && utilsParams.skip > 0 ? utilsParams.skip : 0,
        utilsParams.take && utilsParams.take > 0 ? utilsParams.take : 0,
      ),
    );
  }

  async baocaoKQXMDiaChi(id: number): Promise<BaoCaoKQXMDiaChi> {
    const result = await this.baocaoKQXMDiaChiRepository.query(
      SP_GET_DATA_DECRYPT('BaoCaoKQXMDiaChis', `"MaBCKQXMDC = ${id}"`, 0, 1),
    );
    return result[0];
  }

  async createBaoCaoKQXMDiaChi(
    baocaoKQXMDiaChiInput: BaoCaoKQXMDiaChiInput,
  ): Promise<BaoCaoKQXMDiaChi> {
    const result = await this.baocaoKQXMDiaChiRepository.query(
      SP_CHANGE_BAOCAOKQXMDIACHI(
        this.baocaoKQXMDiaChi_DataInput('CREATE', null, baocaoKQXMDiaChiInput),
      ),
    );
    return result[0];
  }

  async editBaoCaoKQXMDiaChi(
    baocaoKQXMDiaChiInput: BaoCaoKQXMDiaChiInput,
    id: number,
  ): Promise<BaoCaoKQXMDiaChi> {
    const result = await this.baocaoKQXMDiaChiRepository.query(
      SP_CHANGE_BAOCAOKQXMDIACHI(
        this.baocaoKQXMDiaChi_DataInput('EDIT', id, baocaoKQXMDiaChiInput),
      ),
    );
    return result[0];
  }

  async deleteBaoCaoKQXMDiaChi(
    baocaoKQXMDiaChiInput: BaoCaoKQXMDiaChiInput,
    id: number,
  ): Promise<BaoCaoKQXMDiaChi> {
    const result = await this.baocaoKQXMDiaChiRepository.query(
      SP_CHANGE_BAOCAOKQXMDIACHI(
        this.baocaoKQXMDiaChi_DataInput('DELETE', id, baocaoKQXMDiaChiInput),
      ),
    );
    return result[0];
  }

  // ResolveField ---------------------------
  async CAQHvaTD(baocaoKQXMDiaChi: any): Promise<CAQHvaTD> {
    return this.dataloaderService.loaderCAQHvaTD.load(baocaoKQXMDiaChi.MaDonVi)
  }

  async Doi(baocaoKQXMDiaChi: any): Promise<Doi> {
    return this.dataloaderService.loaderDoi.load(baocaoKQXMDiaChi.MaDoi)
  }

  //DoiTuong
  //QuyetDinhTSNT

  async DiaChiNV(baocaoKQXMDiaChi: any): Promise<DiaChiNV> {
    const result = await this.baocaoKQXMDiaChiRepository.query(
      SP_GET_DATA_DECRYPT(
        'DiaChiNVs',
        `'MaDC = ${baocaoKQXMDiaChi.MaDiaChiNV}'`,
        0,
        1,
      ),
    );
    return result[0];
  }
 
  async TSXacMinh(baocaoKQXMDiaChi: any): Promise<CBCS> {
    return this.dataloaderService.loaderCBCS.load(baocaoKQXMDiaChi.MaTSXacMinh)
  }

  async LanhDaoPD(baocaoKQXMDiaChi: any): Promise<CBCS> {
    return this.dataloaderService.loaderCBCS.load(baocaoKQXMDiaChi.MaLanhDaoPD)
  }

  async BanChiHuy(baocaoKQXMDiaChi: any): Promise<CBCS> {
    return this.dataloaderService.loaderCBCS.load(baocaoKQXMDiaChi.MaBanChiHuy)
  }
}
