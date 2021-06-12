import { Component, OnInit } from '@angular/core';
import { selectAnimalsList, selectAnimalsIsLoading } from './../../selectors/animals.selector';
import { AppState } from './../../models/state/state';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Animal } from 'src/app/models/animal';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}
