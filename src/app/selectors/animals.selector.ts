import { AnimalsState } from './../models/state/animal';
import { createSelector } from '@ngrx/store';
import { AppState } from './../models/state/state';

export const selectAnimals = (state: AppState) => state.animals;

export const selectAnimalsList = createSelector(
  selectAnimals, (state: AnimalsState) => state.animals
);

export const selectAnimalsIsLoading = createSelector(
  selectAnimals, (state: AnimalsState) => state.isLoading
);
