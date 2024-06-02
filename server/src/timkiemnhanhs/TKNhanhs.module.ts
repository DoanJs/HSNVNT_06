import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TKNhanh } from './TKNhanh.model';
import { TKNhanhsResolver } from './TKNhanhs.resolver';
import { TKNhanhsService } from './TKNhanhs.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([TKNhanh]), JwtModule.register({
    secret: process.env.SECRETJWT as string
  })],
  providers: [TKNhanhsResolver, TKNhanhsService],
})
export class TKNhanhsModule { }
 