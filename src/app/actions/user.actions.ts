import { User } from './../models/user';
import { createAction, props } from '@ngrx/store';

export const loadAnimalList = createAction('[Login page] Login loading');
export const loadAnimalListSuccess = createAction('[Login page] Login successful', props<{ user: User }>());
export const loadAnimalListFailed = createAction('[Login page] Login failed', props<{ error: Error }>());

