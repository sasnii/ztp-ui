import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalCardComponent } from './components/animal-card/animal-card.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditAnimalModalComponent } from './components/edit-animal-modal/edit-animal-modal.component';

@NgModule({
  declarations: [
    AnimalCardComponent,
    NavbarComponent,
    EditAnimalModalComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    // Angular Material
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    AnimalCardComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
