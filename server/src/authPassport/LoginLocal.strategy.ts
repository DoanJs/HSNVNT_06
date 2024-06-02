import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectConnection } from '@nestjs/typeorm';
import { Strategy } from 'passport-local';
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
    console.log(username, password);
    //xac dinh ai dang dang nhap vao --> reconnect DB
    await this.connection.close();
    console.log('closed');
    await this.connection.setOptions({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'userTest',
      password: '123',
      database: 'HSNVNT_06',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      logging: true,
      // synchronize: true, ///not use production env
      options: {
        trustServerCertificate: true,
      },
    }).connect();

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
