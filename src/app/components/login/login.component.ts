import { LoginCredentials } from './../../models/loginCredentials';
import { login } from './../../actions/user.actions';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  public loginInvalid = false;

  constructor(private fb: FormBuilder, private store: Store) {
    this.form = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void{
    // check if already signed in
  }

  onSubmit(): void{
    const body: LoginCredentials = {
      username: this.form.get('login')?.value,
      password: this.form.get('password')?.value
    };
    this.store.dispatch(login({credential: body }));
  }
}
