import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CBCS } from 'src/cbcss/CBCS.model';
import { DataLoaderService } from 'src/dataloader/Dataloader.service';
import { DoiTuong } from 'src/doituongs/DoiTuong.model';
import { QuocTich } from 'src/quoctichs/QuocTich.model';
import {
  SP_CHANGE_DATA,
  SP_GET_DATA,
  SP_GET_DATA_DECRYPT,
} from 'src/utils/mssql/query';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { Repository } from 'typeorm';
import { DanToc } from './DanToc.model';
import { DanTocInput } from './type/DanToc.Input';

@Injectable()
export class DanTocsService {
  constructor(
    @InjectRepository(DanToc) private dantocRepository: Repository<DanToc>,
    @InjectRepository(CBCS) private cbcsRepository: Repository<CBCS>,
    private readonly dataloaderService: DataLoaderService,
  ) {}

  public readonly dantoc_DataInput = (dantocInput: DanTocInput) => {
    return {
      TenDT: dantocInput.TenDT ? `N''${dantocInput.TenDT}''` : null,
      MaQT: dantocInput.MaQT ? dantocInput.MaQT : null,
    };
  };

  async dantocs(utilsParams: UtilsParamsInput): Promise<DanToc[]> {
    return await this.dantocRepository.query(
      SP_GET_DATA(
        'DanTocs',
        `'MaDT != 0'`,
        'MaDT',
        utilsParams.skip ? utilsParams.skip : 0,
        utilsParams.take ? utilsParams.take : 0,
      ),
    );
  }

  async dantoc(id: number): Promise<DanToc> {
    const result = await this.dantocRepository.query(
      SP_GET_DATA('DanTocs', `'MaDT = ${id}'`, 'MaDT', 0, 1),
    );
    return result[0];
  }

  async createDanToc(danTocInput: DanTocInput): Promise<DanToc> {
    const result = await this.dantocRepository.query(
      SP_CHANGE_DATA(
        "'CREATE'",
        'DanTocs',
        "'TenDT, MaQT'",
        `N' ${this.dantoc_DataInput(danTocInput).TenDT},
            ${this.dantoc_DataInput(danTocInput).MaQT}
        '`,
        "'MaDT = SCOPE_IDENTITY()'",
      ),
    );
    return result[0];
  }

  async editDanToc(danTocInput: DanTocInput, id: number): Promise<DanToc> {
    const result = await this.dantocRepository.query(
      SP_CHANGE_DATA(
        "'EDIT'",
        'DanTocs',
        null,
        null,
        null,
        `N' TenDT = ${this.dantoc_DataInput(danTocInput).TenDT},
            MaQT = ${this.dantoc_DataInput(danTocInput).MaQT}
        '`,
        `'MaDT = ${id}'`,
      ),
    );
    return result[0];
  }

  async deleteDanToc(id: number): Promise<DanToc> {
    const result = await this.dantocRepository.query(
      SP_CHANGE_DATA(
        "'DELETE'",
        'DanTocs',
        null,
        null,
        null,
        null,
        `'MaDT = ${id}'`,
      ),
    );
    return result[0];
  }

  //  ResolveField

  async QuocTich(danToc: any): Promise<QuocTich> {
    return this.dataloaderService.loaderQuocTich.load(danToc.MaQT);
  }

  DoiTuongs(MaDT: number): Promise<DoiTuong[]> {
    return this.dantocRepository.query(
      SP_GET_DATA_DECRYPT('DoiTuongs', `'MaDT = ${MaDT}'`, 0, 0),
    );
  }

  CBCSs(MaDT: number): Promise<CBCS[]> {
    return this.cbcsRepository.query(
      SP_GET_DATA_DECRYPT('CBCSs', `'MaDT = ${MaDT}'`, 0, 0),
    );
  }
}
