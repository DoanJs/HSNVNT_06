import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataLoaderService } from 'src/dataloader/Dataloader.service';
import { DeNghiTSNT } from 'src/denghiTSNTs/DeNghiTSNT.model';
import { KetQuaTSNT } from 'src/ketquaTSNTs/KetQuaTSNT.model';
import { QuyetDinhTSNT } from 'src/quyetdinhTSNTs/QuyetDinhTSNT.model';
import { SP_CHANGE_DATA, SP_GET_DATA } from 'src/utils/mssql/query';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { Repository } from 'typeorm';
import { TinhTP } from './TinhTP.model';
import { TinhTPInput } from './type/TinhTP.Input';

@Injectable()
export class TinhTPsService {
  constructor(
    @InjectRepository(TinhTP) private tinhTPRepository: Repository<TinhTP>,
    private dataloaderService: DataLoaderService,
  ) {}

  public readonly tinhTP_DataInput = (tinhTPInput: TinhTPInput) => {
    return {
      TinhTP: tinhTPInput.TinhTP ? `N''${tinhTPInput.TinhTP}''` : null,
      Cap: tinhTPInput.Cap ? `N''${tinhTPInput.Cap}''` : null,
    };
  };

  tinhTPs(utilsParams: UtilsParamsInput): Promise<TinhTP[]> {
    return this.tinhTPRepository.query(
      SP_GET_DATA(
        'TinhTPs',
        "'MaTinhTP != 0'",
        'MaTinhTP',
        utilsParams.skip ? utilsParams.skip : 0,
        utilsParams.take ? utilsParams.take : 0,
      ),
    );
  }

  async tinhTP(id: number): Promise<TinhTP> {
    const result = await this.tinhTPRepository.query(
      SP_GET_DATA('TinhTPs', `'MaTinhTP = ${id}'`, 'MaTinhTP', 0, 1),
    );
    return result[0];
  }

  async createTinhTP(tinhTPInput: TinhTPInput): Promise<TinhTP> {
    const result = await this.tinhTPRepository.query(
      SP_CHANGE_DATA(
        "'CREATE'",
        'TinhTPs',
        "'TinhTP, Cap'",
        `N' ${this.tinhTP_DataInput(tinhTPInput).TinhTP},
            ${this.tinhTP_DataInput(tinhTPInput).Cap}
        '`,
        "'MaTinhTP = SCOPE_IDENTITY()'",
      ),
    );
    return result[0];
  }

  async editTinhTP(tinhTPInput: TinhTPInput, id: number): Promise<TinhTP> {
    const result = await this.tinhTPRepository.query(
      SP_CHANGE_DATA(
        "'EDIT'",
        'TinhTPs',
        null,
        null,
        null,
        `N' TinhTP = ${this.tinhTP_DataInput(tinhTPInput).TinhTP},
            Cap = ${this.tinhTP_DataInput(tinhTPInput).Cap}
        '`,
        `'MaTinhTP = ${id}'`,
      ),
    );
    return result[0];
  }

  async deleteTinhTP(id: number): Promise<TinhTP> {
    const result = await this.tinhTPRepository.query(
      SP_CHANGE_DATA(
        "'DELETE'",
        'TinhTPs',
        null,
        null,
        null,
        null,
        `'MaTinhTP = ${id}'`,
      ),
    );
    return result[0];
  }

  // ResolveField

  async DeNghiTSNTs(MaTinhTP: number): Promise<DeNghiTSNT[]> {
    const result = (await this.tinhTPRepository.query(
      SP_GET_DATA('DeNghiTSNTs_TinhTPs', `'MaTinhTP = ${MaTinhTP}'`, 'MaDN', 0, 0)
    )) as [{ MaDN: number }];
    const resultLoader = result.map((obj) =>
      this.dataloaderService.loaderDeNghiTSNT.load(obj.MaDN),
    );
    return await Promise.all(resultLoader);
  }

  async QuyetDinhTSNTs(MaTinhTP: number): Promise<QuyetDinhTSNT[]> {
    const result = (await this.tinhTPRepository.query(
      SP_GET_DATA('QuyetDinhTSNTs_TinhTPs', `'MaTinhTP = ${MaTinhTP}'`, 'MaQD', 0, 0)
    )) as [{ MaQD: number }];
    const resultLoader = result.map((obj) =>
      this.dataloaderService.loaderQuyetDinhTSNT.load(obj.MaQD),
    );
    return await Promise.all(resultLoader);
  }

  async KetQuaTSNTs(MaTinhTP: number): Promise<KetQuaTSNT[]> {
    const result = (await this.tinhTPRepository.query(
      SP_GET_DATA('KetQuaTSNTs_TinhTPs', `'MaTinhTP = ${MaTinhTP}'`, 'MaKQTSNT', 0, 0)
    )) as [{ MaKQTSNT: number }];
    const resultLoader = result.map((obj) =>
      this.dataloaderService.loaderKetQuaTSNT.load(obj.MaKQTSNT),
    );
    return await Promise.all(resultLoader);
  }
}
