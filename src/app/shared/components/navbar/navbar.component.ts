import { selectUserIsLoggedIn, selectUserRole } from './../../../selectors/users.selector';
import { Observable } from 'rxjs';
import { Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { logout } from 'src/app/actions/user.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent{

  isLoggedIn$: Observable<boolean>;
  userRole$: Observable<number>;

  constructor(private store: Store) {
    this.isLoggedIn$ = this.store.select(selectUserIsLoggedIn);
    this.userRole$ = this.store.select(selectUserRole);
   }


  logout(): void {
    this.store.dispatch(logout());
  }

}
