import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from 'src/accounts/Account.model';
import { AuthPassportController } from './AuthPassport.controller';
import { AuthPassportService } from './AuthPassport.service';
import { LoginLocalStrategy } from './LoginLocal.strategy';
import { RegisterLocalStrategy } from './RegisterLocal.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([Account]),
    JwtModule.register({
      secret: process.env.SECRETJWT as string,
    }),
  ],
  controllers: [AuthPassportController],
  providers: [AuthPassportService, LoginLocalStrategy, RegisterLocalStrategy],
  exports: [AuthPassportService],
})
export class AuthPassportModule {}
