import { User } from './../models/user';
import { UsersService } from './../services/users.service';
import {
  register,
  registerFailed,
  registerSuccess,
  login,
  loginSuccess,
  loginFailed,
  loadUserList,
  loadUserListSuccess,
  loadUserListFailed,
  updateUser,
  updateUserSuccess,
  updateUserFailed
} from './../actions/user.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, switchMap, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserEffect {
  constructor(
    private actions$: Actions,
    private userService: UsersService) { }

  registerUser$ = createEffect(() => this.actions$.pipe(
    ofType(register),
    switchMap(action => this.userService.register(action.register)
      .pipe(
        map(response => registerSuccess(response)),
        catchError((error) => of(registerFailed(error)))
      )
    )
  ));

  loginUser$ = createEffect(() => this.actions$.pipe(
    ofType(login),
    switchMap(action => this.userService.login(action.credential)
      .pipe(
        map(response => loginSuccess(response)),
        catchError((error) => of(loginFailed(error)))
      )
    )
  ));

  loadUsersList$ = createEffect(() => this.actions$.pipe(
    ofType(loadUserList),
    switchMap(() => this.userService.getAll()
      .pipe(
        map(response => loadUserListSuccess({ users: response as User[] })),
        catchError((error) => of(loadUserListFailed(error)))
      )
    )
  ));

  editUser$ = createEffect(() => this.actions$.pipe(
    ofType(updateUser),
    switchMap(action => this.userService.updateUserById(action.id, action.user)
      .pipe(
        map(response => (updateUserSuccess({id: action.id, user: response as User}))),
        catchError((error) => of(updateUserFailed(error)))
      )
    )
  ));
}
