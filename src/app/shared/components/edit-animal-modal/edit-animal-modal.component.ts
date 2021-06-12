import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Animal } from 'src/app/models/animal';

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
              ) {
    this.form = this.fb.group({
      name: [this.data.name],
      description: [this.data.description],
      image: [this.data.image]
    });
  }

  public cancel(): void {
    this.close(false);
  }

  close(value): void {
    this.mdDialogRef.close('asda');
  }

  confirm(): void {
    this.close(true);
  }

  @HostListener('keydown.esc')
  onEsc(): void {
    this.close(false);
  }
}
