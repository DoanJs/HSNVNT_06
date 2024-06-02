import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChuyenAn } from 'src/chuyenans/ChuyenAn.model';
import { DoiTuong } from 'src/doituongs/DoiTuong.model';
import {
  SP_CHANGE_DATA,
  SP_GET_DATA,
  SP_GET_DATA_DECRYPT,
} from 'src/utils/mssql/query';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { Repository } from 'typeorm';
import { TinhChatDT } from './TinhChatDT.model';

@Injectable()
export class TinhChatDTsService {
  constructor(
    @InjectRepository(TinhChatDT)
    private tinhchatDTRepository: Repository<TinhChatDT>,
  ) {}

  public readonly tinhChatDT_DataInput = (tinhChat: string) => {
    return {
      TinhChat: tinhChat ? `N''${tinhChat}''` : null,
    };
  };

  tinhChatDTs(utilsParams: UtilsParamsInput): Promise<TinhChatDT[]> {
    return this.tinhchatDTRepository.query(
      SP_GET_DATA(
        'TinhChatDTs',
        "'MaTCDT != 0'",
        'MaTCDT',
        utilsParams.skip ? utilsParams.skip : 0,
        utilsParams.take ? utilsParams.take : 0,
      ),
    );
  }

  async tinhChatDT(id: number): Promise<TinhChatDT> {
    const result = await this.tinhchatDTRepository.query(
      SP_GET_DATA('TinhChatDTs', `'MaTCDT = ${id}'`, 'MaTCDT', 0, 1),
    );
    return result[0];
  }

  async createTinhChatDT(tinhchat: string): Promise<TinhChatDT> {
    const result = await this.tinhchatDTRepository.query(
      SP_CHANGE_DATA(
        "'CREATE'",
        'TinhChatDTs',
        'TinhChat',
        `N' ${this.tinhChatDT_DataInput(tinhchat).TinhChat}'`,
        "'MaTCDT = SCOPE_IDENTITY()'",
      ),
    );
    return result[0];
  }

  async editTinhChatDT(tinhchat: string, id: number): Promise<TinhChatDT> {
    const result = await this.tinhchatDTRepository.query(
      SP_CHANGE_DATA(
        "'EDIT'",
        'TinhChatDTs',
        null,
        null,
        null,
        `N' TinhChat = ${this.tinhChatDT_DataInput(tinhchat).TinhChat}'`,
        `'MaTCDT = ${id}'`,
      ),
    );
    return result[0];
  }

  async deleteTinhChatDT(id: number): Promise<TinhChatDT> {
    const result = await this.tinhchatDTRepository.query(
      SP_CHANGE_DATA(
        "'DELETE'",
        'TinhChatDTs',
        null,
        null,
        null,
        null,
        `"MaTCDT = ${id}"`,
      ),
    );
    return result[0];
  }

  // ResolveField

  DoiTuongs(MaTCDT: number): Promise<DoiTuong[]> {
    return this.tinhchatDTRepository.query(
      SP_GET_DATA_DECRYPT('DoiTuongs', `'MaTC = ${MaTCDT}'`, 0, 0),
    );
  }

  ChuyenAns(MaTCDT: number): Promise<ChuyenAn[]> {
    return this.tinhchatDTRepository.query(
      SP_GET_DATA_DECRYPT('ChuyenAns', `'MaTC = ${MaTCDT}'`, 0, 0),
    );
  }
}
