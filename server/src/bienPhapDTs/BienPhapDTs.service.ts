import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataLoaderService } from 'src/dataloader/Dataloader.service';
import { DoiTuong } from 'src/doituongs/DoiTuong.model';
import { SP_CHANGE_DATA, SP_GET_DATA } from 'src/utils/mssql/query';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { Repository } from 'typeorm';
import { BienPhapDT } from './BienPhapDT.model';

@Injectable()
export class BienPhapDTsService {
  constructor(
    @InjectRepository(BienPhapDT)
    private bienPhapDTRepository: Repository<BienPhapDT>,
    private readonly dataloaderService: DataLoaderService,
  ) {}

  public readonly bienPhapDT_DataInput = (bienphapDT: string) => {
    return {
      BienPhapDT: bienphapDT ? `N''${bienphapDT}''` : null,
    };
  };

  bienPhapDTs(utilsParams: UtilsParamsInput): Promise<BienPhapDT[]> {
    return this.bienPhapDTRepository.query(
      SP_GET_DATA(
        'BienPhapDTs',
        "'MaBPDT!=0'",
        'MaBPDT',
        utilsParams.skip ? utilsParams.skip : 0,
        utilsParams.take ? utilsParams.take : 0,
      ),
    );
  }

  async bienPhapDT(id: number): Promise<BienPhapDT> {
    const result = await this.bienPhapDTRepository.query(
      SP_GET_DATA('BienPhapDTs', `'MaBPDT = ${id}'`, 'MaBPDT', 0, 1),
    );
    return result[0];
  }

  async createBienPhapDT(bienPhapDT: string): Promise<BienPhapDT> {
    const result = await this.bienPhapDTRepository.query(
      SP_CHANGE_DATA(
        "'CREATE'", //string thuan
        'BienPhapDTs',
        'BienPhapDT',
        `N'${this.bienPhapDT_DataInput(bienPhapDT).BienPhapDT}'`, //string thuan
        "'MaBPDT = SCOPE_IDENTITY()'", //string thuan
      ),
    );
    return result[0];
  }

  async editBienPhapDT(bienPhapDT: string, id: number): Promise<BienPhapDT> {
    const result = await this.bienPhapDTRepository.query(
      SP_CHANGE_DATA(
        "'EDIT'",
        'BienPhapDTs',
        null,
        null,
        null,
        `N'BienPhapDT = ${this.bienPhapDT_DataInput(bienPhapDT).BienPhapDT}'`,
        `'MaBPDT = ${id}'`,
      ),
    );
    return result[0];
  }

  async deleteBienPhapDT(id: number): Promise<BienPhapDT> {
    const result = await this.bienPhapDTRepository.query(
      SP_CHANGE_DATA(
        "'DELETE'",
        'BienPhapDTs',
        null,
        null,
        null,
        null,
        `'MaBPDT = ${id}'`,
      ),
    );
    return result[0];
  }

  // ResolveField

  async DoiTuongs(MaBPDT: any): Promise<DoiTuong[]> {
    const result = (await this.bienPhapDTRepository.query(
      SP_GET_DATA(
        'BienPhapDTs_DoiTuongs',
        `'MaBPDT = ${MaBPDT}'`,
        'MaBPDT',
        0,
        0,
      ),
    )) as [{ MaDoiTuong: number }];
    const resultLoader = result.map((obj) =>
      this.dataloaderService.loaderDoiTuong.load(obj.MaDoiTuong),
    );
    return await Promise.all(resultLoader);
  }
}
