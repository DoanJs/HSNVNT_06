import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataLoaderModule } from 'src/dataloader/Dataloader.module';
import { DanhGiaTSTH } from './DanhGiaTSTH.model';
import { DanhGiaTSTHsResolver } from './DanhGiaTSTHs.resolver';
import { DanhGiaTSTHsService } from './DanhGiaTSTHs.service';

@Module({
  imports: [TypeOrmModule.forFeature([DanhGiaTSTH]), DataLoaderModule],
  providers: [DanhGiaTSTHsResolver, DanhGiaTSTHsService],
})
export class DanhGiaTSTHsModule {}
