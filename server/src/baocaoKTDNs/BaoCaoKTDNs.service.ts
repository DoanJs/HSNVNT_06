import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  SP_CHANGE_BAOCAOKTDN,
  SP_GET_DATA_DECRYPT,
} from 'src/utils/mssql/query';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { Repository } from 'typeorm';
import { BaoCaoKTDN } from './BaoCaoKTDN.model';
import { BaoCaoKTDNInput } from './type/BaoCaoKTDN.input';

@Injectable()
export class BaoCaoKTDNsService {
  constructor(
    @InjectRepository(BaoCaoKTDN)
    private baocaoKTDNRepository: Repository<BaoCaoKTDN>,
  ) {}

  public readonly baocaoKTDN_DataInput = (
    Type: string,
    MaBCKTDN: number | null,
    baocaoKTDNInput: BaoCaoKTDNInput,
  ) => {
    return {
      Type,
      MaBCKTDN,
      BaoCaoKTDNInput: {
        Ngay: baocaoKTDNInput.Ngay ? baocaoKTDNInput.Ngay : null,
        TinhHinhDT: `N'${baocaoKTDNInput.TinhHinhDT}'`,
        VanDeRKN: `N'${baocaoKTDNInput.VanDeRKN}'`,
        MaKQ: baocaoKTDNInput.MaKQ ? baocaoKTDNInput.MaKQ : null,
        MaLanhDaoPD: baocaoKTDNInput.MaLanhDaoPD
          ? baocaoKTDNInput.MaLanhDaoPD
          : null,
        MaCBTongHop: baocaoKTDNInput.MaCBTongHop
          ? baocaoKTDNInput.MaCBTongHop
          : null,
      },
    };
  };

  baoCaoKTDNs(utilsParams: UtilsParamsInput): Promise<BaoCaoKTDN[]> {
    return this.baocaoKTDNRepository.query(
      SP_GET_DATA_DECRYPT(
        'BaoCaoKTDNs',
        "'MaBCKTDN != 0'",
        utilsParams.skip && utilsParams.skip > 0 ? utilsParams.skip : 0,
        utilsParams.take && utilsParams.take > 0 ? utilsParams.take : 0,
      ),
    );
  }

  async baoCaoKTDN(id: number): Promise<BaoCaoKTDN> {
    const result = await this.baocaoKTDNRepository.query(
      SP_GET_DATA_DECRYPT('BaoCaoKTDNs', `"MaBCKTDN = ${id}"`, 0, 1),
    );
    return result[0];
  }

  async createBaoCaoKTDN(
    baocaoKTDNInput: BaoCaoKTDNInput,
  ): Promise<BaoCaoKTDN> {
    const result = await this.baocaoKTDNRepository.query(
      SP_CHANGE_BAOCAOKTDN(
        this.baocaoKTDN_DataInput('CREATE', null, baocaoKTDNInput),
      ),
    );
    return result[0];
  }

  async editBaoCaoKTDN(
    baocaoKTDNInput: BaoCaoKTDNInput,
    id: number,
  ): Promise<BaoCaoKTDN> {
    const cbcss = await this.baocaoKTDNRepository.query(
      SP_CHANGE_BAOCAOKTDN(
        this.baocaoKTDN_DataInput('EDIT', id, baocaoKTDNInput),
      ),
    );
    return cbcss[0];
  }

  async deleteBaoCaoKTDN(
    baocaoKTDNInput: BaoCaoKTDNInput,
    id: number,
  ): Promise<BaoCaoKTDN> {
    const cbcss = await this.baocaoKTDNRepository.query(
      SP_CHANGE_BAOCAOKTDN(
        this.baocaoKTDN_DataInput('DELETE', id, baocaoKTDNInput),
      ),
    );
    return cbcss[0];
  }

  // ResolveField
}
