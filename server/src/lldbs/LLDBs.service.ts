import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CBCS } from 'src/cbcss/CBCS.model';
import { DataLoaderService } from 'src/dataloader/Dataloader.service';
import { KeHoachTSNT } from 'src/kehoachTSNTs/KeHoachTSNT.model';
import { LoaiLLDB } from 'src/loaiLLDBs/LoaiLLDB.model';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { Repository } from 'typeorm';
import { LLDB } from './LLDB.model';
import { LLDBInput } from './type/LLDB.Input';
import { SP_CHANGE_DATA, SP_GET_DATA } from 'src/utils/mssql/query';

@Injectable()
export class LLDBsService {
  constructor(
    @InjectRepository(LLDB) private lldbRepository: Repository<LLDB>,
    private dataloaderService: DataLoaderService,
  ) { }
  public readonly lldb_DataInput = (lldbInput: LLDBInput) => {
    return {
      BiDanh: lldbInput.BiDanh ? `N''${lldbInput.BiDanh}''` : null,
      MaTSQuanLy: lldbInput.MaTSQuanLy ? lldbInput.MaTSQuanLy : null,
      MaLoaiLLDB: lldbInput.MaLoaiLLDB ? lldbInput.MaLoaiLLDB : null,
    };
  };

  lldbs(utilsParams: UtilsParamsInput): Promise<LLDB[]> {
    return this.lldbRepository.query(
      SP_GET_DATA(
        'LLDBs',
        "'MaLLDB != 0'",
        'MaLLDB',
        utilsParams.skip ? utilsParams.skip : 0,
        utilsParams.take ? utilsParams.take : 0,
      ),
    );
  }

  async lldb(id: number): Promise<LLDB> {
    const result = await this.lldbRepository.query(
      SP_GET_DATA('LLDBs', `'MaLLDB = ${id}'`, 'MaLLDB', 0, 1),
    );
    return result[0];
  }

  async createLLDB(lldbInput: LLDBInput): Promise<LLDB> {
    const { BiDanh, MaTSQuanLy, MaLoaiLLDB } = this.lldb_DataInput(lldbInput);
    const result = await this.lldbRepository.query(
      SP_CHANGE_DATA(
        "'CREATE'",
        'LLDBs',
        "'BiDanh, MaTSQuanLy, MaLoaiLLDB'",
        `N' ${this.lldb_DataInput(lldbInput).BiDanh},
            ${this.lldb_DataInput(lldbInput).MaTSQuanLy},
            ${this.lldb_DataInput(lldbInput).MaLoaiLLDB}
        '`,
        "'MaLLDB = SCOPE_IDENTITY()'",
      ),
    );
    return result[0];
  }

  async editLLDB(lldbInput: LLDBInput, id: number): Promise<LLDB> {
    const result = await this.lldbRepository.query(
      SP_CHANGE_DATA(
        "'EDIT'",
        'LLDBs',
        null,
        null,
        null,
        `N' BiDanh = ${this.lldb_DataInput(lldbInput).BiDanh},
            MaTSQuanLy = ${this.lldb_DataInput(lldbInput).MaTSQuanLy},
            MaLoaiLLDB = ${this.lldb_DataInput(lldbInput).MaLoaiLLDB}
        '`,
        `'MaLLDB = ${id}'`,
      ),
    );
    return result[0];
  }

  async deleteLLDB(id: number): Promise<LLDB> {
    const result = await this.lldbRepository.query(
      SP_CHANGE_DATA(
        "'DELETE'",
        'LLDBs',
        null,
        null,
        null,
        null,
        `"MaLLDB = ${id}"`,
      ),
    );
    return result[0];
  }

  // ResolveField

  async LoaiLLDB(lldb: any): Promise<LoaiLLDB> {
    return this.dataloaderService.loaderLoaiLLDB.load(lldb.MaLoaiLLDB);
  }

  async KeHoachTSNTs(MaLLDB: number): Promise<KeHoachTSNT[]> {
    const result = (await this.lldbRepository.query(
      SP_GET_DATA('KeHoachTSNTs_LLDBs', `'MaLLDB = ${MaLLDB}'`, 'MaKH', 0, 0)
    )) as [{ MaKH: number }];
    const resultLoader = result.map((obj) =>
      this.dataloaderService.loaderKeHoachTSNT.load(obj.MaKH),
    );
    return await Promise.all(resultLoader);
  }

  async TSQuanLy(lldb: any): Promise<CBCS> {
    return this.dataloaderService.loaderCBCS.load(lldb.MaTSQuanLy);
  }
}
