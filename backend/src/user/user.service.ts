import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { ClientUser } from './dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getUserbyEmail(email: string): Promise<any> {
    const user = await this.userRepository.findOneByEmail(email);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const userDTO: ClientUser = {
      age: user.age,
      email: user.email,
      id: user.id,
      name: user.name,
      role: user.role,
      avatar: user.avatar,
      surname: user.surname,
    };
    return userDTO;
  }
}
