import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataLoaderModule } from 'src/dataloader/Dataloader.module';
import PhuongTienNV from './PhuongTienNV.model';
import { PhuongTienNVsResolver } from './PhuongTienNVs.resolver';
import { PhuongTienNVsService } from './PhuongTienNVs.service';

@Module({
  imports: [TypeOrmModule.forFeature([PhuongTienNV]), DataLoaderModule, JwtModule.register({
    secret: process.env.SECRETJWT as string
  })],
  providers: [PhuongTienNVsResolver, PhuongTienNVsService],
})
export class PhuongTienNVsModule { }
