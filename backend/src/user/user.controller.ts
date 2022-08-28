import { Controller, Get, UseGuards, Request, Logger } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';

@Controller({ path: 'users', version: '0' })
export class UserController {
  constructor(private readonly userService: UserService) {}

  // auth middleware injects req.user with the email of the user
  @UseGuards(AuthGuard('jwt'))
  @Get('/me')
  async getMe(@Request() { user }) {
    return await this.userService.getUserbyEmail(user.email);
  }
}
