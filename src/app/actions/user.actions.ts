import { User } from './../models/user';
import { createAction, props } from '@ngrx/store';

export const login = createAction('[Login page] Login loading');
export const loginSuccess = createAction('[Login page] Login successful', props<{ user: User }>());
export const loginFailed = createAction('[Login page] Login failed', props<{ error: Error }>());

