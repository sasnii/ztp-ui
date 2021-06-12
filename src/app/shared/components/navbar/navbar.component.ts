import { selectUserIsLoggedIn } from './../../../selectors/users.selector';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;

  constructor(private store: Store) {
    this.isLoggedIn$ = this.store.select(selectUserIsLoggedIn);
   }

  ngOnInit(): void {
  }

}
