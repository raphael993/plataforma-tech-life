import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(user: any): any {
    return this.http.post(`${environment.api}/login`, user);
  }


  logout(): boolean {
    return true;
   }

}
