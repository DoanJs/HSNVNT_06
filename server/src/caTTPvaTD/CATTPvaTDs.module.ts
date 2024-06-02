import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CATTPvaTD } from './CATTPvaTD.model';
import { CATTPvaTDsResolver } from './CATTPvaTDs.resolver';
import { CATTPvaTDsService } from './CATTPvaTDs.service';
import { DataLoaderModule } from 'src/dataloader/Dataloader.module';

@Module({
  imports: [TypeOrmModule.forFeature([CATTPvaTD]), DataLoaderModule],
  providers: [CATTPvaTDsResolver, CATTPvaTDsService],
})
export class CATTPvaTDsModule { }
