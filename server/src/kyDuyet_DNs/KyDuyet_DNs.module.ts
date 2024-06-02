import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataLoaderModule } from 'src/dataloader/Dataloader.module';
import { KyDuyet_DN } from './KyDuyet_DN.model';
import { KyDuyet_DNsResolver } from './KyDuyet_DNs.resolver';
import { KyDuyet_DNsService } from './KyDuyet_DNs.service';

@Module({
  imports: [TypeOrmModule.forFeature([KyDuyet_DN]), DataLoaderModule],
  providers: [KyDuyet_DNsResolver, KyDuyet_DNsService],
})
export class KyDuyet_DNsModule { }
