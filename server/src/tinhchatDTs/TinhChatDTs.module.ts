import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TinhChatDT } from './TinhChatDT.model';
import { TinhChatDTsResolver } from './TinhChatDTs.resolver';
import { TinhChatDTsService } from './TinhChatDTs.service';

@Module({
  imports: [TypeOrmModule.forFeature([TinhChatDT])],
  providers: [TinhChatDTsResolver, TinhChatDTsService],
})
export class TinhChatDTsModule { }
