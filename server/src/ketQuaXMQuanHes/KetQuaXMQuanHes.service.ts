import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaoCaoPHQH } from 'src/baocaoPHQHs/BaoCaoPHQH.model';
import { CAQHvaTD } from 'src/caQHvaTD/CAQHvaTD.model';
import { CATTPvaTD } from 'src/caTTPvaTD/CATTPvaTD.model';
import { CBCS } from 'src/cbcss/CBCS.model';
import { DataLoaderService } from 'src/dataloader/Dataloader.service';
import { DeNghiTSNT } from 'src/denghiTSNTs/DeNghiTSNT.model';
import { DoiTuong } from 'src/doituongs/DoiTuong.model';
import { QuyetDinhTSNT } from 'src/quyetdinhTSNTs/QuyetDinhTSNT.model';
import {
  SP_CHANGE_DATA,
  SP_GET_DATA,
  SP_GET_DATA_DECRYPT,
} from 'src/utils/mssql/query';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { Repository } from 'typeorm';
import { KetQuaXMQuanHe } from './KetQuaXMQuanHe.model';
import { KetQuaXMQuanHeInput } from './type/KetQuaXMQuanHe.input';

@Injectable()
export class KetQuaXMQuanHesService {
  constructor(
    @InjectRepository(KetQuaXMQuanHe)
    private ketQuaXMQuanHeRepository: Repository<KetQuaXMQuanHe>,
    private readonly dataloaderService: DataLoaderService,
  ) {}

  public readonly ketquaXMQuanHe_DataInput = (
    ketquaXMQuanHeInput: KetQuaXMQuanHeInput,
  ) => {
    return {
      So: ketquaXMQuanHeInput.So ? `N''${ketquaXMQuanHeInput.So}''` : null,
      Ngay: ketquaXMQuanHeInput.Ngay ? `N''${ketquaXMQuanHeInput.Ngay}''` : null,
      MaQD: ketquaXMQuanHeInput.MaQD ? ketquaXMQuanHeInput.MaQD : null,
      MaDN: ketquaXMQuanHeInput.MaDN ? ketquaXMQuanHeInput.MaDN : null,
      MaCATTPvaTD: ketquaXMQuanHeInput.MaCATTPvaTD
        ? ketquaXMQuanHeInput.MaCATTPvaTD
        : null,
      MaCAQHvaTD: ketquaXMQuanHeInput.MaCAQHvaTD
        ? ketquaXMQuanHeInput.MaCAQHvaTD
        : null,
      MaDoiTuong: ketquaXMQuanHeInput.MaDoiTuong
        ? ketquaXMQuanHeInput.MaDoiTuong
        : null,
      MaLanhDaoPD: ketquaXMQuanHeInput.MaLanhDaoPD
        ? ketquaXMQuanHeInput.MaLanhDaoPD
        : null,
      MaBCPHQH: ketquaXMQuanHeInput.MaBCPHQH
        ? ketquaXMQuanHeInput.MaBCPHQH
        : null,
    };
  };

  ketQuaXMQuanHes(utilsParams: UtilsParamsInput): Promise<KetQuaXMQuanHe[]> {
    return this.ketQuaXMQuanHeRepository.query(
      SP_GET_DATA(
        'KetQuaXMQuanHes',
        "'MaKQXMQH != 0'",
        'MaKQXMQH',
        utilsParams.skip ? utilsParams.skip : 0,
        utilsParams.take ? utilsParams.take : 0,
      ),
    );
  }

  async ketQuaXMQuanHe(id: number): Promise<KetQuaXMQuanHe> {
    const result = await this.ketQuaXMQuanHeRepository.query(
      SP_GET_DATA('KetQuaXMQuanHes', `'MaKQXMQH = ${id}'`, 'MaKQXMQH', 0, 1),
    );
    return result[0];
  }

  async createKetQuaXMQuanHe(
    ketQuaXMQuanHe: KetQuaXMQuanHeInput,
  ): Promise<KetQuaXMQuanHe> {
    const result = await this.ketQuaXMQuanHeRepository.query(
      SP_CHANGE_DATA(
        "'CREATE'",
        'KetQuaXMQuanHes',
        "'So, Ngay, MaCATTPvaTD, MaCAQHvaTD, MaDoiTuong, MaQD, MaDN, MaLanhDaoPD, MaBCPHQH'",
        `N' ${this.ketquaXMQuanHe_DataInput(ketQuaXMQuanHe).So},
            ${this.ketquaXMQuanHe_DataInput(ketQuaXMQuanHe).Ngay},
            ${this.ketquaXMQuanHe_DataInput(ketQuaXMQuanHe).MaCATTPvaTD},
            ${this.ketquaXMQuanHe_DataInput(ketQuaXMQuanHe).MaCAQHvaTD},
            ${this.ketquaXMQuanHe_DataInput(ketQuaXMQuanHe).MaDoiTuong},
            ${this.ketquaXMQuanHe_DataInput(ketQuaXMQuanHe).MaQD},
            ${this.ketquaXMQuanHe_DataInput(ketQuaXMQuanHe).MaDN},
            ${this.ketquaXMQuanHe_DataInput(ketQuaXMQuanHe).MaLanhDaoPD},
            ${this.ketquaXMQuanHe_DataInput(ketQuaXMQuanHe).MaBCPHQH}
        '`,
        "'MaKQXMQH = SCOPE_IDENTITY()'",
      ),
    );
    return result[0];
  }

  async editKetQuaXMQuanHe(
    ketQuaXMQuanHe: KetQuaXMQuanHeInput,
    id: number,
  ): Promise<KetQuaXMQuanHe> {
    const result = await this.ketQuaXMQuanHeRepository.query(
      SP_CHANGE_DATA(
        "'EDIT'",
        'KetQuaXMQuanHes',
        null,
        null,
        null,
        `N' So = ${this.ketquaXMQuanHe_DataInput(ketQuaXMQuanHe).So},
            Ngay = ${this.ketquaXMQuanHe_DataInput(ketQuaXMQuanHe).Ngay},
            MaCATTPvaTD = ${
              this.ketquaXMQuanHe_DataInput(ketQuaXMQuanHe).MaCATTPvaTD
            },
            MaCAQHvaTD = ${
              this.ketquaXMQuanHe_DataInput(ketQuaXMQuanHe).MaCAQHvaTD
            },
            MaDoiTuong = ${
              this.ketquaXMQuanHe_DataInput(ketQuaXMQuanHe).MaDoiTuong
            },
            MaQD = ${this.ketquaXMQuanHe_DataInput(ketQuaXMQuanHe).MaQD},
            MaDN = ${this.ketquaXMQuanHe_DataInput(ketQuaXMQuanHe).MaDN},
            MaLanhDaoPD = ${
              this.ketquaXMQuanHe_DataInput(ketQuaXMQuanHe).MaLanhDaoPD
            },
            MaBCPHQH = ${this.ketquaXMQuanHe_DataInput(ketQuaXMQuanHe).MaBCPHQH}
        '`,
        `'MaKQXMQH = ${id}'`,
      ),
    );
    return result[0];
  }

  async deleteKetQuaXMQuanHe(id: number): Promise<KetQuaXMQuanHe> {
    const result = await this.ketQuaXMQuanHeRepository.query(
      SP_CHANGE_DATA(
        "'DELETE'",
        'KetQuaXMQuanHes',
        null,
        null,
        null,
        null,
        `'MaKQXMQH = ${id}'`,
      ),
    );
    return result[0];
  }

  // ResolveField

  async BaoCaoPHQH(ketquaXMQuanHe: any): Promise<BaoCaoPHQH> {
    const result = await this.ketQuaXMQuanHeRepository.query(
      SP_GET_DATA_DECRYPT(
        'BaoCaoPHQHs',
        `'MaBCPHQH  = ${ketquaXMQuanHe.MaBCPHQH}'`,
        0,
        1,
      ),
    );
    return result[0];
  }

  async DeNghiTSNT(ketquaXMDiaChi: any): Promise<DeNghiTSNT> {
    return this.dataloaderService.loaderDeNghiTSNT.load(ketquaXMDiaChi.MaDN);
  }
  async QuyetDinhTSNT(ketquaXMDiaChi: any): Promise<QuyetDinhTSNT> {
    return this.dataloaderService.loaderQuyetDinhTSNT.load(ketquaXMDiaChi.MaQD);
  }
  async CATTPvaTD(ketquaXMDiaChi: any): Promise<CATTPvaTD> {
    return this.dataloaderService.loaderCATTPvaTD.load(
      ketquaXMDiaChi.MaCATTPvaTD,
    );
  }
  async CAQHvaTD(ketquaXMDiaChi: any): Promise<CAQHvaTD> {
    return this.dataloaderService.loaderCAQHvaTD.load(
      ketquaXMDiaChi.MaCAQHvaTD,
    );
  }
  async DoiTuong(ketquaXMDiaChi: any): Promise<DoiTuong> {
    return this.dataloaderService.loaderDoiTuong.load(
      ketquaXMDiaChi.MaDoiTuong,
    );
  }
  async LanhDaoPD(ketquaXMDiaChi: any): Promise<CBCS> {
    return this.dataloaderService.loaderCBCS.load(ketquaXMDiaChi.MaLanhDaoPD);
  }
}
