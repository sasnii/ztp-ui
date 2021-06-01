import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = environment.API_URL;
@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  getById(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(body): Observable<any> {
    return this.http.post(baseUrl, body);
  }

  update(id, body): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, body);
  }

  deleteById(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByName(name: string): Observable<any> {
    return this.http.get(`${baseUrl}?name=${name}`);
  }
}
