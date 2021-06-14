import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUserToken } from '../selectors/users.selector';

const baseUrl = environment.API_URL + '/animals';
@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  token: string = null;

  constructor(private http: HttpClient, private store: Store) {
    this.store.select(selectUserToken).subscribe(x => this.token = x);
  }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  getById(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(body): Observable<any> {
    return this.http.post(`${baseUrl}/add`, body, this.getOptions());
  }

  update(id, body): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, body, this.getOptions());
  }

  deleteById(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`, this.getOptions());
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl, this.getOptions());
  }

  getByName(name: string): Observable<any> {
    return this.http.get(`${baseUrl}?name=${name}`);
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
