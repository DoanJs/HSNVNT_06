import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataLoaderModule } from 'src/dataloader/Dataloader.module';
import { DoiTuongCA } from './DoiTuongCA.model';
import { DoiTuongCAsResolver } from './DoiTuongCAs.resolver';
import { DoiTuongCAsService } from './DoiTuongCAs.service';

@Module({
  imports: [DataLoaderModule, TypeOrmModule.forFeature([DoiTuongCA])],
  providers: [DoiTuongCAsResolver, DoiTuongCAsService],
})
export class DoiTuongCAsModule {}
