import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TonGiao } from './TonGiao.model';
import { TonGiaosResolver } from './TonGiaos.resolver';
import { TonGiaosService } from './TonGiaos.service';

@Module({
    imports: [TypeOrmModule.forFeature([TonGiao])],
    providers: [TonGiaosResolver, TonGiaosService]
})
export class TonGiaosModule { }
