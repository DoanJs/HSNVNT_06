import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthPassportService } from './AuthPassport.service';

@Injectable()
export class RegisterLocalStrategy extends PassportStrategy(
  Strategy,
  'register.local',
) {
  constructor(private authPassportService: AuthPassportService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const account = await this.authPassportService.validateRegister(
      username,
      password,
    );
    if (!account) {
      throw new UnauthorizedException('Account already exists !');
    }
    return account;
  }
}
