import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataLoaderModule } from 'src/dataloader/Dataloader.module';
import { ChuyenAn } from './ChuyenAn.model';
import { ChuyenAnsResolver } from './ChuyenAns.resolver';
import { ChuyenAnsService } from './ChuyenAns.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ChuyenAn]),
    DataLoaderModule,
    JwtModule.register({
      secret: process.env.SECRETJWT as string,
    }),
  ],
  providers: [ChuyenAnsResolver, ChuyenAnsService],
})
export class ChuyenAnsModule {}
