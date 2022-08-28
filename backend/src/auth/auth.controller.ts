import {
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
  Query,
  Body,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import console from 'console';
import { AuthService } from './auth.service';

import { Logger } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post()
  async validateUser(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    Logger.debug(`email: ${email} password: ${password}`);
    return this.authService.login(email, password);
  }
}
