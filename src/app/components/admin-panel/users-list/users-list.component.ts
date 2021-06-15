import { selectUserList } from './../../../selectors/users.selector';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadUserList } from 'src/app/actions/user.actions';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users$: Observable<User[]>;
  displayedColumns: string[] = ['position', 'username', 'first_name', 'last_name', 'role', 'email', 'action'];

  constructor(private store: Store) {
    this.users$ = this.store.select(selectUserList);
  }

  ngOnInit(): void {
    this.store.dispatch(loadUserList());
  }

  changeUserRole(): void{

  }


}
