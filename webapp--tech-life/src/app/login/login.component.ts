import { Component, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../services/login.service';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private loginService: LoginService) { }

  @Output() success = new EventEmitter();

  user = {
    email: null,
    password: null
  }

  loggedUser = null;
  showErrorMessage: boolean = false;


  login() {
    this.loginService.login(this.user)
      .pipe(catchError((err: any) => {
        this.showErrorMessage = err.error.message;
        return EMPTY;
      }))
      .subscribe((res: any) => {
      this.loggedUser = res;
      if (this.loggedUser) {
        localStorage.setItem('user', JSON.stringify(this.loggedUser));
        return this.success.emit(this.loggedUser);
      }
    });
  }
}
