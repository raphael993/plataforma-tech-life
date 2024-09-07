import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(user: any): any {
    const testeUser = {
      username: 'bia',
      password: '123',
      role: 'prof'
    }

    if (user.username === testeUser.username && user.password === testeUser.password) {
      return testeUser;
    }

    return null;
  }


  logout(): boolean {
    return true;
   }

}
