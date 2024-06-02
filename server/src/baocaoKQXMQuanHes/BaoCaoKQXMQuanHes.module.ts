import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataLoaderModule } from 'src/dataloader/Dataloader.module';
import { BaoCaoKQXMQuanHe } from './BaoCaoKQXMQuanHe.model';
import { BaoCaoKQXMQuanHesResolver } from './BaoCaoKQXMQuanHes.resolver';
import { BaoCaoKQXMQuanHesService } from './BaoCaoKQXMQuanHes.service';

@Module({
  imports: [TypeOrmModule.forFeature([BaoCaoKQXMQuanHe]), DataLoaderModule],
  providers: [BaoCaoKQXMQuanHesResolver, BaoCaoKQXMQuanHesService],
})
export class BaoCaoKQXMQuanHesModule { }
