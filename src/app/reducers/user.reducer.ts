import { UserState } from './../models/state/user';
import { createReducer } from '@ngrx/store';

export const initialState: UserState = {
  loggedIn: false
};

export const userReducer = createReducer(
  initialState
);
