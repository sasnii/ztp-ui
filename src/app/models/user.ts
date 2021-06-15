import { WithId } from './withId';

export interface User extends WithId{
  username: string;
  first_name: string;
  last_name: string;
  role: number;
  email: string;
}
