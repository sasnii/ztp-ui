import { ModalService } from './../../../services/modal.service';
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

  constructor(private store: Store, private modalService: ModalService) {
    this.users$ = this.store.select(selectUserList);
  }

  ngOnInit(): void {
    this.store.dispatch(loadUserList());
  }

  changeUserRole(user): void{
      this.modalService.openUserModal(user);
  }

  displayRole(role: number): string{
    if (role === 1) { return 'Admin'; }
    else if (role === 2) { return 'Worker'; }
    else if (role === 3) { return 'User'; }
    else { return 'unknown role'; }
  }
}
