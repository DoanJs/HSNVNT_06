import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as Crypto from 'crypto-js';
import { Request, Response } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import { Account } from 'src/accounts/Account.model';
import { SP_GET_DATA } from 'src/utils/mssql/query';
import { Repository } from 'typeorm';
import { AccessTokenType } from './type/accessToken.type';

@Injectable()
export class AuthPassportService {
  constructor(
    @InjectRepository(Account) private accountRepository: Repository<Account>,
    private jwtService: JwtService,
  ) {}

  async validateLogin(username: string, password: string): Promise<any> {
    const account = await this.accountRepository.query(
      SP_GET_DATA(
        'Accounts',
        `'Username = N''${username}'''`,
        'AccountID',
        0,
        0,
      ),
    );
    if (!account[0]) {
      throw new UnauthorizedException('Tài khoản không tồn tại!');
    }
    if (Crypto.SHA512(password).toString() != account[0].Password) {
      throw new UnauthorizedException('Mật khẩu không chính xác!');
    }
    return account[0];
  }

  async validateRegister(username: string, password: string): Promise<any> {
    const account = await this.accountRepository.findOne({
      where: { Username: username },
    });
    if (account) {
      throw new UnauthorizedException('Tài khoản này đã tồn tại!');
    }
    return { username, password };
  }

  async login(req: Request, res: Response): Promise<AccessTokenType> {
    const account = req.user as Account;
    const payload = {
      AccountID: account.AccountID,
      Username: account.Username,
      Role: account.Role,
      Position: account.Position,
    };

    const access_token = this.jwtService.sign(payload, {
      expiresIn: process.env.expiresInToken as string,
      secret: process.env.SECRETOKEN as string,
    });

    const refresh_token = this.jwtService.sign(
      { ...payload, Password: account.Password },
      {
        expiresIn: process.env.expiresInRefreshToken as string,
        secret: process.env.SECREREFRESHTOKEN as string,
      },
    );

    res.cookie(process.env.REFRESHTOKENCOOKIENAME as string, refresh_token, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/refresh_token',
    });

    return {
      access_token,
    };
  }

  async register(req: Request) {
    const { username, password, role, position } = req.body;

    const hashPassword = Crypto.SHA512(password).toString();
    const newAccount = this.accountRepository.create({
      Username: username,
      Password: hashPassword,
      Role: role,
      Position: position,
    });
    await this.accountRepository.save(newAccount);
    return newAccount;
  }

  async refresh_token(req: Request, res: Response): Promise<AccessTokenType> {
    const refreshToken = req.cookies[process.env.REFRESHTOKENCOOKIENAME];
    if (!refreshToken) {
      throw new UnauthorizedException('refresh token not exist!');
    }

    try {
      const decodeUser = this.jwtService.verify(refreshToken, {
        secret: process.env.SECREREFRESHTOKEN as string,
      }) as JwtPayload;

      const existingUser = await this.accountRepository.query(
        SP_GET_DATA(
          'Accounts',
          `'Username = N''${decodeUser.Username}'''`,
          'AccountID',
          0,
          0,
        ),
      );
      if (!existingUser[0]) {
        throw new UnauthorizedException('Account not exist in Database !');
      }

      const payload = {
        AccountID: existingUser[0].AccountID,
        Username: existingUser[0].Username,
        Role: existingUser[0].Role,
        Position: existingUser[0].Position,
      };

      const refresh_token = this.jwtService.sign(
        { ...payload, Password: existingUser.Password },
        {
          expiresIn: process.env.expiresInRefreshToken as string,
          secret: process.env.SECREREFRESHTOKEN as string,
        },
      );

      res.cookie(process.env.REFRESHTOKENCOOKIENAME as string, refresh_token, {
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        path: '/refresh_token',
      });

      return {
        access_token: this.jwtService.sign(payload, {
          expiresIn: process.env.expiresInToken as string,
          secret: process.env.SECRETOKEN as string,
        }),
      };
    } catch (error) {
      throw new UnauthorizedException('Refresh token not valid!');
    }
  }

  async logout(req: any, res: Response): Promise<boolean> {
    // await this.historyService.createHistory({
    //   accountId: req.body.id,
    //   username: req.body.username,
    //   role: req.body.role,
    //   timeLogout: moment().format(),
    // });
    res.clearCookie(process.env.REFRESHTOKENCOOKIENAME, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/refresh_token',
    });
    return true;
  }

  async getAccountLogin(AccountID: number): Promise<Account> {
    const account = await this.accountRepository.query(
      SP_GET_DATA('Accounts', `'AccountID = ${AccountID}'`, 'AccountID', 0, 0),
    );
    return account;
  }

  roleGroup(key: string): String[] {
    let result: any;
    switch (key) {
      case 'insert':
        result = ['PTP_4', 'BCH_4', 'CBCS_4'];
        break;
      case 'update':
        result = ['PTP_4', 'BCH_4', 'CBCS_4'];
        break;
      case 'delete':
        result = ['PTP_4', 'BCH_4', 'CBCS_4'];
        break;
      default:
        result = ['TP', 'PTP', 'PTP_4', 'BCH', 'BCH_4', 'CBCS', 'CBCS_4'];
        break;
    }
    return result;
  }
}
