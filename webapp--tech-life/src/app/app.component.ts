import { Component } from '@angular/core';
import { ClassesService } from './services/classes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  showAdmPanel = false;
  showProfPanel = false;
  showStudentPanel = false;
  isUserLogged = false;
  
  onLogin(user: any) {

    this.isUserLogged = true;

    if (user.role === 'Administrador') {
      return this.showAdmPanel = true;
    }

    if (user.role === 'Professor') {
      return this.showProfPanel = true;
    }

    return this.showStudentPanel = true;
  }

  onLogout() {
    this.showAdmPanel = false;
    this.showProfPanel = false;
    this.showStudentPanel = false;
    this.isUserLogged = false;
    localStorage.removeItem('user');
  }
}
