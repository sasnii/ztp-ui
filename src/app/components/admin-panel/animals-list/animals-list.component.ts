import { ModalService } from './../../../services/modal.service';
import { Component, OnInit } from '@angular/core';
import { selectAnimalsList, selectAnimalsIsLoading } from './../../../selectors/animals.selector';
import { AppState } from './../../../models/state/state';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Animal } from 'src/app/models/animal';
import { deleteAnimal } from 'src/app/actions/animals.actions';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.scss']
})
export class AnimalsListComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'age', 'weight', 'description', 'type', 'action'];

  animals$: Observable<Animal[]>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<AppState>, private modalService: ModalService) { }

  ngOnInit(): void {
    this.animals$ = this.store.select(selectAnimalsList);
    this.isLoading$ = this.store.select(selectAnimalsIsLoading);
  }

  deleteAnimal(id: number): void {
    this.store.dispatch(deleteAnimal({ id }));
  }

  editAnimal(animal): void {
    this.modalService.openAnimalModal(animal);
  }
}
