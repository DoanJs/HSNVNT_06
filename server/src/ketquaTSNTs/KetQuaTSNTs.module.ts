import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataLoaderModule } from 'src/dataloader/Dataloader.module';
import { KetQuaTSNT } from './KetQuaTSNT.model';
import { KetQuaTSNTsResolver } from './KetQuaTSNTs.resolver';
import { KetQuaTSNTsService } from './KetQuaTSNTs.service';

@Module({
  imports: [TypeOrmModule.forFeature([KetQuaTSNT]), DataLoaderModule],
  providers: [KetQuaTSNTsResolver, KetQuaTSNTsService],
})
export class KetQuaTSNTsModule { }
