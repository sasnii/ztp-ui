import { Register } from './../../models/register';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { register } from 'src/app/actions/user.actions';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.form = this.fb.group({
      firstName: ['First Name'],
      lastName: ['Last Name'],
      email: ['test@test.com', Validators.email],
      username: ['123456', Validators.required],
      password: ['123456', Validators.required],
      password2: ['123456', Validators.required]
    });
  }

  ngOnInit(): void{
    // check if already signed in
  }

  onSubmit(): void{
    const body: Register = {
      username: this.form.get('username')?.value,
      password: this.form.get('password')?.value,
      password2: this.form.get('password2')?.value,
      first_name: this.form.get('firstName')?.value,
      last_name: this.form.get('lastName')?.value,
      email: this.form.get('email')?.value
    };
    this.store.dispatch(register({register: body}));
  }

}
