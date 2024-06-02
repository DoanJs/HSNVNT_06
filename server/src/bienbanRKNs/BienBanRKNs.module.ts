import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BienBanRKN } from './BienBanRKN.model';
import { BienBanRKNsResolver } from './BienBanRKNs.resolver';
import { BienBanRKNsService } from './BienBanRKNs.service';

@Module({
  imports: [TypeOrmModule.forFeature([BienBanRKN])],
  providers: [BienBanRKNsResolver, BienBanRKNsService],
})
export class BienBanRKNsModule { }
