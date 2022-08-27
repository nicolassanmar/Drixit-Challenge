import { Injectable } from '@nestjs/common';

import { User, UserDocument } from './schemas/user.schema';
import { ServerUser } from './dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(serverUser: ServerUser): Promise<User> {
    return this.userRepository.create(serverUser);
  }
}
