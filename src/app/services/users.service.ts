import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const baseUrl = environment.API_URL;
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<any> {
    return this.http.get(`${baseUrl}/users`);
  }

  register(body): Observable<any> {
    return this.http.post(`${baseUrl}/users/register`, body, {headers : new HttpHeaders({ 'Content-Type': 'application/json' })});
  }

  login(body): Observable<any> {
    return this.http.post(`${baseUrl}/login`, body);
  }

  logout(): Observable<any> {
    return this.http.get(`${baseUrl}/logout`);
  }
}
