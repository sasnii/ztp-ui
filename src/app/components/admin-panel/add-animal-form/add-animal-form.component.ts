import { addAnimal } from './../../../actions/animals.actions';
import { AppState } from './../../../models/state/state';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/animal';
import { Store } from '@ngrx/store';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-animal-form',
  templateUrl: './add-animal-form.component.html',
  styleUrls: ['./add-animal-form.component.scss']
})
export class AddAnimalFormComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<AppState>, private snackBar: MatSnackBar) {
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
          name: this.form.get('name')?.value,
          age: 10, // TODO: add in form
          weight: '10',
          height: '10',
          description: this.form.get('description')?.value,
          type: 'dog',
          image: this.form.get('url')?.value // TODO: change variable name
        };
        this.store.dispatch(addAnimal({animal: body}));
    } else {
      console.error('Wrong values');
      this.snackBar.open('Wrong values', 'Error');
    }
  }

}
