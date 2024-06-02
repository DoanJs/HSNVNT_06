import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CAQHvaTD } from 'src/caQHvaTD/CAQHvaTD.model';
import { CBCS } from 'src/cbcss/CBCS.model';
import { DataLoaderService } from 'src/dataloader/Dataloader.service';
import { DeNghiTSNT } from 'src/denghiTSNTs/DeNghiTSNT.model';
import { Doi } from 'src/dois/Doi.model';
import { DoiTuong } from 'src/doituongs/DoiTuong.model';
import { KetQuaTSNT } from 'src/ketquaTSNTs/KetQuaTSNT.model';
import { LLDB } from 'src/lldbs/LLDB.model';
import { LucLuongThamGiaKH } from 'src/lltgKeHoachs/LucLuongThamGiaKH.model';
import { QuyetDinhTSNT } from 'src/quyetdinhTSNTs/QuyetDinhTSNT.model';
import { TramCT } from 'src/tramCTs/TramCT.model';
import {
  SP_CHANGE_KEHOACHTSNT,
  SP_GET_DATA,
  SP_GET_DATA_DECRYPT,
} from 'src/utils/mssql/query';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { Repository } from 'typeorm';
import { KeHoachTSNT } from './KeHoachTSNT.model';
import { KeHoachTSNTInput } from './type/KeHoachTSNT.input';

@Injectable()
export class KeHoachTSNTsService {
  constructor(
    @InjectRepository(KeHoachTSNT)
    private kehoachTSNTRepository: Repository<KeHoachTSNT>,
    private readonly dataloaderService: DataLoaderService,
  ) { }
  public readonly kehoachTSNT_DataInput = (
    Type: string,
    MaKH: number | null,
    kehoachTSNTInput: KeHoachTSNTInput,
  ) => {
    return {
      Type,
      MaKH,
      KeHoachTSNTInput: {
        So: kehoachTSNTInput.So ? `N'${kehoachTSNTInput.So}'` : null,
        Ngay: kehoachTSNTInput.Ngay ? kehoachTSNTInput.Ngay : null,
        VanDeChuY: `N'${kehoachTSNTInput.VanDeChuY}'`, // crypto
        NoiDung: `N'${kehoachTSNTInput.NoiDung}'`, // crypto
        MaDN: kehoachTSNTInput.MaDN ? kehoachTSNTInput.MaDN : null,
        MaQD: kehoachTSNTInput.MaQD ? kehoachTSNTInput.MaQD : null,
        MaCAQHvaTD: kehoachTSNTInput.MaCAQHvaTD ? kehoachTSNTInput.MaCAQHvaTD : null,
        MaDoi: kehoachTSNTInput.MaDoi ? kehoachTSNTInput.MaDoi : null,
        MaDoiTuong: kehoachTSNTInput.MaDoiTuong
          ? kehoachTSNTInput.MaDoiTuong
          : null,
        MaTramCT: kehoachTSNTInput.MaTramCT ? kehoachTSNTInput.MaTramCT : null,
        MaLanhDaoPD: kehoachTSNTInput.MaLanhDaoPD
          ? kehoachTSNTInput.MaLanhDaoPD
          : null,
        MaBCHPhuTrach: kehoachTSNTInput.MaBCHPhuTrach
          ? kehoachTSNTInput.MaBCHPhuTrach
          : null,
      },
    };
  };

  kehoachTSNTs(utilsParams: UtilsParamsInput): Promise<KeHoachTSNT[]> {
    return this.kehoachTSNTRepository.query(
      SP_GET_DATA_DECRYPT(
        'KeHoachTSNTs',
        "'MaKH != 0'",
        utilsParams.skip ? utilsParams.skip : 0,
        utilsParams.take ? utilsParams.take : 0,
      ),
    );
  }

  async kehoachTSNT(id: number): Promise<KeHoachTSNT> {
    const result = await this.kehoachTSNTRepository.query(
      SP_GET_DATA_DECRYPT('KeHoachTSNTs', `'MaKH = ${id}'`, 0, 1),
    );
    return result[0];
  }

  async createKeHoachTSNT(
    kehoachTSNTInput: KeHoachTSNTInput,
  ): Promise<KeHoachTSNT> {
    const result = await this.kehoachTSNTRepository.query(
      SP_CHANGE_KEHOACHTSNT(
        this.kehoachTSNT_DataInput('CREATE', null, kehoachTSNTInput),
      ),
    );
    return result[0];
  }

  async editKeHoachTSNT(
    kehoachTSNTInput: KeHoachTSNTInput,
    id: number,
  ): Promise<KeHoachTSNT> {
    const cbcss = await this.kehoachTSNTRepository.query(
      SP_CHANGE_KEHOACHTSNT(
        this.kehoachTSNT_DataInput('EDIT', id, kehoachTSNTInput),
      ),
    );
    return cbcss[0];
  }

  async deleteKeHoachTSNT(
    kehoachTSNTInput: KeHoachTSNTInput,
    id: number,
  ): Promise<KeHoachTSNT> {
    const cbcss = await this.kehoachTSNTRepository.query(
      SP_CHANGE_KEHOACHTSNT(
        this.kehoachTSNT_DataInput('DELETE', id, kehoachTSNTInput),
      ),
    );
    return cbcss[0];
  }

  // ResolveField

  async KetQuaTSNT(MaKH: number): Promise<KetQuaTSNT> {
    const result = await this.kehoachTSNTRepository.query(
      SP_GET_DATA('KetQuaTSNTs', `'MaKH = ${MaKH}'`, 'MaKQ', 0, 0)
    );
    return result[0];
  }

  async TramCT(kehoachTSNT: any): Promise<TramCT> {
    return this.dataloaderService.loaderTramCT.load(kehoachTSNT.MaTramCT);
  }

  async LLDBs(MaKH: number): Promise<LLDB[]> {
    const result = (await this.kehoachTSNTRepository.query(
      SP_GET_DATA('KeHoachTSNTs_LLDBs', `'MaKH = ${MaKH}'`, 'MaLLBM', 0, 0)
    )) as [{ MaLLDB: number }];
    const resultLoader = result.map((obj) =>
      this.dataloaderService.loaderLLDB.load(obj.MaLLDB),
    );
    return await Promise.all(resultLoader);
  }

  async LanhDaoPD(kehoachTSNT: any): Promise<CBCS> {
    return this.dataloaderService.loaderCBCS.load(kehoachTSNT.MaLanhDaoPD);
  }

  async BCHPhuTrach(kehoachTSNT: any): Promise<CBCS> {
    return this.dataloaderService.loaderCBCS.load(kehoachTSNT.MaBCHPhuTrach);
  }

  async DoiTuong(kehoachTSNT: any): Promise<DoiTuong> {
    return this.dataloaderService.loaderDoiTuong.load(kehoachTSNT.MaDoiTuong);
  }

  async LLTGKeHoachs(MaKH: number): Promise<LucLuongThamGiaKH[]> {
    return this.kehoachTSNTRepository.query(
      SP_GET_DATA('LucLuongThamGiaKHs', `'MaKH = ${MaKH}'`, 'MaLLTGKH', 0, 0)
    );
  }

  async DeNghiTSNT(kehoachTSNT: any): Promise<DeNghiTSNT> {
    const result = await this.kehoachTSNTRepository.query(
      SP_GET_DATA_DECRYPT('DeNghiTSNTs', `'MaDN = ${kehoachTSNT.MaDN}'`, 0, 1),
    );
    return result[0];
  }

  async QuyetDinhTSNT(kehoachTSNT: any): Promise<QuyetDinhTSNT> {
    const result = await this.kehoachTSNTRepository.query(
      SP_GET_DATA_DECRYPT(
        'QuyetDinhTSNTs',
        `'MaQD = ${kehoachTSNT.MaQD}'`,
        0,
        1,
      ),
    );
    return result[0];
  }

  async DonVi(kehoachTSNT: any): Promise<CAQHvaTD> {
    return this.dataloaderService.loaderCAQHvaTD.load(kehoachTSNT.MaDonVi);
  }

  async Doi(kehoachTSNT: any): Promise<Doi> {
    return this.dataloaderService.loaderDoi.load(kehoachTSNT.MaDoi);
  }
}
