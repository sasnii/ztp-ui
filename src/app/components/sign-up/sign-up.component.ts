import { Register } from './../../models/register';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { register } from 'src/app/actions/user.actions';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private store: Store, private userService: UsersService) {
    this.form = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: ['', Validators.email],
      username: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required]
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
