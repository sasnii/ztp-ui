import { Register } from './../models/register';
import { User } from './../models/user';
import { createAction, props } from '@ngrx/store';

export const login = createAction('[Login page] Login');
export const loginSuccess = createAction('[Login page] Login successful', props<{ user: User }>());
export const loginFailed = createAction('[Login page] Login failed', props<{ error: Error }>());


export const register = createAction('[Register page] Register', props<{ register: Register }>()); // TODO: change any type
export const registerSuccess = createAction('[Register page] Register successful');
export const registerFailed = createAction('[Register page] Register failed', props<{ error: Error }>());
