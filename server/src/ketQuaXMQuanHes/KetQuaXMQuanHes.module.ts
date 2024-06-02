import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataLoaderModule } from 'src/dataloader/Dataloader.module';
import { KetQuaXMQuanHe } from './KetQuaXMQuanHe.model';
import { KetQuaXMQuanHesResolver } from './KetQuaXMQuanHes.resolver';
import { KetQuaXMQuanHesService } from './KetQuaXMQuanHes.service';

@Module({
  imports: [TypeOrmModule.forFeature([KetQuaXMQuanHe]), DataLoaderModule],
  providers: [KetQuaXMQuanHesResolver, KetQuaXMQuanHesService],
})
export class KetQuaXMQuanHesModule { }
