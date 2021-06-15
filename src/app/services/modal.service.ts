import { EditUserModalComponent } from './../components/admin-panel/edit-user-modal/edit-user-modal.component';
import { EditAnimalModalComponent } from '../components/admin-panel/edit-animal-modal/edit-animal-modal.component';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Animal } from '../models/animal';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private dialog: MatDialog) { }
  dialogRefAnimal: MatDialogRef<EditAnimalModalComponent>;
  dialogRefUser: MatDialogRef<EditUserModalComponent>;

  openAnimalModal(animal: Animal): void {
    this.dialogRefAnimal = this.dialog.open(EditAnimalModalComponent, {
      data: animal
    });

    this.dialogRefAnimal.afterClosed().subscribe(result => {
      console.log('ressss', result);
    });
  }

  openUserModal(user: User): void {
    this.dialogRefUser = this.dialog.open(EditUserModalComponent, {
      data: user
    });
  }
}
