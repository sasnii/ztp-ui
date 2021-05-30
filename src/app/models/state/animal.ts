import { Animal } from '../animal';

export interface AnimalsState {
  animals: Animal[];
  isLoading: boolean;
}
