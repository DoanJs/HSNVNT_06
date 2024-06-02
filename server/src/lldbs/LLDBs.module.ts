import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LLDB } from './LLDB.model';
import { LLDBsResolver } from './LLDBs.resolver';
import { LLDBsService } from './LLDBs.service';
import { DataLoaderModule } from 'src/dataloader/Dataloader.module';

@Module({
  imports: [DataLoaderModule, TypeOrmModule.forFeature([LLDB])],
  providers: [LLDBsResolver, LLDBsService],
})
export class LLDBsModule {}
