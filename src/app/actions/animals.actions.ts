import { Animal } from './../models/animal';
import { createAction, props } from '@ngrx/store';

export const loadAnimalList = createAction('[Dashboard] Load animals list');
export const loadAnimalListSuccess = createAction('[Dashboard] Load list of animals was successful', props<{ animals: Animal[] }>());
export const loadAnimalListFailed = createAction('[Dashboard] Load list of animals failed', props<{ error: Error }>());

export const addAnimal = createAction('[Animal] Add animal', props<{ animal: Animal }>());
export const addAnimalSuccess = createAction('[Animal] Add animal was successful', props<{ animal: Animal }>());
export const addAnimalFailed = createAction('[Animal] Add animal failed', props<{ error: Error }>());

export const updateAnimal = createAction('[Animal details] Update animal', props<{ id: number, changes: Animal }>());
export const updateAnimalSuccess = createAction('[Animal details] Update animal success', props<{ changes: Animal }>());
export const updateAnimalFailed = createAction('[Animal details] Update animal failed', props<{ error: Error }>());

export const deleteAnimal = createAction('[Animal list] Delete animal', props<{ id: number }>());
export const deleteAnimalSuccess = createAction('[Animal list] Delete animal was successful', props<{ id: number }>());
export const deleteAnimalFailed = createAction('[Animal list] Delete animal failed', props<{ error: Error }>());

export const deleteAllAnimals = createAction('[Animal list] Delete all animals');
export const deleteAllAnimalsSuccess = createAction('[Animal list] Delete all animals was successful');
export const deleteAllAnimalsFailed = createAction('[Animal list] Delete all animals failed', props<{ error: Error }>());
