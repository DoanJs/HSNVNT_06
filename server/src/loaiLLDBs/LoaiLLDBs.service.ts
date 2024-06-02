import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LLDB } from 'src/lldbs/LLDB.model';
import { SP_CHANGE_DATA, SP_GET_DATA } from 'src/utils/mssql/query';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { Repository } from 'typeorm';
import { LoaiLLDB } from './LoaiLLDB.model';
import { LoaiLLDBInput } from './type/LoaiLLDB.Input';

@Injectable()
export class LoaiLLDBsService {
  constructor(
    @InjectRepository(LoaiLLDB)
    private loaiLLDBRepository: Repository<LoaiLLDB>,
  ) {}

  public readonly loaiLLDB_DataInput = (loaiLLDBInput: LoaiLLDBInput) => {
    return {
      TenLLDB: loaiLLDBInput.TenLLDB ? `N''${loaiLLDBInput.TenLLDB}''` : null,
      KyHieu: loaiLLDBInput.KyHieu ? `N''${loaiLLDBInput.KyHieu}''` : null,
    };
  };

  loaiLLDBs(utilsParams: UtilsParamsInput): Promise<LoaiLLDB[]> {
    return this.loaiLLDBRepository.query(
      SP_GET_DATA(
        'LoaiLLDBs',
        "'MaLoaiLLDB != 0'",
        'MaLoaiLLDB',
        utilsParams.skip ? utilsParams.skip : 0,
        utilsParams.take ? utilsParams.take : 0,
      ),
    );
  }

  async loaiLLDB(id: number): Promise<LoaiLLDB> {
    const result = await this.loaiLLDBRepository.query(
      SP_GET_DATA('LoaiLLDBs', `'MaLoaiLLDB = ${id}'`, 'MaLoaiLLDB', 0, 1),
    );
    return result[0];
  }

  async createLoaiLLDB(loaiLLDBInput: LoaiLLDBInput): Promise<LoaiLLDB> {
    const result = await this.loaiLLDBRepository.query(
      SP_CHANGE_DATA(
        "'CREATE'",
        'LoaiLLDBs',
        "'TenLLDB, KyHieu'",
        `N' ${this.loaiLLDB_DataInput(loaiLLDBInput).TenLLDB},
            ${this.loaiLLDB_DataInput(loaiLLDBInput).KyHieu}
        '`,
        "'MaLoaiLLDB = SCOPE_IDENTITY()'",
      ),
    );
    return result[0];
  }

  async editLoaiLLDB(
    loaiLLDBInput: LoaiLLDBInput,
    id: number,
  ): Promise<LoaiLLDB> {
    const result = await this.loaiLLDBRepository.query(
      SP_CHANGE_DATA(
        "'EDIT'",
        'LoaiLLDBs',
        null,
        null,
        null,
        `N' TenLLDB = ${this.loaiLLDB_DataInput(loaiLLDBInput).TenLLDB},
            KyHieu = ${this.loaiLLDB_DataInput(loaiLLDBInput).KyHieu}
        '`,
        `'MaLoaiLLDB = ${id}'`,
      ),
    );
    return result[0];
  }

  async deleteLoaiLLDB(id: number): Promise<LoaiLLDB> {
    const result = await this.loaiLLDBRepository.query(
      SP_CHANGE_DATA(
        "'DELETE'",
        'LoaiLLDBs',
        null,
        null,
        null,
        null,
        `'MaLoaiLLDB = ${id}'`,
      ),
    );
    return result[0];
  }

  // ResolveField

  LLDBs(MaLoaiLLDB: number): Promise<LLDB[]> {
    return this.loaiLLDBRepository.query(
      SP_GET_DATA('LLDBs', `'MaLoaiLLDB = ${MaLoaiLLDB}'`, 'MaLLDB', 0, 0)
    );
  }
}
