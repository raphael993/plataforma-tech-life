import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(user: any): boolean {
    const testeUser = {
      username: "bia",
      password: "123"
    }

    if (user.username === testeUser.username && user.password === testeUser.password) {
      return true
    }


    return false

  }


  logout() { }

}
