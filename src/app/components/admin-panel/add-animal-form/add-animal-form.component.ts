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
      name: [],
      age: [],
      weight: [],
      height: [],
      description: [],
      type: [],
      image: []
    });
  }

  ngOnInit(): void {

  }

  addBook(): void {
    if (this.form.valid) {
        const body: Animal = {
          name: this.form.get('name')?.value,
          age: this.form.get('age')?.value,
          weight: this.form.get('weight')?.value,
          height: this.form.get('height')?.value,
          description: this.form.get('description')?.value,
          type: this.form.get('type')?.value,
          image: this.form.get('image')?.value
        };
        this.store.dispatch(addAnimal({animal: body}));
    } else {
      this.snackBar.open('Wrong values', 'Error', {
        duration: 3000
      });
    }
  }

}
