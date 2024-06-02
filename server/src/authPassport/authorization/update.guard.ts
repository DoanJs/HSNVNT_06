import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthPassportService } from '../AuthPassport.service';

@Injectable()
export class UpdateGuard implements CanActivate {
  constructor(private readonly authPassportService: AuthPassportService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const { req } = ctx.getContext();

    const account = await this.authPassportService.getAccountLogin(
      req.user.AccountID,
    );

    if (!account[0]) {
      throw new UnauthorizedException('Account not exist!');
    }
    if (!this.authPassportService.roleGroup('update').includes(account[0].Role)) {
      throw new UnauthorizedException('Do not Permission!');
    }
    return true;
  }
}
