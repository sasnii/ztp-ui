import { loadUserListSuccess, loginSuccess, logout, logoutSuccess, updateUserSuccess } from './../actions/user.actions';
import { UserState } from './../models/state/user';
import { createReducer, on } from '@ngrx/store';

export const initialState: UserState = {
  loggedIn: false,
  token: null,
  role: null,
  users: null
};

export const userReducer = createReducer(
  initialState,
  on(loginSuccess, (state, {token, role}) => ({ ...state, loggedIn: true, token, role})),
  on(logout, state => ({ ...state, loggedIn: false, token: null, role: null, users: null})),
  on(loadUserListSuccess, (state, { users }) => ({ ...state, users })),
  on(updateUserSuccess, (state, { id, user }) => ({ ...state, users: state.users.map(n => n.id === id ? user : n) })),
);
