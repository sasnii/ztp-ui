import { loginFailed, registerFailed, loginSuccess, registerSuccess, logoutSuccess } from './../actions/user.actions';
import { deleteAllAnimalsFailed, deleteAnimalFailed, loadAnimalListFailed, updateAnimalFailed } from './../actions/animals.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { addAnimalFailed, addAnimalSuccess, deleteAnimalSuccess, loadAnimalListSuccess, updateAnimalSuccess } from '../actions/animals.actions';
import { tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ErrorEffects {
  constructor(private actions$: Actions, private snackBar: MatSnackBar) { }

  success$ = createEffect(
    () => this.actions$.pipe(
      ofType(
        // addAnimalSuccess,
        // loadAnimalListSuccess,
        // updateAnimalSuccess,
        // deleteAnimalSuccess,
        loginSuccess,
        registerSuccess,
        logoutSuccess
      ),
      tap(action => this.snackBar.open((action.type), 'Success')),
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
      tap(action => this.snackBar.open((action.error.message || action.error.name), 'Error')),
    ),
    { dispatch: false }
  );

}


