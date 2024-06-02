import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LoginAuthGuard } from './authPassport/Login.Guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(LoginAuthGuard)
  getHello(): string {
    return this.appService.getHello();
  }
}
