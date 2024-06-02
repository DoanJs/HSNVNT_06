import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataLoaderModule } from 'src/dataloader/Dataloader.module';
import { KetQuaXMDiaChi } from './KetQuaXMDiaChi.model';
import { KetQuaXMDiaChisResolver } from './KetQuaXMDiaChis.resolver';
import { KetQuaXMDiaChisService } from './KetQuaXMDiaChis.service';

@Module({
  imports: [TypeOrmModule.forFeature([KetQuaXMDiaChi]), DataLoaderModule],
  providers: [KetQuaXMDiaChisResolver, KetQuaXMDiaChisService],
})
export class KetQuaXMDiaChisModule { }
