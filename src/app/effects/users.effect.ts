import { UsersService } from './../services/users.service';
import { register, registerFailed, registerSuccess } from './../actions/user.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, switchMap, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { props } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class UserEffect {
  constructor(private actions$: Actions, private userService: UsersService ) { }

  registerUser$ = createEffect(() => this.actions$.pipe(
    ofType(register),
    tap(() => console.log(props)),
    switchMap(() => this.userService.register(props)
      .pipe(
        catchError((error) => of(registerFailed(error)))
      )
    )
  ));

  // registerUser$ = createEffect(() => this.actions$.pipe(
  //   ofType(register),
  //   switchMap(() => this.userService.register(props)
  //     .pipe(
  //       catchError((error) => of(registerFailed(error)))
  //     )
  //   )
  // ));



}
