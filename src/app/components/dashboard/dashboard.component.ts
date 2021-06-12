import { selectAnimalsList, selectAnimalsIsLoading } from './../../selectors/animals.selector';
import { AppState } from './../../models/state/state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Animal } from 'src/app/models/animal';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  animals$: Observable<Animal[]>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.animals$ = this.store.select(selectAnimalsList);
    this.isLoading$ = this.store.select(selectAnimalsIsLoading);
  }

}
