import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TramCT } from './TramCT.model';
import { TramCTInput } from './type/TramCT.input';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { SP_CHANGE_TRAMCT, SP_GET_DATA_DECRYPT } from 'src/utils/mssql/query';
import { KeHoachTSNT } from 'src/kehoachTSNTs/KeHoachTSNT.model';
import { CBCS } from 'src/cbcss/CBCS.model';
import { DataLoaderService } from 'src/dataloader/Dataloader.service';
import { CAQHvaTD } from 'src/caQHvaTD/CAQHvaTD.model';
import { Doi } from 'src/dois/Doi.model';

@Injectable()
export class TramCTsService {
  constructor(
    @InjectRepository(TramCT)
    private tramCTRepository: Repository<TramCT>,
    private dataloaderService: DataLoaderService,
  ) { }
  public readonly tramCT_DataInput = (
    Type: string,
    MaTramCT: number | null,
    tramCTInput: TramCTInput,
  ) => {
    return {
      Type,
      MaTramCT,
      TramCTInput: {
        Ngay: tramCTInput.Ngay ? `N'${tramCTInput.Ngay}'` : null,
        DiaDiem: `N'${tramCTInput.DiaDiem}'`, // crypto
        TinhHinhDB: tramCTInput.TinhHinhDB
          ? `N'${tramCTInput.TinhHinhDB}'`
          : null,
        LyLichTram: `N'${tramCTInput.LyLichTram}'`, // crypto
        SoDoTram: `N'${tramCTInput.SoDoTram}'`, // crypto
        VanDeChuY: tramCTInput.VanDeChuY ? `N'${tramCTInput.VanDeChuY}'` : null,
        QuyDinh: tramCTInput.QuyDinh ? `N'${tramCTInput.QuyDinh}'` : null,
        MaCAQHvaTD: tramCTInput.MaCAQHvaTD ? tramCTInput.MaCAQHvaTD : null,
        MaDoi: tramCTInput.MaDoi ? tramCTInput.MaDoi : null,
        MaTSXayDung: tramCTInput.MaTSXayDung ? tramCTInput.MaTSXayDung : null,
        MaLanhDaoPD: tramCTInput.MaLanhDaoPD ? tramCTInput.MaLanhDaoPD : null,
      },
    };
  };

  tramCTs(utilsParams: UtilsParamsInput): Promise<TramCT[]> {
    return this.tramCTRepository.query(
      SP_GET_DATA_DECRYPT(
        'TramCTs',
        "'MaTramCT != 0'",
        utilsParams.skip && utilsParams.skip > 0 ? utilsParams.skip : 0,
        utilsParams.take && utilsParams.take > 0 ? utilsParams.take : 0,
      ),
    );
  }

  async tramCT(id: number): Promise<TramCT> {
    const result = await this.tramCTRepository.query(
      SP_GET_DATA_DECRYPT('TramCTs', `"MaTramCT = ${id}"`, 0, 1),
    );
    return result[0];
  }

  async createTramCT(tramCTInput: TramCTInput): Promise<TramCT> {
    const result = await this.tramCTRepository.query(
      SP_CHANGE_TRAMCT(this.tramCT_DataInput('CREATE', null, tramCTInput)),
    );
    return result[0];
  }

  async editTramCT(tramCTInput: TramCTInput, id: number): Promise<TramCT> {
    const result = await this.tramCTRepository.query(
      SP_CHANGE_TRAMCT(this.tramCT_DataInput('EDIT', id, tramCTInput)),
    );
    return result[0];
  }

  async deleteTramCT(tramCTInput: TramCTInput, id: number): Promise<TramCT> {
    const cbcss = await this.tramCTRepository.query(
      SP_CHANGE_TRAMCT(this.tramCT_DataInput('DELETE', id, tramCTInput)),
    );
    return cbcss[0];
  }

  // ResolveField
  KeHoachTSNTs(MaTramCT: number): Promise<KeHoachTSNT[]> {
    return this.tramCTRepository.query(
      SP_GET_DATA_DECRYPT('KeHoachTSNTs', `'MaTramCT = ${MaTramCT}'`, 0, 0),
    );
  }

  async TSXayDung(tramCT: any): Promise<CBCS> {
    return this.dataloaderService.loaderCBCS.load(tramCT.MaTSXayDung);
  }

  async LanhDaoPD(tramCT: any): Promise<CBCS> {
    return this.dataloaderService.loaderCBCS.load(tramCT.MaLanhDaoPD);
  }

  async CAQHvaTD(tramCT: any): Promise<CAQHvaTD> {
    return this.dataloaderService.loaderCAQHvaTD.load(tramCT.MaCAQHvaTD)
  }

  async Doi(tramCT: any): Promise<Doi> {
    return this.dataloaderService.loaderDoi.load(tramCT.MaDoi)
  }
}
