import { updateUser } from './../../../actions/user.actions';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, HostListener, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.scss']
})
export class EditUserModalComponent {

  form: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: User,
              private mdDialogRef: MatDialogRef<EditUserModalComponent>,
              private fb: FormBuilder,
              private store: Store) {
    this.form = this.fb.group({
      role: [this.data.role]
    });
  }

  public cancel(): void {
    this.close(false);
  }

  close(value): void {
    this.mdDialogRef.close('asdas');
  }

  confirmUser(): void {
    console.log('confirm user');
    this.close(false);
    this.store.dispatch(updateUser({
      id: this.data.id, user:
      {
        ...this.data,
        role: this.form.controls.role.value
      }
    }));
  }


  @HostListener('keydown.esc')
  onEsc(): void {
    this.close(false);
  }
}
