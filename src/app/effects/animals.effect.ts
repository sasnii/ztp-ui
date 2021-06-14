import { Animal } from './../models/animal';
import { AnimalsService } from './../services/animals.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, mergeMap, switchMap, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  loadAnimalListSuccess,
  addAnimal,
  loadAnimalListFailed,
  loadAnimalList,
  addAnimalSuccess,
  addAnimalFailed,
  deleteAnimal,
  deleteAnimalSuccess,
  deleteAllAnimalsFailed,
  updateAnimal,
  updateAnimalSuccess,
  updateAnimalFailed
} from './../actions/animals.actions';

@Injectable({
  providedIn: 'root'
})
export class AnimalsEffects {
  constructor(private actions$: Actions, private animalsService: AnimalsService) { }

  loadAnimals$ = createEffect(() => this.actions$.pipe(
    ofType(loadAnimalList),
    switchMap(() => this.animalsService.getAll()
      .pipe(
        map(response => loadAnimalListSuccess({ animals: response as Animal[] })),
        catchError((error) => of(loadAnimalListFailed(error))),
      )
    )
  ));

  createAnimal$ = createEffect(() => this.actions$.pipe(
    ofType(addAnimal),
    switchMap(action => this.animalsService.create(action.animal)
      .pipe(
        map(response => (addAnimalSuccess({animal: response as Animal}))),
        catchError((error) => of(addAnimalFailed(error)))
      )
    )
  ));

  deleteAnimal$ = createEffect(() => this.actions$.pipe(
    ofType(deleteAnimal),
    switchMap(action => this.animalsService.deleteById(action.id)
      .pipe(
        map(() => (deleteAnimalSuccess({id : action.id}))),
        catchError((error) => of(deleteAllAnimalsFailed(error)))
      )
    )
  ));


  editAnimal$ = createEffect(() => this.actions$.pipe(
    ofType(updateAnimal),
    switchMap(action => this.animalsService.update(action.id, action.animal)
      .pipe(
        map(response => (updateAnimalSuccess({id: action.id, animal: response as Animal}))),
        catchError((error) => of(updateAnimalFailed(error)))
      )
    )
  ));
}
