import { UserState } from './../models/state/user';
import { createSelector } from '@ngrx/store';
import { AppState } from './../models/state/state';

export const selectUser = (state: AppState) => state.user;

export const selectUserIsLoggedIn = createSelector(
  selectUser, (state: UserState) => state.loggedIn
);

export const selectUserToken = createSelector(
  selectUser, (state: UserState) => state.token
);

export const selectUserRole = createSelector(
  selectUser, (state: UserState) => state.role
);

export const selectUserList = createSelector(
  selectUser, (state: UserState) => state.users
);

