import { UserState } from './user';
import { AnimalsState } from './animal';

export interface AppState {
  animals: AnimalsState;
  user: UserState;
}
