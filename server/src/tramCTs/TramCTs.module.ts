import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataLoaderModule } from 'src/dataloader/Dataloader.module';
import { TramCT } from './TramCT.model';
import { TramCTsResolver } from './TramCTs.resolver';
import { TramCTsService } from './TramCTs.service';

@Module({
  imports: [TypeOrmModule.forFeature([TramCT]), DataLoaderModule],
  providers: [TramCTsResolver, TramCTsService],
})
export class TramCTsModule { }
