import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataLoaderModule } from 'src/dataloader/Dataloader.module';
import { BaoCaoPHQH } from './BaoCaoPHQH.model';
import { BaoCaoPHQHsResolver } from './BaoCaoPHQHs.resolver';
import { BaoCaoPHQHsService } from './BaoCaoPHQHs.service';

@Module({
  imports: [TypeOrmModule.forFeature([BaoCaoPHQH]), DataLoaderModule, JwtModule.register({
    secret: process.env.SECRETJWT as string
  })],
  providers: [BaoCaoPHQHsResolver, BaoCaoPHQHsService],
})
export class BaoCaoPHQHsModule { }
