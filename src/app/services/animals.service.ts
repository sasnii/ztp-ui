import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = environment.API_URL + '/animals';
@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  constructor(private http: HttpClient) { }

  options = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Token ' + '25eec4dfa9512d645086bf8d199ded63a63e5b77',
      // 'Access-Control-Allow-Origin': '*'
    })
  };

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  getById(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(body): Observable<any> {
    return this.http.post(`${baseUrl}/add`, body, this.options);
  }

  update(id, body): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, body, this.options);
  }

  deleteById(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`, this.options);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  getByName(name: string): Observable<any> {
    return this.http.get(`${baseUrl}?name=${name}`);
  }
}
