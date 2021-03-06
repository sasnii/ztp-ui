import { ErrorEffects } from './effects/error.effect';
import { UserEffect } from './effects/users.effect';
import { AnimalsEffects } from './effects/animals.effect';
import { userReducer } from './reducers/user.reducer';
import { animalReducer } from './reducers/animals.reducer';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AnimalsListComponent } from './components/admin-panel/animals-list/animals-list.component';
import { AddAnimalFormComponent } from './components/admin-panel/add-animal-form/add-animal-form.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { WorkerPanelComponent } from './components/worker-panel/worker-panel.component';
import { UsersListComponent } from './components/admin-panel/users-list/users-list.component';
import {MatTabsModule} from '@angular/material/tabs';
import { EditUserModalComponent } from './components/admin-panel/edit-user-modal/edit-user-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SignUpComponent,
    AdminPanelComponent,
    AnimalsListComponent,
    AddAnimalFormComponent,
    WorkerPanelComponent,
    UsersListComponent,
    EditUserModalComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    // NgRx
    StoreModule.forRoot({
      animals: animalReducer,
      user: userReducer
    }),
    EffectsModule.forRoot([
      AnimalsEffects,
      UserEffect,
      ErrorEffects
    ]),
    StoreDevtoolsModule.instrument(),
    // Angular Material
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatTableModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
