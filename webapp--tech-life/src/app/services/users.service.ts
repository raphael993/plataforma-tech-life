import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${environment.api}/users`);
  }

  getUser(_id: string) {
    return this.http.get(`${environment.api}/users/${_id}`);
  }

  createUser(user: any) {
    return this.http.post(`${environment.api}/users/`, user);
  }

  updateUser(_id: string, user: any) {
    return this.http.put(`${environment.api}/users/${_id}`, user);
  }

  deleteUser(_id: string) {
    return this.http.delete(`${environment.api}/users/${_id}`);
  }
}
