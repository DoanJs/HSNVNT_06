import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CAQHvaTD } from 'src/caQHvaTD/CAQHvaTD.model';
import { CATTPvaTD } from 'src/caTTPvaTD/CATTPvaTD.model';
import { CBCS } from 'src/cbcss/CBCS.model';
import { DataLoaderService } from 'src/dataloader/Dataloader.service';
import { DoiTuong } from 'src/doituongs/DoiTuong.model';
import { HinhThucHD } from 'src/hinhthucHDs/HinhThucHD.model';
import { KeHoachTSNT } from 'src/kehoachTSNTs/KeHoachTSNT.model';
import { QuyetDinhTSNT } from 'src/quyetdinhTSNTs/QuyetDinhTSNT.model';
import { TinhTP } from 'src/tinhTPs/TinhTP.model';
import {
  SP_CHANGE_DENGHITSNT,
  SP_GET_DATA,
  SP_GET_DATA_DECRYPT,
} from 'src/utils/mssql/query';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { Repository } from 'typeorm';
import { DeNghiTSNT } from './DeNghiTSNT.model';
import { DeNghiTSNTInput } from './type/DeNghiTSNT.input';

@Injectable()
export class DeNghiTSNTsService {
  constructor(
    @InjectRepository(DeNghiTSNT)
    private denghiTSNTRepository: Repository<DeNghiTSNT>,
    private readonly dataloaderService: DataLoaderService,
  ) {}
  public readonly denghiTSNT_DataInput = (
    Type: string,
    MaDN: number | null,
    denghiTSNTInput: DeNghiTSNTInput,
  ) => {
    return {
      Type,
      MaDN,
      DeNghiTSNTInput: {
        So: denghiTSNTInput.So ? `N'${denghiTSNTInput.So}'` : null,
        Ngay: denghiTSNTInput.Ngay ? denghiTSNTInput.Ngay : null,
        ThoiGianBD: denghiTSNTInput.ThoiGianBD
          ? denghiTSNTInput.ThoiGianBD
          : null,
        ThoiGianKT: denghiTSNTInput.ThoiGianKT
          ? denghiTSNTInput.ThoiGianKT
          : null,
        NoiDungDN: `N'${denghiTSNTInput.NoiDungDN}'`, //crypto
        NoiDungTN: `N'${denghiTSNTInput.NoiDungTN}'`, //crypto
        MaCATTPvaTD: denghiTSNTInput.MaCATTPvaTD
          ? denghiTSNTInput.MaCATTPvaTD
          : null,
        MaCAQHvaTD: denghiTSNTInput.MaCAQHvaTD
          ? denghiTSNTInput.MaCAQHvaTD
          : null,
        MaDoiTuong: denghiTSNTInput.MaDoiTuong
          ? denghiTSNTInput.MaDoiTuong
          : null,
        MaHTHD: denghiTSNTInput.MaHTHD ? denghiTSNTInput.MaHTHD : null,
      },
    };
  };

  denghiTSNTs(utilsParams: UtilsParamsInput): Promise<DeNghiTSNT[]> {
    return this.denghiTSNTRepository.query(
      SP_GET_DATA_DECRYPT(
        'DeNghiTSNTs',
        "'MaDN != 0'",
        utilsParams.skip ? utilsParams.skip : 0,
        utilsParams.take ? utilsParams.take : 0,
      ),
    );
  }

  async denghiTSNT(id: number): Promise<DeNghiTSNT> {
    const result = await this.denghiTSNTRepository.query(
      SP_GET_DATA_DECRYPT('DeNghiTSNTs', `'MaDN = ${id}'`, 0, 1),
    );
    return result[0];
  }

  async createDeNghiTSNT(
    denghiTSNTInput: DeNghiTSNTInput,
  ): Promise<DeNghiTSNT> {
    const result = await this.denghiTSNTRepository.query(
      SP_CHANGE_DENGHITSNT(
        this.denghiTSNT_DataInput('CREATE', null, denghiTSNTInput),
      ),
    );
    return result[0];
  }

  async editDeNghiTSNT(
    id: number,
    denghiTSNTInput: DeNghiTSNTInput,
  ): Promise<DeNghiTSNT> {
    const result = await this.denghiTSNTRepository.query(
      SP_CHANGE_DENGHITSNT(
        this.denghiTSNT_DataInput('EDIT', id, denghiTSNTInput),
      ),
    );
    return result[0];
  }

  async deleteDeNghiTSNT(
    id: number,
    denghiTSNTInput: DeNghiTSNTInput,
  ): Promise<DeNghiTSNT> {
    const result = await this.denghiTSNTRepository.query(
      SP_CHANGE_DENGHITSNT(
        this.denghiTSNT_DataInput('DELETE', id, denghiTSNTInput),
      ),
    );
    return result[0];
  }

  // ResolveField

  async CATTPvaTD(denghiTSNT: any): Promise<CATTPvaTD> {
    return this.dataloaderService.loaderCATTPvaTD.load(denghiTSNT.MaCATTPvaTD);
  }

  async CAQHvaTD(denghiTSNT: any): Promise<CAQHvaTD> {
    return this.dataloaderService.loaderCAQHvaTD.load(denghiTSNT.MaCAQHvaTD);
  }

  async DiaBanDNs(MaDN: number): Promise<TinhTP[]> {
    const result = (await this.denghiTSNTRepository.query(
      SP_GET_DATA('DeNghiTSNTs_TinhTPs', `'MaDN = ${MaDN}'`, 'MaTinhTP', 0, 0)
    )) as [{ MaTinhTP: number }];
    const resultLoader = result.map((obj) =>
      this.dataloaderService.loaderTinhTP.load(obj.MaTinhTP),
    );
    return await Promise.all(resultLoader);
  }

  async DoiTuong(denghiTSNT: any): Promise<DoiTuong> {
    return this.dataloaderService.loaderDoiTuong.load(denghiTSNT.MaDoiTuong);
  }

  async LanhDaoDVDN(denghiTSNT: any): Promise<CBCS> {
    return this.dataloaderService.loaderCBCS.load(denghiTSNT.MaLanhDaoDVDN);
  }

  async CBPhuTrachDN(denghiTSNT: any): Promise<CBCS> {
    return this.dataloaderService.loaderCBCS.load(denghiTSNT.MaCBPhuTrachDN);
  }

  async LanhDaoCapTren(denghiTSNT: any): Promise<CBCS> {
    return this.dataloaderService.loaderCBCS.load(denghiTSNT.MaLanhDaoCapTren);
  }

  async DaiDienDonViTSNT(denghiTSNT: any): Promise<CBCS> {
    return this.dataloaderService.loaderCBCS.load(
      denghiTSNT.MaDaiDienDonViTSNT,
    );
  }

  async DonViDN(denghiTSNT: any): Promise<CAQHvaTD> {
    return this.dataloaderService.loaderCAQHvaTD.load(denghiTSNT.MaCAQHvaTD);
  }

  async QuyetDinhTSNT(MaDN: number): Promise<QuyetDinhTSNT> {
    const result = await this.denghiTSNTRepository.query(
      SP_GET_DATA_DECRYPT('QuyetDinhTSNTs', `'MaDN = ${MaDN}'`, 0, 1),
    );
    return result[0];
  }

  async HinhThucHD(denghiTSNT: any): Promise<HinhThucHD> {
    return this.dataloaderService.loaderHinhThucHD.load(denghiTSNT.MaHTHD);
  }

  async KeHoachTSNT(MaDN: number): Promise<KeHoachTSNT> {
    const result = await this.denghiTSNTRepository.query(
      SP_GET_DATA_DECRYPT('KeHoachTSNTs', `'MaDN = ${MaDN}'`, 0, 1),
    );
    return result[0];
  }
}
