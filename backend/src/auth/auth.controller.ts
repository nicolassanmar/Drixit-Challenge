import { Controller, Post, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import console from 'console';
import { AuthService } from './auth.service';

import { Logger } from '@nestjs/common';

@Controller({ path: 'authenticate', version: '0' })
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post()
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    Logger.debug(`email: ${email} password: ${password}`);
    return this.authService.login(email, password);
  }

  @Post('/email')
  async validateEmail(@Body() data: any) {
    Logger.debug(data);
    return this.authService.validateEmail(data.email);
  }
}
