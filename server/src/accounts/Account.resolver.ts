import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { Account } from './Account.model';
import { AccountService } from './Account.service';
import { AccountInput } from './type/Account.input';
import { AccountExtendInput } from './type/AccountExtend.input';

@Resolver()
export class AccountResolver {
  constructor(private accountsService: AccountService) { }
  @Query(returns => [Account])
  accounts(
    @Args('utilsParams') utilsParams: UtilsParamsInput,
  ): Promise<Account[]> {
    return this.accountsService.accounts(utilsParams);
  }

  @Query((returns) => Account)
  account(@Args('accountID') accountID: number): Promise<Account> {
    return this.accountsService.account(accountID);
  }

  @Mutation((returns) => Account)
  createAccount(
    @Args('accountInput') accountInput: AccountInput,
  ): Promise<Account> {
    return this.accountsService.createAccount(accountInput);
  }

  @Mutation((returns) => Account)
  editAccount(
    @Args('id') id: number,
    @Args('accountExtendInput') accountExtendInput: AccountExtendInput,
  ): Promise<Account> {
    return this.accountsService.editAccount(id, accountExtendInput);
  }
}
