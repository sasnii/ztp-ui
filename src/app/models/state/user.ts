import { User } from '../user';

export interface UserState {
  // user?: User;
  loggedIn: boolean;
  token: string;
  role: number;
  users: User[];
}
