import { EditAnimalModalComponent } from './../shared/components/edit-animal-modal/edit-animal-modal.component';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Animal } from '../models/animal';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private dialog: MatDialog) { }
  dialogRef: MatDialogRef<EditAnimalModalComponent>;

  log(value: string): void {
    console.log(value);
  }

  open(animal: Animal): void {
    this.dialogRef = this.dialog.open(EditAnimalModalComponent, {
      data: animal
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('ressss', result);
    });
  }

  confirmed(): Observable<any> {
    console.log('confirmed method Modal Service')
    return this.dialogRef.afterClosed().pipe(take(1), map(res => res));
  }
}
