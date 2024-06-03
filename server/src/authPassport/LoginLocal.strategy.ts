import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectConnection } from '@nestjs/typeorm';
import { Strategy } from 'passport-local';
import { databaseMSSQLConfig } from 'src/utils/mssql/query';
import { Connection } from 'typeorm';
import { AuthPassportService } from './AuthPassport.service';

@Injectable()
export class LoginLocalStrategy extends PassportStrategy(
  Strategy,
  'login.local',
) {
  constructor(
    private authPassportService: AuthPassportService,
    @InjectConnection() private readonly connection: Connection,
  ) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    //xac dinh ai dang dang nhap vao --> reconnect DB
    await this.connection.close();
    await this.connection
      .setOptions(databaseMSSQLConfig(username, password, 'HSNVNT_06'))
      .connect();

    const account = await this.authPassportService.validateLogin(
      username,
      password,
    );
    if (!account) {
      throw new UnauthorizedException('Tài khoản không tồn tại!');
    }
    return account;
  }
}
