import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaoCaoKQXMDiaChi } from 'src/baocaoKQXMDiaChis/BaoCaoKQXMDiaChi.model';
import { CBCS } from 'src/cbcss/CBCS.model';
import { DataLoaderService } from 'src/dataloader/Dataloader.service';
import { KetQuaTSNT } from 'src/ketquaTSNTs/KetQuaTSNT.model';
import { SP_CHANGE_DIACHINV, SP_GET_DATA, SP_GET_DATA_DECRYPT } from 'src/utils/mssql/query';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { Repository } from 'typeorm';
import { DiaChiNV } from './DiaChiNV.model';
import { DiaChiNVInput } from './type/DiaChiNV.Input';

@Injectable()
export class DiaChiNVsService {
  constructor(
    @InjectRepository(DiaChiNV)
    private diachiNVRepository: Repository<DiaChiNV>,
    private dataloaderService: DataLoaderService,
  ) {}
  public readonly diaChiNV_DataInput = (
    Type: string,
    MaDC: number | null,
    diachiNVInput: DiaChiNVInput,
  ) => {
    return {
      Type,
      MaDC,
      DiaChiNVInput: {
        ThoiGianPH: diachiNVInput.ThoiGianPH ? diachiNVInput.ThoiGianPH : null,
        DiaChi: `N'${diachiNVInput.DiaChi}'`, //crypto,
        HinhAnh: `N'${diachiNVInput.HinhAnh}'`, //crypto,
        MaKQ: diachiNVInput.MaKQ ? diachiNVInput.MaKQ : null,
      },
    };
  };

  diachiNVs(utilsParams: UtilsParamsInput): Promise<DiaChiNV[]> {
    return this.diachiNVRepository.query(
      SP_GET_DATA_DECRYPT(
        'DiaChiNVs',
        "'MaDC != 0'",
        utilsParams.skip ? utilsParams.skip : 0,
        utilsParams.take ? utilsParams.take : 0,
      ),
    );
  }

  async diachiNV(id: number): Promise<DiaChiNV> {
    const result = await this.diachiNVRepository.query(
      SP_GET_DATA_DECRYPT('DiaChiNVs', `'MaDC = ${id}'`, 0, 1),
    );
    return result[0];
  }

  async createDiaChiNV(diachiNVInput: DiaChiNVInput): Promise<DiaChiNV> {
    const result = await this.diachiNVRepository.query(
      SP_CHANGE_DIACHINV(
        this.diaChiNV_DataInput('CREATE', null, diachiNVInput),
      ),
    );
    return result[0];
  }

  async editDiaChiNV(
    diachiNVInput: DiaChiNVInput,
    id: number,
  ): Promise<DiaChiNV> {
    const result = await this.diachiNVRepository.query(
      SP_CHANGE_DIACHINV(this.diaChiNV_DataInput('EDIT', id, diachiNVInput)),
    );
    return result[0];
  }

  async deleteDiaChiNV(
    diachiNVInput: DiaChiNVInput,
    id: number,
  ): Promise<DiaChiNV> {
    const result = await this.diachiNVRepository.query(
      SP_CHANGE_DIACHINV(this.diaChiNV_DataInput('DELETE', id, diachiNVInput)),
    );
    return result[0];
  }

  // ResolveField
  async KetQuaTSNT(diachiNV: any): Promise<KetQuaTSNT> {
    return this.dataloaderService.loaderKetQuaTSNT.load(diachiNV.MaKQ);
  }

  async TSThucHiens(MaDC: number): Promise<CBCS[]> {
    const result = (await this.diachiNVRepository.query(
      SP_GET_DATA('DiaChiNVs_CBCSs', `'MaDC = ${MaDC}'`, 'MaCBCS', 0, 0)
    )) as [{ MaCBCS: number }];
    const resultLoader = result.map((obj) =>
      this.dataloaderService.loaderCBCS.load(obj.MaCBCS),
    );
    return await Promise.all(resultLoader);
  }

  async BaoCaoKQXMDiaChi(MaDC: number): Promise<BaoCaoKQXMDiaChi> {
    const result = await this.diachiNVRepository.query(
      SP_GET_DATA_DECRYPT('BaoCaoKQXMDiaChis', `'MaDiaChiNV = ${MaDC}'`, 0, 1),
    );
    return result[0];
  }
}
