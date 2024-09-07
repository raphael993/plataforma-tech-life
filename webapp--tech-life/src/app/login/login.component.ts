import { Component, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private loginService: LoginService) { }

  @Output() success = new EventEmitter();

  user = {
    username: null,
    password: null
  }

  loggedUser = null;
  showErrorMessage: boolean = false;


  login() {
    this.loggedUser = this.loginService.login(this.user);

    if (this.loggedUser) {
      return this.success.emit(this.loggedUser);
    }

    this.showErrorMessage = true;
  }



}
