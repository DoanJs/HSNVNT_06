import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaoCaoKQGH } from 'src/baocaoKQGHs/BaoCaoKQGH.model';
import { BaoCaoKQXMDiaChi } from 'src/baocaoKQXMDiaChis/BaoCaoKQXMDiaChi.model';
import { BaoCaoKQXMQuanHe } from 'src/baocaoKQXMQuanHes/BaoCaoKQXMQuanHe.model';
import { BaoCaoPHQH } from 'src/baocaoPHQHs/BaoCaoPHQH.model';
import { CAQHvaTD } from 'src/caQHvaTD/CAQHvaTD.model';
import { CBCS } from 'src/cbcss/CBCS.model';
import { DataLoaderService } from 'src/dataloader/Dataloader.service';
import { KeHoachTSNT } from 'src/kehoachTSNTs/KeHoachTSNT.model';
import { QuyetDinhTSNT } from 'src/quyetdinhTSNTs/QuyetDinhTSNT.model';
import { TramCT } from 'src/tramCTs/TramCT.model';
import { SP_CHANGE_DATA, SP_GET_DATA, SP_GET_DATA_DECRYPT } from 'src/utils/mssql/query';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { Repository } from 'typeorm';
import { Doi } from './Doi.model';
import { DoiInput } from './type/Doi.Input';

@Injectable()
export class DoisService {
  constructor(
    @InjectRepository(Doi) private doiRepository: Repository<Doi>,
    private readonly dataloaderService: DataLoaderService,
  ) {}

  public readonly doi_DataInput = (doiInput: DoiInput) => {
    return {
      TenDoi: doiInput.TenDoi ? `N''${doiInput.TenDoi}''` : null,
      MaCAQHvaTD: doiInput.MaCAQHvaTD ? doiInput.MaCAQHvaTD : null,
    };
  };

  dois(utilsParams: UtilsParamsInput): Promise<Doi[]> {
    return this.doiRepository.query(
      SP_GET_DATA(
        'Dois',
        `'MaDoi != 0'`,
        'MaDoi',
        utilsParams.skip ? utilsParams.skip : 0,
        utilsParams.take ? utilsParams.take : 0,
      ),
    );
  }

  async doi(id: number): Promise<Doi> {
    const result = await this.doiRepository.query(
      SP_GET_DATA('Dois', `'MaDoi = ${id}'`, 'MaDoi', 0, 1),
    );
    return result[0];
  }

  async createDoi(doiInput: DoiInput): Promise<Doi> {
    const result = await this.doiRepository.query(
      SP_CHANGE_DATA(
        "'CREATE'",
        'Dois',
        `'TenDoi, MaCAQHvaTD'`,
        `N' ${this.doi_DataInput(doiInput).TenDoi},
            ${this.doi_DataInput(doiInput).MaCAQHvaTD}
        '`,
        "'MaDoi = SCOPE_IDENTITY()'",
      ),
    );
    return result[0];
  }

  async editDoi(doiInput: DoiInput, id: number): Promise<Doi> {
    const result = await this.doiRepository.query(
      SP_CHANGE_DATA(
        "'EDIT'",
        'Dois',
        null,
        null,
        null,
        `N' TenDoi = ${this.doi_DataInput(doiInput).TenDoi},
            MaCAQHvaTD = ${this.doi_DataInput(doiInput).MaCAQHvaTD}
        '`,
        `'MaDoi = ${id}'`,
      ),
    );
    return result[0];
  }

  async deleteDoi(id: number): Promise<Doi> {
    const result = await this.doiRepository.query(
      SP_CHANGE_DATA(
        "'DELETE'",
        'Dois',
        null,
        null,
        null,
        null,
        `'MaDoi = ${id}'`,
      ),
    );
    return result[0];
  }

  // ResolveField

  async CAQHvaTD(doi: any): Promise<CAQHvaTD> {
    return this.dataloaderService.loaderCAQHvaTD.load(doi.MaCAQHvaTD);
  }

  QuyetDinhTSNTs(MaDoi: number): Promise<QuyetDinhTSNT[]> {
    return this.doiRepository.query(
      SP_GET_DATA_DECRYPT('QuyetDinhTSNTs', `'MaDoi = ${MaDoi}'`, 0, 0),
    );
  }

  CBCSs(MaDoi: number): Promise<CBCS[]> {
    return this.doiRepository.query(
      SP_GET_DATA_DECRYPT('CBCSs', `'MaDoi = ${MaDoi}'`, 0, 0),
    );
  }

  KeHoachTSNTs(MaDoi: number): Promise<KeHoachTSNT[]> {
    return this.doiRepository.query(
      SP_GET_DATA_DECRYPT('KeHoachTSNTs', `'MaDoi = ${MaDoi}'`, 0, 0),
    );
  }

  TramCTs(MaDoi: number): Promise<TramCT[]> {
    return this.doiRepository.query(
      SP_GET_DATA_DECRYPT('TramCTs', `'MaDoi = ${MaDoi}'`, 0, 0),
    );
  }

  BaoCaoPHQHs(MaDoi: number): Promise<BaoCaoPHQH[]> {
    return this.doiRepository.query(
      SP_GET_DATA_DECRYPT('BaoCaoPHQHs', `'MaDoi = ${MaDoi}'`, 0, 0),
    );
  }

  BaoCaoKQGHs(MaDoi: number): Promise<BaoCaoKQGH[]> {
    return this.doiRepository.query(
      SP_GET_DATA_DECRYPT('BaoCaoKQGHs', `'MaDoi = ${MaDoi}'`, 0, 0),
    );
  }
  BaoCaoKQXMQuanHes(MaDoi: number): Promise<BaoCaoKQXMQuanHe[]> {
    return this.doiRepository.query(
      SP_GET_DATA_DECRYPT('BaoCaoKQXMQuanHes', `'MaDoi = ${MaDoi}'`, 0, 0),
    );
  }
  BaoCaoKQXMDiaChis(MaDoi: number): Promise<BaoCaoKQXMDiaChi[]> {
    return this.doiRepository.query(
      SP_GET_DATA_DECRYPT('BaoCaoKQXMDiaChis', `'MaDoi = ${MaDoi}'`, 0, 0),
    );
  }
}
