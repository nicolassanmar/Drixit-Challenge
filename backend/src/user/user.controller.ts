import { Controller, Get, UseGuards, Request, Logger } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';

@Controller({ path: 'users', version: '0' })
export class UserController {
  constructor(private readonly userService: UserService) {}

  // get email from jwt to get user email
  @UseGuards(AuthGuard('jwt'))
  @Get('/me')
  async getMe(@Request() { user }) {
    return await this.userService.getUserbyEmail(user.email);
  }
}
