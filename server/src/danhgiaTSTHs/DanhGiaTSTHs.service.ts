import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CBCS } from 'src/cbcss/CBCS.model';
import { DataLoaderService } from 'src/dataloader/Dataloader.service';
import { KetQuaTSNT } from 'src/ketquaTSNTs/KetQuaTSNT.model';
import { SP_CHANGE_DATA, SP_GET_DATA } from 'src/utils/mssql/query';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { Repository } from 'typeorm';
import { DanhGiaTSTH } from './DanhGiaTSTH.model';
import { DanhGiaTSTHInput } from './type/DanhGiaTSTH.input';

@Injectable()
export class DanhGiaTSTHsService {
  constructor(
    @InjectRepository(DanhGiaTSTH)
    private danhgiaTSTHRepository: Repository<DanhGiaTSTH>,
    private dataloaderService: DataLoaderService,
  ) {}

  public readonly danhgiaTSTH_DataInput = (
    danhgiaTSTHInput: DanhGiaTSTHInput,
  ) => {
    return {
      VaiTro: danhgiaTSTHInput.VaiTro
        ? `N''${danhgiaTSTHInput.VaiTro}''`
        : null,
      DanhGia: danhgiaTSTHInput.DanhGia
        ? `N''${danhgiaTSTHInput.DanhGia}''`
        : null,
      LyDo: danhgiaTSTHInput.LyDo ? `N''${danhgiaTSTHInput.LyDo}''` : null,
      MaKQ: danhgiaTSTHInput.MaKQ ? danhgiaTSTHInput.MaKQ : null,
      MaCBCS: danhgiaTSTHInput.MaCBCS ? danhgiaTSTHInput.MaCBCS : null,
    };
  };

  async danhgiaTSTHs(utilsParams: UtilsParamsInput): Promise<DanhGiaTSTH[]> {
    return await this.danhgiaTSTHRepository.query(
      SP_GET_DATA(
        'DanhGiaTSTHs',
        `'MaDanhGiaTSTH != 0'`,
        'MaDanhGiaTSTH',
        utilsParams.skip ? utilsParams.skip : 0,
        utilsParams.take ? utilsParams.take : 0,
      ),
    );
  }

  async danhgiaTSTH(id: number): Promise<DanhGiaTSTH> {
    const result = await this.danhgiaTSTHRepository.query(
      SP_GET_DATA(
        'DanhGiaTSTHs',
        `'MaDanhGiaTSTH = ${id}'`,
        'MaDanhGiaTSTH',
        0,
        1,
      ),
    );
    return result[0];
  }

  async createDanhGiaTSTH(
    danhgiaTSTHInput: DanhGiaTSTHInput,
  ): Promise<DanhGiaTSTH> {
    const result = await this.danhgiaTSTHRepository.query(
      SP_CHANGE_DATA(
        "'CREATE'",
        'DanhGiaTSTHs',
        `'VaiTro, DanhGia, LyDo, MaKQ, MaCBCS'`,
        `N' ${this.danhgiaTSTH_DataInput(danhgiaTSTHInput).VaiTro},
            ${this.danhgiaTSTH_DataInput(danhgiaTSTHInput).DanhGia},
            ${this.danhgiaTSTH_DataInput(danhgiaTSTHInput).LyDo},
            ${this.danhgiaTSTH_DataInput(danhgiaTSTHInput).MaKQ},
            ${this.danhgiaTSTH_DataInput(danhgiaTSTHInput).MaCBCS}
        '`,
        `'MaDanhGiaTSTH = SCOPE_IDENTITY()'`,
      ),
    );
    return result[0];
  }

  async editDanhGiaTSTH(
    danhgiaTSTHInput: DanhGiaTSTHInput,
    id: number,
  ): Promise<DanhGiaTSTH> {
    const result = await this.danhgiaTSTHRepository.query(
      SP_CHANGE_DATA(
        "'EDIT'",
        'DanhGiaTSTHs',
        null,
        null,
        null,
        `N'
            VaiTro = ${this.danhgiaTSTH_DataInput(danhgiaTSTHInput).VaiTro},
            DanhGia = ${this.danhgiaTSTH_DataInput(danhgiaTSTHInput).DanhGia},
            LyDo = ${this.danhgiaTSTH_DataInput(danhgiaTSTHInput).LyDo},
            MaKQ = ${this.danhgiaTSTH_DataInput(danhgiaTSTHInput).MaKQ},
            MaCBCS = ${this.danhgiaTSTH_DataInput(danhgiaTSTHInput).MaCBCS}
        '`,
        `'MaDanhGiaTSTH = ${id}'`,
      ),
    );
    return result[0];
  }

  async deleteDanhGiaTSTH(id: number): Promise<DanhGiaTSTH> {
    const result = await this.danhgiaTSTHRepository.query(
      SP_CHANGE_DATA(
        "'DELETE'",
        'DanhGiaTSTHs',
        null,
        null,
        null,
        null,
        `'MaDanhGiaTSTH = ${id}'`,
      ),
    );
    return result[0];
  }

  // ResolverField
  async KetQuaTSNT(danhgiaTSTH: any): Promise<KetQuaTSNT> {
    return this.dataloaderService.loaderKetQuaTSNT.load(danhgiaTSTH.MaKQ);
  }

  async CBCS(danhgiaTSTH: any): Promise<CBCS> {
    return this.dataloaderService.loaderCBCS.load(danhgiaTSTH.MaCBCS);
  }
}
