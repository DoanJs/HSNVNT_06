import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CBCS } from 'src/cbcss/CBCS.model';
import { DataLoaderService } from 'src/dataloader/Dataloader.service';
import { DeNghiTSNT } from 'src/denghiTSNTs/DeNghiTSNT.model';
import { SP_CHANGE_DATA, SP_GET_DATA, SP_GET_DATA_DECRYPT } from 'src/utils/mssql/query';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { Repository } from 'typeorm';
import { KyDuyet_DN } from './KyDuyet_DN.model';
import { KyDuyet_DNInput } from './type/KyDuyet_DN.Input';

@Injectable()
export class KyDuyet_DNsService {
  constructor(
    @InjectRepository(KyDuyet_DN) private kyDuyet_DNRepository: Repository<KyDuyet_DN>,
    private readonly dataloaderService: DataLoaderService,
  ) { }

  public readonly kyduyet_DN_DataInput = (
    kyduyet_DNInput: KyDuyet_DNInput,
  ) => {
    return {
      MaDN: kyduyet_DNInput.MaDN ? kyduyet_DNInput.MaDN : null,
      MaDaiDienCATTPvaTD: kyduyet_DNInput.MaDaiDienCATTPvaTD ? kyduyet_DNInput.MaDaiDienCATTPvaTD : null,
      MaDaiDienDonViDN: kyduyet_DNInput.MaDaiDienDonViDN ? kyduyet_DNInput.MaDaiDienDonViDN : null,
      MaDaiDienDonViTSNT: kyduyet_DNInput.MaDaiDienDonViTSNT ? kyduyet_DNInput.MaDaiDienDonViTSNT : null,
    };
  };

  kyDuyet_DNs(utilsParams: UtilsParamsInput): Promise<KyDuyet_DN[]> {
    return this.kyDuyet_DNRepository.query(
      SP_GET_DATA(
        'KyDuyet_DNs',
        "'MaKDDN != 0'",
        'MaKDDN',
        utilsParams.skip ? utilsParams.skip : 0,
        utilsParams.take ? utilsParams.take : 0,
      ),
    );
  }

  async kyDuyet_DN(id: number): Promise<KyDuyet_DN> {
    const result = await this.kyDuyet_DNRepository.query(
      SP_GET_DATA('KyDuyet_DNs', `'MaKDDN = ${id}'`, 'MaKDDN', 0, 1),
    );
    return result[0];
  }

  async createKyDuyet_DN(kyDuyet_DNInput: KyDuyet_DNInput): Promise<KyDuyet_DN> {
    const result = await this.kyDuyet_DNRepository.query(
      SP_CHANGE_DATA(
        "'CREATE'",
        'KyDuyet_DNs',
        "'MaDN, MaDaiDienCATTPvaTD, MaDaiDienDonViDN, MaDaiDienDonViTSNT'",
        `N' ${this.kyduyet_DN_DataInput(kyDuyet_DNInput).MaDN},
            ${this.kyduyet_DN_DataInput(kyDuyet_DNInput).MaDaiDienCATTPvaTD},
            ${this.kyduyet_DN_DataInput(kyDuyet_DNInput).MaDaiDienDonViDN},
            ${this.kyduyet_DN_DataInput(kyDuyet_DNInput).MaDaiDienDonViTSNT}
        '`,
        "'MaKDDN = SCOPE_IDENTITY()'",
      ),
    );
    return result[0];
  }

  async editKyDuyet_DN(kyDuyet_DNInput: KyDuyet_DNInput, id: number): Promise<KyDuyet_DN> {
    const result = await this.kyDuyet_DNRepository.query(
      SP_CHANGE_DATA(
        "'EDIT'",
        'KyDuyet_DNs',
        null,
        null,
        null,
        `N' MaDN = ${this.kyduyet_DN_DataInput(kyDuyet_DNInput).MaDN},
            MaDaiDienCATTPvaTD = ${this.kyduyet_DN_DataInput(kyDuyet_DNInput).MaDaiDienCATTPvaTD},
            MaDaiDienDonViDN = ${this.kyduyet_DN_DataInput(kyDuyet_DNInput).MaDaiDienDonViDN},
            MaDaiDienDonViTSNT = ${this.kyduyet_DN_DataInput(kyDuyet_DNInput).MaDaiDienDonViTSNT}
        '`,
        `'MaKDDN = ${id}'`,
      ),
    );
    return result[0];
  }

  async deleteKyDuyet_DN(id: number): Promise<KyDuyet_DN> {
    const result = await this.kyDuyet_DNRepository.query(
      SP_CHANGE_DATA(
        "'DELETE'",
        'KyDuyet_DNs',
        null,
        null,
        null,
        null,
        `'MaKDDN = ${id}'`,
      ),
    );
    return result[0];
  }

  // ResolveField
  async DeNghiTSNT(kyduyet_DNInput: any): Promise<DeNghiTSNT> {
    const result = await this.kyDuyet_DNRepository.query(
      SP_GET_DATA_DECRYPT('DeNghiTSNTs', `'MaDN  = ${kyduyet_DNInput.MaDN}'`, 0, 1),
    );
    return result[0];
  }

  async DaiDienCATTPvaTD(kyduyet_DNInput: any): Promise<CBCS> {
    return this.dataloaderService.loaderCBCS.load(kyduyet_DNInput.MaDaiDienCATTPvaTD);
  }

  async DaiDienDonViDN(kyduyet_DNInput: any): Promise<CBCS> {
    return this.dataloaderService.loaderCBCS.load(kyduyet_DNInput.MaDaiDienDonViDN);
  }

  async DaiDienDonViTSNT(kyduyet_DNInput: any): Promise<CBCS> {
    return this.dataloaderService.loaderCBCS.load(kyduyet_DNInput.MaDaiDienDonViTSNT);
  }
}
