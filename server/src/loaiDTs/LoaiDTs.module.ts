import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoaiDT } from './LoaiDT.model';
import { LoaiDTsResolver } from './LoaiDTs.resolver';
import { LoaiDTsService } from './LoaiDTs.service';

@Module({
  imports: [TypeOrmModule.forFeature([LoaiDT])],
  providers: [LoaiDTsResolver, LoaiDTsService],
})
export class LoaiDTsModule { }
