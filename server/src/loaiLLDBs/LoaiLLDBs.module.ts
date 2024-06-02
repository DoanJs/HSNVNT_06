import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoaiLLDB } from './LoaiLLDB.model';
import { LoaiLLDBsResolver } from './LoaiLLDBs.resolver';
import { LoaiLLDBsService } from './LoaiLLDBs.service';

@Module({
  imports: [TypeOrmModule.forFeature([LoaiLLDB])],
  providers: [LoaiLLDBsResolver, LoaiLLDBsService],
})
export class LoaiLLDBsModule { }
