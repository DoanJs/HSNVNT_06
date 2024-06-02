import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataLoaderModule } from 'src/dataloader/Dataloader.module';
import { BaoCaoKQGH } from './BaoCaoKQGH.model';
import { BaoCaoKQGHsResolver } from './BaoCaoKQGHs.resolver';
import { BaoCaoKQGHsService } from './BaoCaoKQGHs.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([BaoCaoKQGH]),
    DataLoaderModule,
    JwtModule.register({
      secret: process.env.SECRETJWT as string,
    }),
  ],
  providers: [BaoCaoKQGHsResolver, BaoCaoKQGHsService],
})
export class BaoCaoKQGHsModule {}
