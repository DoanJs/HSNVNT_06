import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuocTich } from './QuocTich.model';
import { QuocTichsResolver } from './QuocTichs.resolver';
import { QuocTichsService } from './QuocTichs.service';

@Module({
    imports: [TypeOrmModule.forFeature([QuocTich])],
    providers: [QuocTichsResolver, QuocTichsService],
})
export class QuocTichsModule { }
