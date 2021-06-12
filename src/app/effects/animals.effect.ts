import { Animal } from './../models/animal';
import { AnimalsService } from './../services/animals.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, mergeMap, switchMap, map, tap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { props } from '@ngrx/store';
import { loadAnimalListSuccess, addAnimal, loadAnimalListFailed, loadAnimalList, addAnimalSuccess, addAnimalFailed } from './../actions/animals.actions';

@Injectable({
  providedIn: 'root'
})
export class AnimalsEffects {
  constructor(private actions$: Actions, private animalsService: AnimalsService ) { }

  loadAnimals$ = createEffect(() => this.actions$.pipe(
    ofType(loadAnimalList),
    switchMap(() => this.animalsService.getAll()
      .pipe(
        map(response => loadAnimalListSuccess(response)),
        catchError((error) => of(loadAnimalListFailed(error))),
      )
    )
  ));

  createAnimals$ = createEffect(() => this.actions$.pipe(
    ofType(addAnimal),
    switchMap(() => this.animalsService.create(props)
      .pipe(
        map(response => (addAnimalSuccess(response))),
        catchError((error) => of(addAnimalFailed(error)))
      )
    )
  ));

}
