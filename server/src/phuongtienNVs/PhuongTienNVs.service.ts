import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import PhuongTienNV from './PhuongTienNV.model';
import { PhuongTienNVInput } from './type/PhuongTienNV.input';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import {
  SP_CHANGE_PHUONGTIENNV,
  SP_GET_DATA,
  SP_GET_DATA_DECRYPT,
} from 'src/utils/mssql/query';
import { KetQuaTSNT } from 'src/ketquaTSNTs/KetQuaTSNT.model';
import { DataLoaderService } from 'src/dataloader/Dataloader.service';
import { CBCS } from 'src/cbcss/CBCS.model';

@Injectable()
export class PhuongTienNVsService {
  constructor(
    @InjectRepository(PhuongTienNV)
    private phuongtienNVRepository: Repository<PhuongTienNV>,
    private dataloaderService: DataLoaderService,
  ) {}
  public readonly phuongtienNV_DataInput = (
    Type: string,
    MaPT: number | null,
    phuongtienNVInput: PhuongTienNVInput,
  ) => {
    return {
      Type,
      MaPT,
      PhuongTienNVInput: {
        ThoiGianPH: phuongtienNVInput.ThoiGianPH
          ? phuongtienNVInput.ThoiGianPH
          : null,
        DiaDiemPH: phuongtienNVInput.DiaDiemPH
          ? `N'${phuongtienNVInput.DiaDiemPH}'`
          : null,
        MaKQ: phuongtienNVInput.MaKQ ? phuongtienNVInput.MaKQ : null,
        BKS: `N'${phuongtienNVInput.BKS}'`, // crypto
        HinhAnh: `N'${phuongtienNVInput.HinhAnh}'`, // crypto
      },
    };
  };

  phuongtienNVs(utilsParams: UtilsParamsInput): Promise<PhuongTienNV[]> {
    return this.phuongtienNVRepository.query(
      SP_GET_DATA_DECRYPT(
        'PhuongTienNVs',
        "'MaPT != 0'",
        utilsParams.skip && utilsParams.skip > 0 ? utilsParams.skip : 0,
        utilsParams.take && utilsParams.take > 0 ? utilsParams.take : 0,
      ),
    );
  }

  async phuongtienNV(id: number): Promise<PhuongTienNV> {
    const result = await this.phuongtienNVRepository.query(
      SP_GET_DATA_DECRYPT('PhuongTienNVs', `'MaPT = ${id}'`, 0, 1),
    );
    return result[0];
  }

  async createPhuongTienNV(
    phuongtienNVInput: PhuongTienNVInput,
  ): Promise<PhuongTienNV> {
    const result = await this.phuongtienNVRepository.query(
      SP_CHANGE_PHUONGTIENNV(
        this.phuongtienNV_DataInput('CREATE', null, phuongtienNVInput),
      ),
    );
    return result[0];
  }

  async editPhuongTienNV(
    phuongtienNVInput: PhuongTienNVInput,
    id: number,
  ): Promise<PhuongTienNV> {
    const cbcss = await this.phuongtienNVRepository.query(
      SP_CHANGE_PHUONGTIENNV(
        this.phuongtienNV_DataInput('EDIT', id, phuongtienNVInput),
      ),
    );
    return cbcss[0];
  }

  async deletePhuongTienNV(
    phuongtienNVInput: PhuongTienNVInput,
    id: number,
  ): Promise<PhuongTienNV> {
    const cbcss = await this.phuongtienNVRepository.query(
      SP_CHANGE_PHUONGTIENNV(
        this.phuongtienNV_DataInput('DELETE', id, phuongtienNVInput),
      ),
    );
    return cbcss[0];
  }

  // ResolveField

  async KetQuaTSNT(phuongtienNV: any): Promise<KetQuaTSNT> {
    return this.dataloaderService.loaderKetQuaTSNT.load(phuongtienNV.MaKQ)
  }

  async TSThucHiens(MaPT: number): Promise<CBCS[]> {
    const result = (await this.phuongtienNVRepository.query(
      SP_GET_DATA('PhuongTienNVs_CBCSs', `'MaPT = ${MaPT}'`, 'MaCBCS', 0, 0)
    )) as [{ MaCBCS: number }];
    const resultLoader = result.map((obj) =>
      this.dataloaderService.loaderCBCS.load(obj.MaCBCS),
    );
    return await Promise.all(resultLoader);
  }
}
