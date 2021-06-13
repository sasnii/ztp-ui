import { selectUserIsLoggedIn } from './../../../selectors/users.selector';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { logout } from 'src/app/actions/user.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;

  isAdmin$: Observable<boolean>;
  isWorker$: Observable<boolean>;

  constructor(private store: Store) {
    this.isLoggedIn$ = this.store.select(selectUserIsLoggedIn);
   }

  ngOnInit(): void {
  }

  logout(): void {
    console.log('logout button')
    this.store.dispatch(logout());
  }

}
