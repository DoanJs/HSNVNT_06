import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataLoaderModule } from 'src/dataloader/Dataloader.module';
import { LucLuongThamGiaKH } from './LucLuongThamGiaKH.model';
import { LucLuongThamGiaKHsResolver } from './LucLuongThamGiaKHs.resolver';
import { LucLuongThamGiaKHsService } from './LucLuongThamGiaKHs.service';

@Module({
  imports: [TypeOrmModule.forFeature([LucLuongThamGiaKH]), DataLoaderModule],
  providers: [LucLuongThamGiaKHsResolver, LucLuongThamGiaKHsService],
})
export class LucLuongThamGiaKHsModule { }
