import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataLoaderService } from 'src/dataloader/Dataloader.service';
import { KetQuaTSNT } from 'src/ketquaTSNTs/KetQuaTSNT.model';
import { SP_CHANGE_DATA, SP_GET_DATA } from 'src/utils/mssql/query';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { Repository } from 'typeorm';
import { DDNB } from './DDNB.model';

@Injectable()
export class DDNBsService {
  constructor(
    @InjectRepository(DDNB) private ddnbRepository: Repository<DDNB>,
    private dataloaderService: DataLoaderService,
  ) {}

  public readonly ddnb_DataInput = (ddnb: string) => {
    return {
      DacDiem: ddnb ? `N''${ddnb}''` : null,
    };
  };

  ddnbs(utilsParams: UtilsParamsInput): Promise<DDNB[]> {
    return this.ddnbRepository.query(
      SP_GET_DATA(
        'DDNBs',
        "'MaDDNB != 0'",
        'MaDDNB',
        utilsParams.skip ? utilsParams.skip : 0,
        utilsParams.take ? utilsParams.take : 0,
      ),
    );
  }

  async ddnb(id: number): Promise<DDNB> {
    const result = await this.ddnbRepository.query(
      SP_GET_DATA('DDNBs', `'MaDDNB = ${id}'`, 'MaDDNB', 0, 1),
    );
    return result[0];
  }

  async createDDNB(ddnb: string): Promise<DDNB> {
    const result = await this.ddnbRepository.query(
      SP_CHANGE_DATA(
        "'CREATE'",
        'DDNBs',
        'DacDiem',
        `N' ${this.ddnb_DataInput(ddnb).DacDiem}'`,
        "'MaDDNB = SCOPE_IDENTITY()'",
      ),
    );
    return result[0];
  }

  async editDDNB(ddnb: string, id: number): Promise<DDNB> {
    const result = await this.ddnbRepository.query(
      SP_CHANGE_DATA(
        "'EDIT'",
        'DDNBs',
        null,
        null,
        null,
        `N' DacDiem = ${this.ddnb_DataInput(ddnb).DacDiem}'`,
        `'MaDDNB = ${id}'`,
      ),
    );
    return result[0];
  }

  async deleteDDNB(id: number): Promise<DDNB> {
    const result = await this.ddnbRepository.query(
      SP_CHANGE_DATA(
        "'DELETE'",
        'DDNBs',
        null,
        null,
        null,
        null,
        `'MaDDNB = ${id}'`,
      ),
    );
    return result[0];
  }

  //  ResolveField

  async KetQuaTSNTs(MaDDNB: number): Promise<KetQuaTSNT[]> {
    const result = (await this.ddnbRepository.query(
      SP_GET_DATA('KetQuaTSNTs_DDNBs', `'MaDDNB = ${MaDDNB}'`, 'MaKQ', 0, 0)
    )) as [{ MaKQ: number }];
    const resultLoader = result.map((obj) =>
      this.dataloaderService.loaderKetQuaTSNT.load(obj.MaKQ),
    );
    return await Promise.all(resultLoader);
  }
}
