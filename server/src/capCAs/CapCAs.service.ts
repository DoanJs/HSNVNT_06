import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CATTPvaTD } from 'src/caTTPvaTD/CATTPvaTD.model';
import { SP_CHANGE_DATA, SP_GET_DATA } from 'src/utils/mssql/query';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { Repository } from 'typeorm';
import { CapCA } from './CapCA.model';

@Injectable()
export class CapCAsService {
  constructor(
    @InjectRepository(CapCA) private capCARepository: Repository<CapCA>,
  ) {}

  public readonly capCA_DataInput = (capCA: string) => {
    return capCA ? `N''${capCA}''` : null
  };

  async capCAs(utilsParams: UtilsParamsInput): Promise<CapCA[]> {
    return await this.capCARepository.query(
      SP_GET_DATA(
        'CapCAs',
        `'MaCapCA != 0'`,
        'MaCapCA',
        utilsParams.skip ? utilsParams.skip : 0,
        utilsParams.take ? utilsParams.take : 0,
      ),
    );
  }

  async capCA(id: number): Promise<CapCA> {
    const result = await this.capCARepository.query(
      SP_GET_DATA('CapCAs', `'MaCapCA = ${id}'`, 'MaCapCA', 0, 1),
    );
    return result[0];
  }

  async createCapCA(capCA: string): Promise<CapCA> {
    const result = await this.capCARepository.query(
      SP_CHANGE_DATA(
        "'CREATE'", //string thuan
        'CapCAs',
        'CapCA',
        `N'${this.capCA_DataInput(capCA)}'`, //string thuan
        "'MaCapCA = SCOPE_IDENTITY()'", //string thuan
      ),
    );
    return result[0];
  }

  async editCapCA(capCA: string, id: number): Promise<CapCA> {
    const result = await this.capCARepository.query(
      SP_CHANGE_DATA(
        "'EDIT'",
        'CapCAs',
        null,
        null,
        null,
        `N'CapCA = ${this.capCA_DataInput(capCA)}'`,
        `'MaCapCA = ${id}'`,
      ),
    );
    return result[0];
  }

  async deleteCapCA(id: number): Promise<CapCA> {
    const result = await this.capCARepository.query(
      SP_CHANGE_DATA(
        "'DELETE'",
        'CapCAs',
        null,
        null,
        null,
        null,
        `"MaCapCA = ${id}"`,
      ),
    );
    return result[0];
  }

  // ResolveField
  async CATTPvaTDs(MaCapCA: number): Promise<CATTPvaTD[]> {
    return await this.capCARepository.query(
      SP_GET_DATA('CATTPvaTDs', `MaCapCA = ${MaCapCA}`, 'MaCATTPvaTD', 0, 0),
    );
  }
}
