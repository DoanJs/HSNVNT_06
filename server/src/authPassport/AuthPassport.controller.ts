import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthPassportService } from './AuthPassport.service';
import { LoginAuthGuard } from './Login.Guard';
import { RegisterAuthGuard } from './Register.Guard';
import { AccessTokenType } from './type/accessToken.type';

@Controller()
export class AuthPassportController {
  constructor(private readonly authPassportService: AuthPassportService) { }

  @Post('/login')
  @UseGuards(LoginAuthGuard)
  login(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ): Promise<AccessTokenType> {
    return this.authPassportService.login(req, res);
  }

  @Post('/register')
  @UseGuards(RegisterAuthGuard)
  register(@Req() req: Request) {
    return this.authPassportService.register(req);
  }

  @Get('/refresh_token')
  refreshToken(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ): Promise<AccessTokenType> {
    return this.authPassportService.refresh_token(req, res);
  }

  @Post('/logout')
  logout(
    @Req() req: any,
    @Res({ passthrough: true }) res: Response,
  ): Promise<boolean> {
    return this.authPassportService.logout(req, res);
  }
}
