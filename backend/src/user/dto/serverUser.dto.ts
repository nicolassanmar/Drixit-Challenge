import { ClientUser } from './clientUser.dto';

export class ServerUser extends ClientUser {
  password: string;
}
