import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaoCaoPHQH } from 'src/baocaoPHQHs/BaoCaoPHQH.model';
import { CAQHvaTD } from 'src/caQHvaTD/CAQHvaTD.model';
import { CBCS } from 'src/cbcss/CBCS.model';
import { DataLoaderService } from 'src/dataloader/Dataloader.service';
import { Doi } from 'src/dois/Doi.model';
import {
  SP_CHANGE_BAOCAOKQXMQUANHE,
  SP_GET_DATA_DECRYPT,
} from 'src/utils/mssql/query';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { Repository } from 'typeorm';
import { BaoCaoKQXMQuanHe } from './BaoCaoKQXMQuanHe.model';
import { BaoCaoKQXMQuanHeInput } from './type/BaoCaoKQXMQuanHe.input';

@Injectable()
export class BaoCaoKQXMQuanHesService {
  constructor(
    @InjectRepository(BaoCaoKQXMQuanHe)
    private baocaoKQXMQuanHeRepository: Repository<BaoCaoKQXMQuanHe>,
    private dataloaderService: DataLoaderService,
  ) { }
  public readonly baocaoKQXMQuanHe_DataInput = (
    Type: string,
    MaBCKQXMQH: number | null,
    baocaoKQXMQuanHeInput: BaoCaoKQXMQuanHeInput,
  ) => {
    return {
      Type,
      MaBCKQXMQH,
      BaoCaoKQXMQuanHeInput: {
        Ngay: baocaoKQXMQuanHeInput.Ngay
          ? baocaoKQXMQuanHeInput.Ngay
          : null,
        HoTen: `N'${baocaoKQXMQuanHeInput.HoTen}'`, //crypto
        TenKhac: baocaoKQXMQuanHeInput.TenKhac
          ? `N'${baocaoKQXMQuanHeInput.TenKhac}'`
          : null,
        GioiTinh: baocaoKQXMQuanHeInput.GioiTinh
          ? baocaoKQXMQuanHeInput.GioiTinh
          : null,
        NamSinh: baocaoKQXMQuanHeInput.NamSinh
          ? baocaoKQXMQuanHeInput.NamSinh
          : null,
        QueQuan: baocaoKQXMQuanHeInput.QueQuan
          ? `N'${baocaoKQXMQuanHeInput.QueQuan}'`
          : null,
        HKTT: baocaoKQXMQuanHeInput.HKTT
          ? `N'${baocaoKQXMQuanHeInput.HKTT}'`
          : null,
        NoiO: `N'${baocaoKQXMQuanHeInput.NoiO}'`, //crypto
        NgheNghiep: baocaoKQXMQuanHeInput.NgheNghiep
          ? `N'${baocaoKQXMQuanHeInput.NgheNghiep}'`
          : null,
        ChucVu: baocaoKQXMQuanHeInput.ChucVu
          ? `N'${baocaoKQXMQuanHeInput.ChucVu}'`
          : null,
        NoiLamViec: baocaoKQXMQuanHeInput.NoiLamViec
          ? `N'${baocaoKQXMQuanHeInput.NoiLamViec}'`
          : null,
        QuanHeGDXH: baocaoKQXMQuanHeInput.QuanHeGDXH
          ? `N'${baocaoKQXMQuanHeInput.QuanHeGDXH}'`
          : null,
        BienPhapXM: baocaoKQXMQuanHeInput.BienPhapXM
          ? `N'${baocaoKQXMQuanHeInput.BienPhapXM}'`
          : null,

        MaCAQHvaTD: baocaoKQXMQuanHeInput.MaCAQHvaTD
          ? baocaoKQXMQuanHeInput.MaCAQHvaTD
          : null,
        MaDoi: baocaoKQXMQuanHeInput.MaDoi ? baocaoKQXMQuanHeInput.MaDoi : null,
        MaDoiTuong: baocaoKQXMQuanHeInput.MaDoiTuong ? baocaoKQXMQuanHeInput.MaDoiTuong : null,
        MaQD: baocaoKQXMQuanHeInput.MaQD ? baocaoKQXMQuanHeInput.MaQD : null,
        MaBCPHQH: baocaoKQXMQuanHeInput.MaBCPHQH ? baocaoKQXMQuanHeInput.MaBCPHQH : null,
        MaLanhDaoPD: baocaoKQXMQuanHeInput.MaLanhDaoPD
          ? baocaoKQXMQuanHeInput.MaLanhDaoPD
          : null,
        MaBCHPhuTrach: baocaoKQXMQuanHeInput.MaBCHPhuTrach
          ? baocaoKQXMQuanHeInput.MaBCHPhuTrach
          : null,
        MaTSXacMinh: baocaoKQXMQuanHeInput.MaTSXacMinh
          ? baocaoKQXMQuanHeInput.MaTSXacMinh
          : null,
      },
    };
  };

  baocaoKQXMQuanHes(
    utilsParams: UtilsParamsInput,
  ): Promise<BaoCaoKQXMQuanHe[]> {
    return this.baocaoKQXMQuanHeRepository.query(
      SP_GET_DATA_DECRYPT(
        'BaoCaoKQXMQuanHes',
        "'MaBCKQXMQH != 0'",
        utilsParams.skip && utilsParams.skip > 0 ? utilsParams.skip : 0,
        utilsParams.take && utilsParams.take > 0 ? utilsParams.take : 0,
      ),
    );
  }

  async baocaoKQXMQuanHe(id: number): Promise<BaoCaoKQXMQuanHe> {
    const result = await this.baocaoKQXMQuanHeRepository.query(
      SP_GET_DATA_DECRYPT('BaoCaoKQXMQuanHes', `"MaBCKQXMQH = ${id}"`, 0, 1),
    );
    return result[0];
  }

  async createBaoCaoKQXMQuanHe(
    baocaoKQXMQuanHeInput: BaoCaoKQXMQuanHeInput,
  ): Promise<BaoCaoKQXMQuanHe> {
    const result = await this.baocaoKQXMQuanHeRepository.query(
      SP_CHANGE_BAOCAOKQXMQUANHE(
        this.baocaoKQXMQuanHe_DataInput('CREATE', null, baocaoKQXMQuanHeInput),
      ),
    );
    return result[0];
  }

  async editBaoCaoKQXMQuanHe(
    baocaoKQXMQuanHeInput: BaoCaoKQXMQuanHeInput,
    id: number,
  ): Promise<BaoCaoKQXMQuanHe> {
    const result = await this.baocaoKQXMQuanHeRepository.query(
      SP_CHANGE_BAOCAOKQXMQUANHE(
        this.baocaoKQXMQuanHe_DataInput('EDIT', id, baocaoKQXMQuanHeInput),
      ),
    );
    return result[0];
  }

  async deleteBaoCaoKQXMQuanHe(
    baocaoKQXMQuanHeInput: BaoCaoKQXMQuanHeInput,
    id: number,
  ): Promise<BaoCaoKQXMQuanHe> {
    const result = await this.baocaoKQXMQuanHeRepository.query(
      SP_CHANGE_BAOCAOKQXMQUANHE(
        this.baocaoKQXMQuanHe_DataInput('DELETE', id, baocaoKQXMQuanHeInput),
      ),
    );
    return result[0];
  }

  // ResolveField

  async CAQHvaTD(baocaoKQXMQuanHe: any): Promise<CAQHvaTD> {
    return this.dataloaderService.loaderCAQHvaTD.load(baocaoKQXMQuanHe.MaDonVi);
  }

  async Doi(baocaoKQXMQuanHe: any): Promise<Doi> {
    return this.dataloaderService.loaderDoi.load(baocaoKQXMQuanHe.MaDoi);
  }

  async TSXacMinh(baocaoKQXMQuanHe: any): Promise<CBCS> {
    return this.dataloaderService.loaderCBCS.load(baocaoKQXMQuanHe.MaTSXacMinh);
  }

  async LanhDaoPD(baocaoKQXMQuanHe: any): Promise<CBCS> {
    return this.dataloaderService.loaderCBCS.load(baocaoKQXMQuanHe.MaLanhDaoPD);
  }

  async BanChiHuy(baocaoKQXMQuanHe: any): Promise<CBCS> {
    return this.dataloaderService.loaderCBCS.load(baocaoKQXMQuanHe.MaBanChiHuy);
  }

  async BaoCaoPHQH(baocaoKQXMQuanHe: any): Promise<BaoCaoPHQH> {
    const result = await this.baocaoKQXMQuanHeRepository.query(
      SP_GET_DATA_DECRYPT(
        'BaoCaoPHQHs',
        `'MaBCPHQH = ${baocaoKQXMQuanHe.MaBaoCaoPHQH}'`,
        0,
        1,
      ),
    );
    return result[0];
  }
}
