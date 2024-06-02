import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BaoCaoKTDN } from './BaoCaoKTDN.model';
import { BaoCaoKTDNsResolver } from './BaoCaoKTDNs.resolver';
import { BaoCaoKTDNsService } from './BaoCaoKTDNs.service';

@Module({
  imports: [TypeOrmModule.forFeature([BaoCaoKTDN])],
  providers: [BaoCaoKTDNsResolver, BaoCaoKTDNsService],
})
export class BaoCaoKTDNsModule {}
