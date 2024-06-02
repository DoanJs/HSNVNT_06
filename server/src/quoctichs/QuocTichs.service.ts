import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CBCS } from 'src/cbcss/CBCS.model';
import { DanToc } from 'src/dantocs/DanToc.model';
import { DoiTuong } from 'src/doituongs/DoiTuong.model';
import {
  SP_CHANGE_DATA,
  SP_GET_DATA,
  SP_GET_DATA_DECRYPT,
} from 'src/utils/mssql/query';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { Repository } from 'typeorm';
import { QuocTich } from './QuocTich.model';

@Injectable()
export class QuocTichsService {
  constructor(
    @InjectRepository(QuocTich)
    private quoctichRepository: Repository<QuocTich>,
  ) {}

  public readonly quocTich_DataInput = (tenQT: string) => {
    return {
      TenQT: tenQT ? `N''${tenQT}''` : null,
    };
  };

  quocTichs(utilsParams: UtilsParamsInput): Promise<QuocTich[]> {
    return this.quoctichRepository.query(
      SP_GET_DATA(
        'QuocTichs',
        "'MaQT != 0'",
        'MaQT',
        utilsParams.skip ? utilsParams.skip : 0,
        utilsParams.take ? utilsParams.take : 0,
      ),
    );
  }

  async quocTich(id: number): Promise<QuocTich> {
    const result = await this.quoctichRepository.query(
      SP_GET_DATA('QuocTichs', `'MaQT = ${id}'`, 'MaQT', 0, 1),
    );
    return result[0];
  }

  async createQuocTich(tenQT: string): Promise<QuocTich> {
    const result = await this.quoctichRepository.query(
      SP_CHANGE_DATA(
        "'CREATE'",
        'QuocTichs',
        'TenQT',
        `N' ${this.quocTich_DataInput(tenQT).TenQT}'`,
        "'MaQT = SCOPE_IDENTITY()'",
      ),
    );
    return result[0];
  }

  async editQuocTich(tenQT: string, id: number): Promise<QuocTich> {
    const result = await this.quoctichRepository.query(
      SP_CHANGE_DATA(
        "'EDIT'",
        'QuocTichs',
        null,
        null,
        null,
        `N' TenQT = ${this.quocTich_DataInput(tenQT).TenQT}'`,
        `'MaQT = ${id}'`,
      ),
    );
    return result[0];
  }

  async deleteQuocTich(id: number): Promise<QuocTich> {
    const result = await this.quoctichRepository.query(
      SP_CHANGE_DATA(
        "'DELETE'",
        'QuocTichs',
        null,
        null,
        null,
        null,
        `"MaQT = ${id}"`,
      ),
    );
    return result[0];
  }

  // ResolveField

  async DanTocs(MaQT: number): Promise<DanToc[]> {
    return await this.quoctichRepository.query(
      SP_GET_DATA('DanTocs', `'MaQT = ${MaQT}'`, 'MaDT', 0, 0)
    );
  }

  DoiTuongs(MaQT: any): Promise<DoiTuong[]> {
    return this.quoctichRepository.query(
      SP_GET_DATA_DECRYPT('DoiTuongs', `'MaQT = ${MaQT}'`, 0, 0),
    );
  }

  CBCSs(MaQT: any): Promise<CBCS[]> {
    return this.quoctichRepository.query(
      SP_GET_DATA_DECRYPT('CBCSs', `'MaQT = ${MaQT}'`, 0, 0),
    );
  }
}
