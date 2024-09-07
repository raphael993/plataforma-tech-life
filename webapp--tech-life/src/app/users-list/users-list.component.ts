import { Component } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {

  userList = [
    { name: 'Raphael Rosa', email: 'raphael.rosa@techlife.com', role: 'Administrador', active: true},
    { name: 'Agatha Carvalho', email: 'agatha.carvalho@techlife.com', role: 'Aluno', active: true},
    { name: 'José Maria', email: 'jose.maria@techlife.com', role: 'Administrador', active: false},
    { name: 'João Pedro', email: 'joao.pedro@techlife.com', role: 'Professor', active: true},
  ]

  editUser() {

  }

  removeUser() {

  }
}
