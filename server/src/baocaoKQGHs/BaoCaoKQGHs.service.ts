import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CAQHvaTD } from 'src/caQHvaTD/CAQHvaTD.model';
import { CBCS } from 'src/cbcss/CBCS.model';
import { DataLoaderService } from 'src/dataloader/Dataloader.service';
import { Doi } from 'src/dois/Doi.model';
import { DoiTuong } from 'src/doituongs/DoiTuong.model';
import { KetQuaTSNT } from 'src/ketquaTSNTs/KetQuaTSNT.model';
import {
  SP_CHANGE_BAOCAOKQGH,
  SP_GET_DATA,
  SP_GET_DATA_DECRYPT,
} from 'src/utils/mssql/query';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { Repository } from 'typeorm';
import { BaoCaoKQGH } from './BaoCaoKQGH.model';
import { BaoCaoKQGHInput } from './type/BaoCaoKQGH.input';

@Injectable()
export class BaoCaoKQGHsService {
  constructor(
    @InjectRepository(BaoCaoKQGH)
    private baocaoKQGHRepository: Repository<BaoCaoKQGH>,
    private dataloaderService: DataLoaderService,
  ) {}
  public readonly baocaoKQGH_DataInput = (
    Type: string,
    MaBCKQGH: number | null,
    baocaoKQGHInput: BaoCaoKQGHInput,
  ) => {
    return {
      Type,
      MaBCKQGH,
      BaoCaoKQGHInput: {
        Ngay: baocaoKQGHInput.Ngay ? baocaoKQGHInput.Ngay : null,
        HinhAnh: `N'${baocaoKQGHInput.HinhAnh}'`, //crypto
        MucDich: baocaoKQGHInput.MucDich
          ? `N'${baocaoKQGHInput.MucDich}'`
          : null,
        ThoiGian: baocaoKQGHInput.ThoiGian ? baocaoKQGHInput.ThoiGian : null,
        DiaDiem: baocaoKQGHInput.DiaDiem
          ? `N'${baocaoKQGHInput.DiaDiem}'`
          : null,
        PhuongTienSD: baocaoKQGHInput.PhuongTienSD
          ? `N'${baocaoKQGHInput.PhuongTienSD}'`
          : null,
        VaiNguyTrang: baocaoKQGHInput.VaiNguyTrang
          ? `N'${baocaoKQGHInput.VaiNguyTrang}'`
          : null,
        NoiDung: baocaoKQGHInput.NoiDung
          ? `N'${baocaoKQGHInput.NoiDung}'`
          : null,

        MaKQ: baocaoKQGHInput.MaKQ ? baocaoKQGHInput.MaKQ : null,
        MaCAQHvaTD: baocaoKQGHInput.MaCAQHvaTD
          ? baocaoKQGHInput.MaCAQHvaTD
          : null,
        MaDoi: baocaoKQGHInput.MaDoi ? baocaoKQGHInput.MaDoi : null,
        MaDoiTuong: baocaoKQGHInput.MaDoiTuong
          ? baocaoKQGHInput.MaDoiTuong
          : null,
        MaLanhDaoPD: baocaoKQGHInput.MaLanhDaoPD
          ? baocaoKQGHInput.MaLanhDaoPD
          : null,
      },
    };
  };

  baocaoKQGHs(utilsParams: UtilsParamsInput): Promise<BaoCaoKQGH[]> {
    return this.baocaoKQGHRepository.query(
      SP_GET_DATA_DECRYPT(
        'BaoCaoKQGHs',
        "'MaBCKQGH != 0'",
        utilsParams.skip ? utilsParams.skip : 0,
        utilsParams.take ? utilsParams.take : 0,
      ),
    );
  }

  async baocaoKQGH(id: number): Promise<BaoCaoKQGH> {
    const result = await this.baocaoKQGHRepository.query(
      SP_GET_DATA_DECRYPT('BaoCaoKQGHs', `'MaBCKQGH = ${id}'`, 0, 1),
    );
    return result[0];
  }

  async createBaoCaoKQGH(
    baocaoKQGHInput: BaoCaoKQGHInput,
  ): Promise<BaoCaoKQGH> {
    const result = await this.baocaoKQGHRepository.query(
      SP_CHANGE_BAOCAOKQGH(
        this.baocaoKQGH_DataInput('CREATE', null, baocaoKQGHInput),
      ),
    );
    return result[0];
  }

  async editBaoCaoKQGH(
    baocaoKQGHInput: BaoCaoKQGHInput,
    id: number,
  ): Promise<BaoCaoKQGH> {
    const BaoCaoKQGHs = await this.baocaoKQGHRepository.query(
      SP_CHANGE_BAOCAOKQGH(
        this.baocaoKQGH_DataInput('EDIT', id, baocaoKQGHInput),
      ),
    );
    return BaoCaoKQGHs[0];
  }

  async deleteBaoCaoKQGH(
    baocaoKQGHInput: BaoCaoKQGHInput,
    id: number,
  ): Promise<BaoCaoKQGH> {
    const result = await this.baocaoKQGHRepository.query(
      SP_CHANGE_BAOCAOKQGH(
        this.baocaoKQGH_DataInput('DELETE', id, baocaoKQGHInput),
      ),
    );
    return result[0];
  }

  // ResolveField
  async KetQuaTSNT(baocaoKQGH: any): Promise<KetQuaTSNT> {
    return this.dataloaderService.loaderKetQuaTSNT.load(baocaoKQGH.MaKQ);
  }

  async CAQHvaTD(baocaoKQGH: any): Promise<CAQHvaTD> {
    return this.dataloaderService.loaderCAQHvaTD.load(baocaoKQGH.MaDonVi);
  }

  async Doi(baocaoKQGH: any): Promise<Doi> {
    return this.dataloaderService.loaderDoi.load(baocaoKQGH.MaDoi);
  }

  async TSThucHiens(MaBCKQGH: number): Promise<CBCS[]> {
    const result = (await this.baocaoKQGHRepository.query(
      SP_GET_DATA(
        'BaoCaoKQGHs_CBCSs',
        `'MaBCKQGH = ${MaBCKQGH}'`,
        'MaCBCS',
        0,
        0,
      ),
    )) as [{ MaCBCS: number }];
    const resultLoader = result.map((obj) =>
      this.dataloaderService.loaderCBCS.load(obj.MaCBCS),
    );
    return await Promise.all(resultLoader);
  }

  async DoiTuong(baocaoKQGH: any): Promise<DoiTuong> {
    return this.dataloaderService.loaderDoiTuong.load(baocaoKQGH.MaDoiTuong);
  }

  async LanhDaoPD(baocaoKQGH: any): Promise<CBCS> {
    return this.dataloaderService.loaderCBCS.load(baocaoKQGH.MaLanhDaoPD);
  }
}
