import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChucVu } from './ChucVu.model';
import { ChucVusResolver } from './ChucVus.resolver';
import { ChucVusService } from './ChucVus.service';

@Module({
  imports: [TypeOrmModule.forFeature([ChucVu])],
  providers: [ChucVusResolver, ChucVusService],
})
export class ChucVusModule {}
