import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  showAdmPanel = false;
  showProfPanel = false;
  showStudentPanel = true;
  isUserLogged = true;
  
  onLogin(user: any) {

    this.isUserLogged = true;

    if (user.role === 'adm') {
      return this.showAdmPanel = true;
    }

    if (user.role === 'prof') {
      return this.showProfPanel = true;
    }

    return this.showStudentPanel = true;
  }

  onLogout() {
    this.showAdmPanel = false;
    this.showProfPanel = false;
    this.showStudentPanel = false;
    this.isUserLogged = false;
  }
}
