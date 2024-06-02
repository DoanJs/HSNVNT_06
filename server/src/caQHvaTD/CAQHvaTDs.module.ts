import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataLoaderModule } from 'src/dataloader/Dataloader.module';
import { CAQHvaTD } from './CAQHvaTD.model';
import { CAQHvaTDsResolver } from './CAQHvaTDs.resolver';
import { CAQHvaTDsService } from './CAQHvaTDs.service';

@Module({
  imports: [TypeOrmModule.forFeature([CAQHvaTD]), DataLoaderModule],
  providers: [CAQHvaTDsResolver, CAQHvaTDsService],
})
export class CAQHvaTDsModule {}
