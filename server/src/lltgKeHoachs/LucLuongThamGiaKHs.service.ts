import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LucLuongThamGiaKH } from './LucLuongThamGiaKH.model';
import { LucLuongThamGiaKHInput } from './type/LucLuongThamGiaKH.input';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { CBCS } from 'src/cbcss/CBCS.model';
import { DataLoaderService } from 'src/dataloader/Dataloader.service';
import { KeHoachTSNT } from 'src/kehoachTSNTs/KeHoachTSNT.model';
import { SP_CHANGE_DATA, SP_GET_DATA } from 'src/utils/mssql/query';

@Injectable()
export class LucLuongThamGiaKHsService {
  constructor(
    @InjectRepository(LucLuongThamGiaKH)
    private lucluongthamgiaKHRepository: Repository<LucLuongThamGiaKH>,
    private dataloaderService: DataLoaderService,
  ) {}
  public readonly lucluongThamGiaKH_DataInput = (
    lucluongThamGiaKHInput: LucLuongThamGiaKHInput,
  ) => {
    return {
      ViTri: lucluongThamGiaKHInput.ViTri ? `N''${lucluongThamGiaKHInput.ViTri}''` : null,
      MaKH: lucluongThamGiaKHInput.MaKH
        ? lucluongThamGiaKHInput.MaKH
        : null,
      MaCBCS: lucluongThamGiaKHInput.MaCBCS
        ? lucluongThamGiaKHInput.MaCBCS
        : null,
    };
  };

  lucluongThamGiaKHs(
    utilsParams: UtilsParamsInput,
  ): Promise<LucLuongThamGiaKH[]> {
    return this.lucluongthamgiaKHRepository.query(
      SP_GET_DATA(
        'LucLuongThamGiaKHs',
        "'MaLLTGKH != 0'",
        'MaLLTGKH',
        utilsParams.skip ? utilsParams.skip : 0,
        utilsParams.take ? utilsParams.take : 0,
      ),
    );
  }

  async lucluongThamGiaKH(id: number): Promise<LucLuongThamGiaKH> {
    const result = await this.lucluongthamgiaKHRepository.query(
      SP_GET_DATA('LucLuongThamGiaKHs', `'MaLLTGKH = ${id}'`, 'MaLLTGKH', 0, 1),
    );
    return result[0];
  }

  async createLucLuongThamGiaKH(
    lucluongThamGiaKHInput: LucLuongThamGiaKHInput,
  ): Promise<LucLuongThamGiaKH> {
    const { ViTri, MaKH, MaCBCS } = this.lucluongThamGiaKH_DataInput(
      lucluongThamGiaKHInput,
    );
    const result = await this.lucluongthamgiaKHRepository.query(
      SP_CHANGE_DATA(
        "'CREATE'",
        'LucLuongThamGiaKHs',
        "'ViTri, MaKH, MaCBCS'",
        `N' ${this.lucluongThamGiaKH_DataInput(lucluongThamGiaKHInput).ViTri},
            ${this.lucluongThamGiaKH_DataInput(lucluongThamGiaKHInput).MaKH},
            ${this.lucluongThamGiaKH_DataInput(lucluongThamGiaKHInput).MaCBCS}
        '`,
        "'MaLLTGKH = SCOPE_IDENTITY()'",
      ),
    );
    return result[0];
  }

  async editLucLuongThamGiaKH(
    lucluongThamGiaKHInput: LucLuongThamGiaKHInput,
    id: number,
  ): Promise<LucLuongThamGiaKH> {
    const result = await this.lucluongthamgiaKHRepository.query(
      SP_CHANGE_DATA(
        "'EDIT'",
        'LucLuongThamGiaKHs',
        null,
        null,
        null,
        `N' ViTri = ${this.lucluongThamGiaKH_DataInput(lucluongThamGiaKHInput).ViTri},
            MaKH = ${this.lucluongThamGiaKH_DataInput(lucluongThamGiaKHInput).MaKH},
            MaCBCS = ${this.lucluongThamGiaKH_DataInput(lucluongThamGiaKHInput).MaCBCS}
        '`,
        `'MaLLTGKH = ${id}'`,
      ),
    );
    return result[0];
  }

  async deleteLucLuongThamGiaKH(id: number): Promise<LucLuongThamGiaKH> {
    const result = await this.lucluongthamgiaKHRepository.query(
      SP_CHANGE_DATA(
        "'DELETE'",
        'LucLuongThamGiaKHs',
        null,
        null,
        null,
        null,
        `"MaLLTGKH = ${id}"`,
      ),
    );
    return result[0];
  }

  // ResolveField

  async KeHoachTSNT(lucluongThamGiaKH: any): Promise<KeHoachTSNT> {
    return this.dataloaderService.loaderKeHoachTSNT.load(
      lucluongThamGiaKH.MaKH,
    );
  }

  async CBCS(lucluongThamGiaKH: any): Promise<CBCS> {
    return this.dataloaderService.loaderCBCS.load(lucluongThamGiaKH.MaCBCS);
  }
}
