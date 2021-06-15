import { LoginCredentials } from './../models/loginCredentials';
import { Register } from './../models/register';
import { createAction, props } from '@ngrx/store';

export const login = createAction('[Login page] Login', props<{credential: LoginCredentials}>());
export const loginSuccess = createAction('[Login page] Login successful', props<{ token: any, role: any }>()); // TODO: change type
export const loginFailed = createAction('[Login page] Login failed', props<{ error: Error }>());

export const register = createAction('[Register page] Register', props<{ register: Register }>()); // TODO: change any type
export const registerSuccess = createAction('[Register page] Register successful', props<{response: any}>()); // TODO: change type
export const registerFailed = createAction('[Register page] Register failed', props<{ error: Error }>());

export const logout = createAction('[Logout navbar] Logout');
export const logoutSuccess = createAction('[Logout navbar] Logout successful');
export const logoutFailed = createAction('[Logout navbar] Logout failed', props<{ error: Error }>());

export const loadUserList = createAction('[Admin dashboard] Load User List');
export const loadUserListSuccess = createAction('[Admin dashboard] Load user list success', props<{ users: any }>());
export const loadUserListFailed = createAction('[Admin dashboard] Load user list failed', props<{ error: Error }>());
