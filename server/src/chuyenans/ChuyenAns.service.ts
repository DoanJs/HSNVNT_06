import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataLoaderService } from 'src/dataloader/Dataloader.service';
import { DoiTuongCA } from 'src/doituongCAs/DoiTuongCA.model';
import { TinhChatDT } from 'src/tinhchatDTs/TinhChatDT.model';
import { SP_CHANGE_CHUYENAN, SP_GET_DATA, SP_GET_DATA_DECRYPT } from 'src/utils/mssql/query';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { Repository } from 'typeorm';
import { ChuyenAn } from './ChuyenAn.model';
import { ChuyenAnInput } from './type/ChuyenAn.input';

@Injectable()
export class ChuyenAnsService {
  constructor(
    @InjectRepository(ChuyenAn)
    private chuyenanRepository: Repository<ChuyenAn>,
    private readonly dataloaderService: DataLoaderService,
  ) {}

  public readonly chuyenAn_DataInput = (
    Type: string,
    MaCA: number | null,
    chuyenanInput: ChuyenAnInput,
  ) => {
    return {
      Type,
      MaCA,
      ChuyenAnInput: {
        BiSo: chuyenanInput.BiSo ? `N'${chuyenanInput.BiSo}'` : null,
        ThoiGianBD: chuyenanInput.ThoiGianBD
          ? `N'${chuyenanInput.ThoiGianBD}'`
          : null,
        TenCA: `N'${chuyenanInput.TenCA}'`, //crypto
        NoiDung: `N'${chuyenanInput.NoiDung}'`, //crypto
        MaTC: chuyenanInput.MaTC ? chuyenanInput.MaTC : null,
      },
    };
  };
  chuyenans(utilsParams: UtilsParamsInput): Promise<ChuyenAn[]> {
    return this.chuyenanRepository.query(
      SP_GET_DATA_DECRYPT(
        'ChuyenAns',
        "'MaCA != 0'",
        utilsParams.skip ? utilsParams.skip : 0,
        utilsParams.take ? utilsParams.take : 0,
      ),
    );
  }

  async chuyenan(id: number): Promise<ChuyenAn> {
    const cbcss = await this.chuyenanRepository.query(
      SP_GET_DATA_DECRYPT('ChuyenAns', `'MaCA = ${id}'`, 0, 1),
    );
    return cbcss[0];
  }

  async createChuyenAn(chuyenanInput: ChuyenAnInput): Promise<ChuyenAn> {
    const result = await this.chuyenanRepository.query(
      SP_CHANGE_CHUYENAN(
        this.chuyenAn_DataInput('CREATE', null, chuyenanInput),
      ),
    );
    return result[0];
  }

  async editChuyenAn(
    chuyenanInput: ChuyenAnInput,
    id: number,
  ): Promise<ChuyenAn> {
    const result = await this.chuyenanRepository.query(
      SP_CHANGE_CHUYENAN(this.chuyenAn_DataInput('EDIT', id, chuyenanInput)),
    );
    return result[0];
  }

  async deleteChuyenAn(
    chuyenanInput: ChuyenAnInput,
    id: number,
  ): Promise<ChuyenAn> {
    const result = await this.chuyenanRepository.query(
      SP_CHANGE_CHUYENAN(this.chuyenAn_DataInput('DELETE', id, chuyenanInput)),
    );
    return result[0];
  }

  //  ResolveField

  async TinhChat(chuyenan: any): Promise<TinhChatDT> {
    return this.dataloaderService.loaderTinhChat.load(chuyenan.MaTC);
  }

  async DoiTuongCAs(MaCA: number): Promise<DoiTuongCA[]> {
    return this.chuyenanRepository.query(
      SP_GET_DATA('DoiTuongCAs', `'MaCA = ${MaCA}'`, 'MaDTCA', 0, 0)
    );
  }
}
