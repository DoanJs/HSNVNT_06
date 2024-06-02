import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataLoaderModule } from 'src/dataloader/Dataloader.module';
import { QuyetDinhTSNT } from './QuyetDinhTSNT.model';
import { QuyetDinhTSNTsResolver } from './QuyetDinhTSNTs.resolver';
import { QuyetDinhTSNTsService } from './QuyetDinhTSNTs.service';

@Module({
  imports: [TypeOrmModule.forFeature([QuyetDinhTSNT]), DataLoaderModule, JwtModule.register({
    secret: process.env.SECRETJWT as string
  })],
  providers: [QuyetDinhTSNTsResolver, QuyetDinhTSNTsService],
})
export class QuyetDinhTSNTsModule { }
