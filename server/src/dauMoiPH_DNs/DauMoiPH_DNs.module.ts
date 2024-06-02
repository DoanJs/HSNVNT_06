import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataLoaderModule } from 'src/dataloader/Dataloader.module';
import { DauMoiPH_DN } from './DauMoiPH_DN.model';
import { DauMoiPH_DNsResolver } from './DauMoiPH_DNs.resolver';
import { DauMoiPH_DNsService } from './DauMoiPH_DNs.service';

@Module({
  imports: [TypeOrmModule.forFeature([DauMoiPH_DN]), DataLoaderModule],
  providers: [DauMoiPH_DNsResolver, DauMoiPH_DNsService],
})
export class DauMoiPH_DNModule {}
