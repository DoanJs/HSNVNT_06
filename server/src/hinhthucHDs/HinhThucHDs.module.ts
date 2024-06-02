import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HinhThucHD } from './HinhThucHD.model';
import { HinhThucHDsResolver } from './HinhThucHDs.resolver';
import { HinhThucHDsService } from './HinhThucHDs.service';

@Module({
  imports: [TypeOrmModule.forFeature([HinhThucHD])],
  providers: [HinhThucHDsResolver, HinhThucHDsService],
})
export class HinhThucHDsModule { }
