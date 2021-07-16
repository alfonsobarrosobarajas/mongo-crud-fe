import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseURL = 'http://localhost:3000/user';

  constructor(private httpClient: HttpClient) {}
  get(): Observable<any> {
    const url = `${this.baseURL}`;
    return this.httpClient.get(url);
  }

  create(user: User): Observable<any> {
    return this.httpClient.post(`${this.baseURL}`, user);
  }

  edit(user: User) {}
  deleteById(user: User) {
    const id = user.id;
    return this.httpClient.delete(`${this.baseURL}/` + id);
  }
}
