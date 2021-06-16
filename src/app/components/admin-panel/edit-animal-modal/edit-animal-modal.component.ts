import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Animal } from 'src/app/models/animal';
import { Store } from '@ngrx/store';
import { updateAnimal } from 'src/app/actions/animals.actions';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-edit-animal-modal',
  templateUrl: './edit-animal-modal.component.html',
  styleUrls: ['./edit-animal-modal.component.scss']
})
export class EditAnimalModalComponent {

  form: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Animal,
              private mdDialogRef: MatDialogRef<EditAnimalModalComponent>,
              private fb: FormBuilder,
              private store: Store
              ) {
    this.form = this.fb.group({
      name: [this.data.name],
      age: [this.data.age],
      weight: [this.data.weight],
      height: [this.data.height],
      description: [this.data.description],
      type: [this.data.type],
      image: [this.data.image]
    });
  }

  public cancel(): void {
    this.close(false);
  }

  close(value): void {
    this.mdDialogRef.close('return');
  }

  confirm(): void {
    console.log('confirm animal');
    this.close(false);
    this.store.dispatch(updateAnimal({id: this.data.id, animal:
    {
      ...this.data,
      name: this.form.controls.name.value,
      age: this.form.controls.age.value,
      weight: this.form.controls.weight.value,
      height: this.form.controls.height.value,
      description: this.form.controls.description.value,
      type: this.form.controls.type.value,
      image: this.form.controls.image.value
    }}));
  }

  @HostListener('keydown.esc')
  onEsc(): void {
    this.close(false);
  }
}
