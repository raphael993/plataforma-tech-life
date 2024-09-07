import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor (private loginService:LoginService) {}

 user={username:"",password:""}
 
 loginSuccess:boolean = false
 showErrorMessage:boolean = false

 
 
  login() { 
   this.loginSuccess= this.loginService.login(this.user)

   if (this.loginSuccess === false) {
    this.showErrorMessage = true
   }
  }



}
