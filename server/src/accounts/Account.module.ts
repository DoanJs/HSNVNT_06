import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './Account.model';
import { AccountResolver } from './Account.resolver';
import { AccountService } from './Account.service';

@Module({
    imports: [TypeOrmModule.forFeature([Account])],
    providers: [AccountResolver, AccountService],
})
export class AccountModule { }