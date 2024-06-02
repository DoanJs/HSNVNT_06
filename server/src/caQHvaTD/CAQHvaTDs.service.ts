import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaoCaoKQGH } from 'src/baocaoKQGHs/BaoCaoKQGH.model';
import { BaoCaoKQXMDiaChi } from 'src/baocaoKQXMDiaChis/BaoCaoKQXMDiaChi.model';
import { BaoCaoKQXMQuanHe } from 'src/baocaoKQXMQuanHes/BaoCaoKQXMQuanHe.model';
import { BaoCaoPHQH } from 'src/baocaoPHQHs/BaoCaoPHQH.model';
import { CATTPvaTD } from 'src/caTTPvaTD/CATTPvaTD.model';
import { CBCS } from 'src/cbcss/CBCS.model';
import { DataLoaderService } from 'src/dataloader/Dataloader.service';
import { DeNghiTSNT } from 'src/denghiTSNTs/DeNghiTSNT.model';
import { Doi } from 'src/dois/Doi.model';
import { KeHoachTSNT } from 'src/kehoachTSNTs/KeHoachTSNT.model';
import { QuyetDinhTSNT } from 'src/quyetdinhTSNTs/QuyetDinhTSNT.model';
import { TramCT } from 'src/tramCTs/TramCT.model';
import {
  SP_CHANGE_DATA,
  SP_GET_DATA,
  SP_GET_DATA_DECRYPT,
} from 'src/utils/mssql/query';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { Repository } from 'typeorm';
import { CAQHvaTD } from './CAQHvaTD.model';
import { CAQHvaTDInput } from './type/CAQHvaTD.Input';

@Injectable()
export class CAQHvaTDsService {
  constructor(
    @InjectRepository(CAQHvaTD)
    private caQHvaTDRepository: Repository<CAQHvaTD>,
    private readonly dataloaderService: DataLoaderService,
  ) {}

  public readonly caQHvaTD_DataInput = (caQHvaTDInput: CAQHvaTDInput) => {
    return {
      CAQHvaTD: caQHvaTDInput.CAQHvaTD ? `N''${caQHvaTDInput.CAQHvaTD}''` : null,
      KyHieu: caQHvaTDInput.KyHieu ? `N''${caQHvaTDInput.KyHieu}''` : null,
      MaCATTPvaTD: caQHvaTDInput.MaCATTPvaTD ? caQHvaTDInput.MaCATTPvaTD : null,
    };
  };

  async caQHvaTDs(utilsParams: UtilsParamsInput): Promise<CAQHvaTD[]> {
    return await this.caQHvaTDRepository.query(
      SP_GET_DATA(
        'CAQHvaTDs',
        `'MaCAQHvaTD != 0'`,
        'MaCAQHvaTD',
        utilsParams.skip ? utilsParams.skip : 0,
        utilsParams.take ? utilsParams.take : 0,
      ),
    );
  }

  async caQHvaTD(id: number): Promise<CAQHvaTD> {
    const result = await this.caQHvaTDRepository.query(
      SP_GET_DATA('CAQHvaTDs', `'MaCAQHvaTD = ${id}'`, 'MaCAQHvaTD', 0, 1),
    );
    return result[0];
  }

  async createCAQHvaTD(caQHvaTDInput: CAQHvaTDInput): Promise<CAQHvaTD> {
    const result = await this.caQHvaTDRepository.query(
      SP_CHANGE_DATA(
        "'CREATE'",
        'CAQHvaTDs',
        '"CAQHvaTD, KyHieu, MaCATTPvaTD"',
        `N'${this.caQHvaTD_DataInput(caQHvaTDInput).CAQHvaTD},
        ${this.caQHvaTD_DataInput(caQHvaTDInput).KyHieu},
         ${this.caQHvaTD_DataInput(caQHvaTDInput).MaCATTPvaTD}
         '`,
        "'MaCAQHvaTD = SCOPE_IDENTITY()'",
      ),
    );
    return result[0];
  }

  async editCAQHvaTD(
    caQHvaTDInput: CAQHvaTDInput,
    id: number,
  ): Promise<CAQHvaTD> {
    const result = await this.caQHvaTDRepository.query(
      SP_CHANGE_DATA(
        "'EDIT'",
        'CAQHvaTDs',
        null,
        null,
        null,
        `N'CAQHvaTD = ${this.caQHvaTD_DataInput(caQHvaTDInput).CAQHvaTD},
          KyHieu = ${this.caQHvaTD_DataInput(caQHvaTDInput).KyHieu},
          MaCATTPvaTD = ${this.caQHvaTD_DataInput(caQHvaTDInput).MaCATTPvaTD}
        '`,
        `"MaCAQHvaTD = ${id}"`,
      ),
    );
    return result[0];
  }

  async deleteCAQHvaTD(id: number): Promise<CAQHvaTD> {
    const result = await this.caQHvaTDRepository.query(
      SP_CHANGE_DATA(
        "'DELETE'",
        'CAQHvaTDs',
        null,
        null,
        null,
        null,
        `"MaCAQHvaTD = ${id}"`,
      ),
    );
    return result[0];
  }

  // ResolveField

  async CATTPvaTD(caQHvaTD: any): Promise<CATTPvaTD> {
    return this.dataloaderService.loaderCATTPvaTD.load(caQHvaTD.MaCATTPvaTD);
  }

  async Dois(MaCAQHvaTD: number): Promise<Doi[]> {
    return await this.caQHvaTDRepository.query(
      `SELECT * FROM Dois WHERE MaCAQHvaTD = ${MaCAQHvaTD}`,
    );
  }

  DeNghiTSNTs(MaDV: number): Promise<DeNghiTSNT[]> {
    return this.caQHvaTDRepository.query(
      SP_GET_DATA_DECRYPT('DeNghiTSNTs', `'MaDV = ${MaDV}'`, 0, 0),
    );
  }

  CBCSs(MaDV: number): Promise<CBCS[]> {
    return this.caQHvaTDRepository.query(
      SP_GET_DATA_DECRYPT('CBCSs', `'MaDV = ${MaDV}'`, 0, 0),
    );
  }

  QuyetDinhTSNTs(MaDV: number): Promise<QuyetDinhTSNT[]> {
    return this.caQHvaTDRepository.query(
      SP_GET_DATA_DECRYPT('QuyetDinhTSNTs', `'MaCAQHvaTDQD = ${MaDV}'`, 0, 0),
    );
  }

  TramCTs(MaDV: number): Promise<TramCT[]> {
    return this.caQHvaTDRepository.query(
      SP_GET_DATA_DECRYPT('TramCTs', `'MaCAQHvaTD = ${MaDV}'`, 0, 0),
    );
  }

  BaoCaoPHQHs(MaDV: number): Promise<BaoCaoPHQH[]> {
    return this.caQHvaTDRepository.query(
      SP_GET_DATA_DECRYPT('BaoCaoPHQHs', `'MaCAQHvaTD = ${MaDV}'`, 0, 0),
    );
  }

  BaoCaoKQGHs(MaDV: number): Promise<BaoCaoKQGH[]> {
    return this.caQHvaTDRepository.query(
      SP_GET_DATA_DECRYPT('BaoCaoKQGHs', `'MaCAQHvaTD = ${MaDV}'`, 0, 0),
    );
  }

  BaoCaoKQXMQuanHes(MaDV: number): Promise<BaoCaoKQXMQuanHe[]> {
    return this.caQHvaTDRepository.query(
      SP_GET_DATA_DECRYPT('BaoCaoKQXMQuanHes', `'MaCAQHvaTD = ${MaDV}'`, 0, 0),
    );
  }

  BaoCaoKQXMDiaChis(MaDV: number): Promise<BaoCaoKQXMDiaChi[]> {
    return this.caQHvaTDRepository.query(
      SP_GET_DATA_DECRYPT('BaoCaoKQXMDiaChis', `'MaCAQHvaTD = ${MaDV}'`, 0, 0),
    );
  }

  KeHoachTSNTs(MaDV: number): Promise<KeHoachTSNT[]> {
    return this.caQHvaTDRepository.query(
      SP_GET_DATA_DECRYPT('KeHoachTSNTs', `'MaCAQHvaTD = ${MaDV}'`, 0, 0),
    );
  }
}
