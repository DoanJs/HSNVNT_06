import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataLoaderModule } from 'src/dataloader/Dataloader.module';
import { TinhTP } from './TinhTP.model';
import { TinhTPsResolver } from './TinhTPs.resolver';
import { TinhTPsService } from './TinhTPs.service';

@Module({
  imports: [TypeOrmModule.forFeature([TinhTP]), DataLoaderModule],
  providers: [TinhTPsResolver, TinhTPsService],
})
export class TinhTPsModule { }
