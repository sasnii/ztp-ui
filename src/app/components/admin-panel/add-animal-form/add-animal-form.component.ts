import { addAnimal } from './../../../actions/animals.actions';
import { AppState } from './../../../models/state/state';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/animal';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-add-animal-form',
  templateUrl: './add-animal-form.component.html',
  styleUrls: ['./add-animal-form.component.scss']
})
export class AddAnimalFormComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.form = this.fb.group({
      name: [''],
      description: [''],
      url: ['']
    });
  }

  ngOnInit(): void { }

  addBook(): void {
    if (this.form.valid) {
        const body: Animal = {
          id: 1,
          name: this.form.get('name')?.value,
          description: this.form.get('description')?.value,
          url: this.form.get('url')?.value
        };
        this.store.dispatch(addAnimal({animal: body}));
    } else {
      console.error('Wrong values');
    }
  }

}
