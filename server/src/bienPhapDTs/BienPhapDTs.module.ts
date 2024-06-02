import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataLoaderModule } from 'src/dataloader/Dataloader.module';
import { BienPhapDT } from './BienPhapDT.model';
import { BienPhapDTsResolver } from './BienPhapDTs.resolver';
import { BienPhapDTsService } from './BienPhapDTs.service';

@Module({
  imports: [TypeOrmModule.forFeature([BienPhapDT]), DataLoaderModule],
  providers: [BienPhapDTsResolver, BienPhapDTsService],
})
export class BienPhapDTsModule {}
