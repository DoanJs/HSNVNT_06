import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataLoaderModule } from 'src/dataloader/Dataloader.module';
import { KeHoachTSNT } from './KeHoachTSNT.model';
import { KeHoachTSNTsResolver } from './KeHoachTSNTs.resolver';
import { KeHoachTSNTsService } from './KeHoachTSNTs.service';

@Module({
  imports: [TypeOrmModule.forFeature([KeHoachTSNT]), DataLoaderModule],
  providers: [KeHoachTSNTsResolver, KeHoachTSNTsService],
})
export class KeHoachTSNTsModule { }
