import { Injectable, Logger } from '@nestjs/common';
import { UserRepository } from '../user/user.repository';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userRepository: UserRepository,
  ) {}

  // this is called in the local strategy to validate users
  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userRepository.findOneByEmail(email);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(email: string, password: string) {
    const payload = { email };
    return {
      jwt: this.jwtService.sign(payload),
    };
  }

  async validateEmail(email: string) {
    const user = await this.userRepository.findOneByEmail(email);
    if (user) {
      return true;
    }
    return false;
  }
}
