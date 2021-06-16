import { loginFailed, registerFailed, loginSuccess, registerSuccess, logoutSuccess, logout } from './../actions/user.actions';
import { deleteAllAnimalsFailed, deleteAnimalFailed, loadAnimalListFailed, updateAnimalFailed } from './../actions/animals.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { addAnimalFailed, addAnimalSuccess, deleteAnimalSuccess, loadAnimalListSuccess, updateAnimalSuccess } from '../actions/animals.actions';
import { tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErrorEffects {
  constructor(private actions$: Actions, private snackBar: MatSnackBar, private router: Router) { }

  success$ = createEffect(
    () => this.actions$.pipe(
      ofType(
        loginSuccess,
        registerSuccess,
        logoutSuccess
      ),
      tap(action => this.snackBar.open((action.type), 'Success', {
        duration: 3000
      })),
    ),
    { dispatch: false }
  );

  failure$ = createEffect(
    () => this.actions$.pipe(
      ofType(
        addAnimalFailed,
        loadAnimalListFailed,
        updateAnimalFailed,
        deleteAllAnimalsFailed,
        deleteAnimalFailed,
        loginFailed,
        registerFailed
        ),
      tap(action => this.snackBar.open((action.error.message || action.error.name), 'Error', {
        duration: 3000
      })),
    ),
    { dispatch: false }
  );


  logout$ = createEffect(
    () => this.actions$.pipe(
      ofType(
        logout
      ),
      tap(() => this.router.navigateByUrl('/')),
      // tap(action => this.snackBar.open((action.type), 'Success', {
      //   duration: 3000
      // })),
    ),
    { dispatch: false }
  );

}


