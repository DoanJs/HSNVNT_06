import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CapCA } from './CapCA.model';
import { CapCAsResolver } from './CapCAs.resolver';
import { CapCAsService } from './CapCAs.service';

@Module({
  imports: [TypeOrmModule.forFeature([CapCA])],
  providers: [CapCAsResolver, CapCAsService],
})
export class CapCAsModule {}
