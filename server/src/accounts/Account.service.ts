import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as Crypto from 'crypto-js';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { Repository } from 'typeorm';
import { Account } from './Account.model';
import { AccountInput } from './type/Account.input';
import { AccountExtendInput } from './type/AccountExtend.input';
import { SP_CHANGE_DATA, SP_GET_DATA } from 'src/utils/mssql/query';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account) private accountRepository: Repository<Account>,
  ) {}

  public readonly account_DataInput = (accountInput: AccountInput) => {
    return {
      Username: accountInput.Username ? `N''${accountInput.Username}''` : null,
      Password: accountInput.Password ? accountInput.Password : null,
      Role: accountInput.Role ? `N''${accountInput.Role}''` : null,
      Position: accountInput.Position ? `N''${accountInput.Position}''` : null,
    };
  };

  accounts(utilsParams: UtilsParamsInput): Promise<Account[]> {
    return this.accountRepository.query(
      SP_GET_DATA(
        'Accounts',
        `'AccountID != 0'`,
        'AccountID',
        utilsParams.skip ? utilsParams.skip : 0,
        utilsParams.take ? utilsParams.take : 0,
      ),
    );
  }

  async account(accountID: number): Promise<Account> {
    const result = await this.accountRepository.query(
      SP_GET_DATA('Accounts', `'AccountID = ${accountID}'`, 'AccountID', 0, 1),
    );
    return result[0];
  }

  async createAccount(accountInput: AccountInput): Promise<Account> {
    const { Username, Password, Role, Position } =
      this.account_DataInput(accountInput);
    const accountExist = await this.accountRepository.query(
      SP_GET_DATA('Accounts', `'Username = ${Username}'`, 'AccountID', 0, 0),
    );

    if (accountExist[0]) {
      throw new UnauthorizedException('Tài khoản này đã tồn tại!');
    }

    if (!Password) {
      throw new UnauthorizedException('Bạn chưa tạo mật khẩu!');
    }

    const hashPassword = `N''${Crypto.SHA512(Password).toString()}''`;
    const result = await this.accountRepository.query(
      SP_CHANGE_DATA(
        "'CREATE'",
        'Accounts',
        `'Username, Password, Role, Position'`,
        `N' ${Username}, 
            ${hashPassword}, 
            ${Role}, 
            ${Position}
        '`,
        `'AccountID = SCOPE_IDENTITY()'`,
      ),
    );
    return result[0];
  }

  async editAccount(
    id: number,
    accountExtendInput: AccountExtendInput,
  ): Promise<Account> {
    const { AccountInput, PasswordOld } = accountExtendInput;
    const hashPasswordOld = Crypto.SHA512(PasswordOld).toString();
    const data = await this.accountRepository.query(
      SP_GET_DATA('Accounts', `'AccountID = ${id}'`, 'AccountID', 0, 0),
    );
    const accountOld = data[0];

    if (accountOld.Username !== AccountInput.Username) {
      const accountExist = await this.accountRepository.query(
        SP_GET_DATA(
          'Accounts',
          `"Username = '${AccountInput.Username}'"`,
          'AccountID',
          0,
          0,
        ),
      );
      if (accountExist[0]) {
        throw new UnauthorizedException('Tên tài khoản này đã tồn tại!');
      }
    }

    if (hashPasswordOld !== accountOld.Password) {
      throw new UnauthorizedException('Mật khẩu cũ không chính xác !');
    }

    const usernameNew = `N''${AccountInput.Username}''`
    if (!AccountInput.Password) {
      await this.accountRepository.query(
        SP_CHANGE_DATA(
          "'EDIT'",
          'Accounts',
          null,
          null,
          null,
          `N' Username = ${usernameNew}'`,
          `'AccountID = ${id}'`,
        ),
      );
    } else {
      const hashPasswordNew = `N''${Crypto.SHA512(AccountInput.Password).toString()}''`;
      await this.accountRepository.query(
        SP_CHANGE_DATA(
          "'EDIT'",
          'Accounts',
          null,
          null,
          null,
          `N' Username = ${usernameNew},
              Password = ${hashPasswordNew}
          '`,
          `'AccountID = ${id}'`,
        ),
      );
    }

    const account = await this.accountRepository.query(
      SP_GET_DATA('Accounts', `'AccountID = ${id}'`, 'AccountID', 0, 0)
    );
    return account[0];
  }
}
