import { LoginCredentials } from './../models/loginCredentials';
import { Register } from './../models/register';
import { createAction, props } from '@ngrx/store';

export const login = createAction('[Login page] Login', props<{credential: LoginCredentials}>());
export const loginSuccess = createAction('[Login page] Login successful', props<{ token: any }>()); // TODO: change type
export const loginFailed = createAction('[Login page] Login failed', props<{ error: Error }>());

export const register = createAction('[Register page] Register', props<{ register: Register }>()); // TODO: change any type
export const registerSuccess = createAction('[Register page] Register successful', props<{response: any}>()); // TODO: change type
export const registerFailed = createAction('[Register page] Register failed', props<{ error: Error }>());
