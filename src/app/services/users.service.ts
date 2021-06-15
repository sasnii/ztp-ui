import { selectUserToken } from './../selectors/users.selector';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';

const baseUrl = environment.API_URL;
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  token: string = null;

  constructor(private http: HttpClient, private store: Store) {
    this.store.select(selectUserToken).subscribe(x => this.token = x);
   }

  getAll(): Observable<any> {
    return this.http.get(`${baseUrl}/users`, this.getOptions());
  }

  updateUserById(id, body): Observable<any> {
    return this.http.put(`${baseUrl}/users/${id}`, body, this.getOptions());
  }

  register(body): Observable<any> {
    return this.http.post(`${baseUrl}/users/register`, body);
  }

  login(body): Observable<any> {
    return this.http.post(`${baseUrl}/users/login`, body);
  }

  logout(): Observable<any> {
    return this.http.get(`${baseUrl}/users/logout`);
  }

  getOptions(): object{
    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Token ' + this.token
      })
    };
  }
}
