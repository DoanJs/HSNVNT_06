import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountModule } from 'src/accounts/Account.module';
import { AuthPassportModule } from 'src/authPassport/AuthPassport.module';
import { DataLoaderModule } from 'src/dataloader/Dataloader.module';
import { CBCS } from './CBCS.model';
import { CBCSsResolver } from './CBCSs.resolver';
import { CBCSsService } from './CBCSs.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([CBCS]),
    AccountModule,
    AuthPassportModule,
    DataLoaderModule,
    JwtModule.register({
      secret: process.env.SECRETJWT as string,
    }),
  ],
  providers: [CBCSsResolver, CBCSsService],
})
export class CBCSsModule {}
