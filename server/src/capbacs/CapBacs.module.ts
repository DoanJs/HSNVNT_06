import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CapBac } from './CapBac.model';
import { CapBacsResolver } from './CapBacs.resolver';
import { CapBacsService } from './CapBacs.service';

@Module({
  imports: [TypeOrmModule.forFeature([CapBac])],
  providers: [CapBacsResolver, CapBacsService],
})
export class CapBacsModule { }
