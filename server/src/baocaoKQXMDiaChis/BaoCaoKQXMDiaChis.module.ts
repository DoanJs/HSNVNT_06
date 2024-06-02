import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataLoaderModule } from 'src/dataloader/Dataloader.module';
import { BaoCaoKQXMDiaChi } from './BaoCaoKQXMDiaChi.model';
import { BaoCaoKQXMDiaChisResolver } from './BaoCaoKQXMDiaChis.resolver';
import BaoCaoKQXMDiaChisService from './BaoCaoKQXMDiaChis.service';

@Module({
  imports: [TypeOrmModule.forFeature([BaoCaoKQXMDiaChi]), DataLoaderModule],
  providers: [BaoCaoKQXMDiaChisResolver, BaoCaoKQXMDiaChisService],
})
export class BaoCaoKQXMDiaChisModule {}
