import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeNghiTSNT } from 'src/denghiTSNTs/DeNghiTSNT.model';
import {
  SP_CHANGE_DATA,
  SP_GET_DATA,
  SP_GET_DATA_DECRYPT,
} from 'src/utils/mssql/query';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { Repository } from 'typeorm';
import { HinhThucHD } from './HinhThucHD.model';

@Injectable()
export class HinhThucHDsService {
  constructor(
    @InjectRepository(HinhThucHD)
    private hinhthucHDRepository: Repository<HinhThucHD>,
  ) {}

  public readonly hinhthuc_DataInput = (hinhthuc: string) => {
    return {
      HinhThuc: hinhthuc ? `N''${hinhthuc}''` : null,
    };
  };

  hinhthucHDs(utilsParams: UtilsParamsInput): Promise<HinhThucHD[]> {
    return this.hinhthucHDRepository.query(
      SP_GET_DATA(
        'HinhThucHDs',
        "'MaHTHD != 0'",
        'MaHTHD',
        utilsParams.skip ? utilsParams.skip : 0,
        utilsParams.take ? utilsParams.take : 0,
      ),
    );
  }

  async hinhthucHD(id: number): Promise<HinhThucHD> {
    const result = await this.hinhthucHDRepository.query(
      SP_GET_DATA('HinhThucHDs', `'MaHTHD = ${id}'`, 'MaHTHD', 0, 1),
    );
    return result[0];
  }

  async createHinhThucHD(hinhthuc: string): Promise<HinhThucHD> {
    const result = await this.hinhthucHDRepository.query(
      SP_CHANGE_DATA(
        "'CREATE'",
        'HinhThucHDs',
        'HinhThuc',
        `N' ${this.hinhthuc_DataInput(hinhthuc).HinhThuc}'`,
        "'MaHTHD = SCOPE_IDENTITY()'",
      ),
    );
    return result[0];
  } 

  async editHinhThucHD(hinhthuc: string, id: number): Promise<HinhThucHD> {
    const result = await this.hinhthucHDRepository.query(
      SP_CHANGE_DATA(
        "'EDIT'",
        'HinhThucHDs',
        null,
        null,
        null,
        `N' HinhThuc = ${this.hinhthuc_DataInput(hinhthuc).HinhThuc}'`,
        `'MaHTHD = ${id}'`,
      ),
    );
    return result[0];
  }

  async deleteHinhThucHD(id: number): Promise<HinhThucHD> {
    const result = await this.hinhthucHDRepository.query(
      SP_CHANGE_DATA(
        "'DELETE'",
        'HinhThucHDs',
        null,
        null,
        null,
        null,
        `'MaHTHD = ${id}'`,
      ),
    );
    return result[0];
  }

  // ResolveField

  DeNghiTSNTs(MaHTHD: number): Promise<DeNghiTSNT[]> {
    return this.hinhthucHDRepository.query(
      SP_GET_DATA_DECRYPT('DeNghiTSNTs', `'MaHTHD =  ${MaHTHD}'`, 0, 0),
    );
  }
}
