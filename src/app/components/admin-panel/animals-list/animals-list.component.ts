import { Component, OnInit } from '@angular/core';
import { selectAnimalsList, selectAnimalsIsLoading } from './../../../selectors/animals.selector';
import { AppState } from './../../../models/state/state';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Animal } from 'src/app/models/animal';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.scss']
})
export class AnimalsListComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  animals$: Observable<Animal[]>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.animals$ = this.store.select(selectAnimalsList);
    this.isLoading$ = this.store.select(selectAnimalsIsLoading);
  }

}
