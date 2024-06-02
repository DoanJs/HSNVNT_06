import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataLoaderModule } from 'src/dataloader/Dataloader.module';
import { Doi } from './Doi.model';
import { DoisResolver } from './Dois.resolver';
import { DoisService } from './Dois.service';

@Module({
  imports: [TypeOrmModule.forFeature([Doi]), DataLoaderModule],
  providers: [DoisResolver, DoisService],
})
export class DoisModule {}
