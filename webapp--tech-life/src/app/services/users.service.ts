import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('http://localhost:3000/users');
  }

  getUser(_id: string) {
    return this.http.get(`http://localhost:3000/users/${_id}`);
  }

  createUser(user: any) {
    return this.http.post(`http://localhost:3000/users/`, user);
  }

  updateUser(_id: string, user: any) {
    return this.http.put(`http://localhost:3000/users/${_id}`, user);
  }

  deleteUser(_id: string) {
    return this.http.delete(`http://localhost:3000/users/${_id}`);
  }
}
