import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataLoaderModule } from 'src/dataloader/Dataloader.module';
import { DDNB } from './DDNB.model';
import { DDNBsResolver } from './DDNBs.resolver';
import { DDNBsService } from './DDNBs.service';

@Module({
  imports: [TypeOrmModule.forFeature([DDNB]), DataLoaderModule],
  providers: [DDNBsResolver, DDNBsService],
})
export class DDNBsModule {}
