import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataLoaderModule } from 'src/dataloader/Dataloader.module';
import { DiaChiNV } from './DiaChiNV.model';
import { DiaChiNVsResolver } from './DiaChiNVs.resolver';
import { DiaChiNVsService } from './DiaChiNVs.service';

@Module({
  imports: [
    DataLoaderModule,
    TypeOrmModule.forFeature([DiaChiNV]),
    JwtModule.register({
      secret: process.env.SECRETJWT as string,
    }),
  ],
  providers: [DiaChiNVsResolver, DiaChiNVsService],
})
export class DiaChiNVsModule {}
