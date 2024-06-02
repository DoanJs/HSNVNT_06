import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CAQHvaTD } from 'src/caQHvaTD/CAQHvaTD.model';
import { CATTPvaTD } from 'src/caTTPvaTD/CATTPvaTD.model';
import { CBCS } from 'src/cbcss/CBCS.model';
import { DataLoaderService } from 'src/dataloader/Dataloader.service';
import { DeNghiTSNT } from 'src/denghiTSNTs/DeNghiTSNT.model';
import { Doi } from 'src/dois/Doi.model';
import { DoiTuong } from 'src/doituongs/DoiTuong.model';
import { TinhTP } from 'src/tinhTPs/TinhTP.model';
import {
  SP_CHANGE_QUYETDINHTSNT,
  SP_GET_DATA,
  SP_GET_DATA_DECRYPT,
} from 'src/utils/mssql/query';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { Repository } from 'typeorm';
import { QuyetDinhTSNT } from './QuyetDinhTSNT.model';
import { QuyetDinhTSNTInput } from './type/QuyetDinhTSNT.input';
import { KeHoachTSNT } from 'src/kehoachTSNTs/KeHoachTSNT.model';
import { KetQuaTSNT } from 'src/ketquaTSNTs/KetQuaTSNT.model';

@Injectable()
export class QuyetDinhTSNTsService {
  constructor(
    @InjectRepository(QuyetDinhTSNT)
    private quyetdinhTSNTRepository: Repository<QuyetDinhTSNT>,
    private dataloaderService: DataLoaderService,
  ) { }
  public readonly quyetdinhTSNT_DataInput = (
    Type: string,
    MaQD: number | null,
    quyetdinhTSNTInput: QuyetDinhTSNTInput,
  ) => {
    return {
      Type,
      MaQD,
      QuyetDinhTSNTInput: {
        So: quyetdinhTSNTInput.So ? `N'${quyetdinhTSNTInput.So}'` : null,
        Ngay: quyetdinhTSNTInput.Ngay ? quyetdinhTSNTInput.Ngay : null,
        BiDanh: quyetdinhTSNTInput.BiDanh
          ? `N'${quyetdinhTSNTInput.BiDanh}'`
          : null,
        ThoiGianBD: quyetdinhTSNTInput.ThoiGianBD
          ? quyetdinhTSNTInput.ThoiGianBD
          : null,
        ThoiGianKT: quyetdinhTSNTInput.ThoiGianKT
          ? quyetdinhTSNTInput.ThoiGianKT
          : null,
        NhiemVuCT: `N'${quyetdinhTSNTInput.NhiemVuCT}'`, // crypto
        MaDoiTuong: quyetdinhTSNTInput.MaDoiTuong
          ? quyetdinhTSNTInput.MaDoiTuong
          : null,
        MaDN: quyetdinhTSNTInput.MaDN ? quyetdinhTSNTInput.MaDN : null,
        MaLanhDaoPD: quyetdinhTSNTInput.MaLanhDaoPD
          ? quyetdinhTSNTInput.MaLanhDaoPD
          : null,
        MaDoi: quyetdinhTSNTInput.MaDoi ? quyetdinhTSNTInput.MaDoi : null,
        MaCATTPvaTD: quyetdinhTSNTInput.MaCATTPvaTD
          ? quyetdinhTSNTInput.MaCATTPvaTD
          : null,
        MaCAQHvaTD: quyetdinhTSNTInput.MaCAQHvaTD
          ? quyetdinhTSNTInput.MaCAQHvaTD
          : null,
      },
    };
  };

  quyetdinhTSNTs(utilsParams: UtilsParamsInput): Promise<QuyetDinhTSNT[]> {
    return this.quyetdinhTSNTRepository.query(
      SP_GET_DATA_DECRYPT(
        'QuyetDinhTSNTs',
        "'MaQD != 0'",
        utilsParams.skip && utilsParams.skip > 0 ? utilsParams.skip : 0,
        utilsParams.take && utilsParams.take > 0 ? utilsParams.take : 0,
      ),
    );
  }

  async quyetdinhTSNT(id: number): Promise<QuyetDinhTSNT> {
    const result = await this.quyetdinhTSNTRepository.query(
      SP_GET_DATA_DECRYPT('QuyetDinhTSNTs', `'MaQD = ${id}'`, 0, 1),
    );
    return result[0];
  }

  async createQuyetDinhTSNT(
    quyetdinhTSNTInput: QuyetDinhTSNTInput,
  ): Promise<QuyetDinhTSNT> {
    const result = await this.quyetdinhTSNTRepository.query(
      SP_CHANGE_QUYETDINHTSNT(
        this.quyetdinhTSNT_DataInput('CREATE', null, quyetdinhTSNTInput),
      ),
    );
    return result[0];
  }

  async editQuyetDinhTSNT(
    quyetdinhTSNTInput: QuyetDinhTSNTInput,
    id: number,
  ): Promise<QuyetDinhTSNT> {
    const result = await this.quyetdinhTSNTRepository.query(
      SP_CHANGE_QUYETDINHTSNT(
        this.quyetdinhTSNT_DataInput('EDIT', id, quyetdinhTSNTInput),
      ),
    );
    return result[0];
  }

  async deleteQuyetDinhTSNT(
    quyetdinhTSNTInput: QuyetDinhTSNTInput,
    id: number,
  ): Promise<QuyetDinhTSNT> {
    const cbcss = await this.quyetdinhTSNTRepository.query(
      SP_CHANGE_QUYETDINHTSNT(
        this.quyetdinhTSNT_DataInput('DELETE', id, quyetdinhTSNTInput),
      ),
    );
    return cbcss[0];
  }

  // ResolveField
  async DoiTuong(quyetdinhTSNT: any): Promise<DoiTuong> {
    return this.dataloaderService.loaderDoiTuong.load(quyetdinhTSNT.MaDoiTuong);
  }

  async DeNghiTSNT(quyetdinhTSNT: any): Promise<DeNghiTSNT> {
    const result = await this.quyetdinhTSNTRepository.query(
      SP_GET_DATA_DECRYPT(
        'DeNghiTSNTs',
        `'MaDN = ${quyetdinhTSNT.MaDN}'`,
        0,
        1,
      ),
    );
    return result[0];
  }

  async LanhDaoPD(quyetdinhTSNT: any): Promise<CBCS> {
    return this.dataloaderService.loaderCBCS.load(quyetdinhTSNT.MaLanhDaoPD);
  }

  async Doi(quyetdinhTSNT: any): Promise<Doi> {
    return this.dataloaderService.loaderDoi.load(quyetdinhTSNT.MaDoi);
  }

  async KeHoachTSNT(MaQD: number): Promise<KeHoachTSNT> {
    const result = await this.quyetdinhTSNTRepository.query(
      SP_GET_DATA_DECRYPT('KeHoachTSNTs', `'MaQD = ${MaQD}'`, 0, 1),
    );
    return result[0];
  }

  async CATTPvaTD(quyetdinhTSNT: any): Promise<CATTPvaTD> {
    return this.dataloaderService.loaderCATTPvaTD.load(quyetdinhTSNT.MaCATTPvaTD);
  }

  async CAQHvaTD(quyetdinhTSNT: any): Promise<CAQHvaTD> {
    return this.dataloaderService.loaderCAQHvaTD.load(quyetdinhTSNT.MaCAQHvaTD);
  }

  async PhamViTSs(MaQD: number): Promise<TinhTP[]> {
    const result = (await this.quyetdinhTSNTRepository.query(
      SP_GET_DATA('QuyetDinhTSNTs_TinhTPs', `'MaQD = ${MaQD}'`, 'MaTinhTP', 0, 0)
    )) as [{ MaTinhTP: number }];
    const resultLoader = result.map((obj) =>
      this.dataloaderService.loaderTinhTP.load(obj.MaTinhTP),
    );
    return await Promise.all(resultLoader);
  }

  async KetQuaTSNT (MaQD: number):Promise<KetQuaTSNT> {
    const result = await this.quyetdinhTSNTRepository.query(
      SP_GET_DATA('KetQuaTSNTs', `'MaQD = ${MaQD}'`, 'MaKQ', 0, 0)
    );
    return result[0];
  }
}
