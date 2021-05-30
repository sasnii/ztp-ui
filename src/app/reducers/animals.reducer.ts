import { AnimalsState } from '../models/state/animal';
import { createReducer } from '@ngrx/store';


export const initialState: AnimalsState = {
  animals: [],
  isLoading: true
};

export const animalReducer = createReducer(
  initialState,
);
