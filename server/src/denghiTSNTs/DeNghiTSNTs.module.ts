import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataLoaderModule } from 'src/dataloader/Dataloader.module';
import { DeNghiTSNT } from './DeNghiTSNT.model';
import { DeNghiTSNTsResolver } from './DeNghiTSNTs.resolver';
import { DeNghiTSNTsService } from './DeNghiTSNTs.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([DeNghiTSNT]),
    DataLoaderModule,
    JwtModule.register({
      secret: process.env.SECRETJWT as string,
    }),
  ],
  providers: [DeNghiTSNTsResolver, DeNghiTSNTsService],
})
export class DeNghiTSNTsModule {}
