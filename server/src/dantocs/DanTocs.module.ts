import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CBCS } from 'src/cbcss/CBCS.model';
import { DataLoaderModule } from 'src/dataloader/Dataloader.module';
import { DanToc } from './DanToc.model';
import { DanTocsResolver } from './DanTocs.resolver';
import { DanTocsService } from './DanTocs.service';

@Module({
  imports: [TypeOrmModule.forFeature([DanToc, CBCS]), DataLoaderModule],
  providers: [DanTocsResolver, DanTocsService],
})
export class DanTocsModule {}
