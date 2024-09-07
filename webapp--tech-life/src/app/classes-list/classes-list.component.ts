import { Component } from '@angular/core';

@Component({
  selector: 'app-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrl: './classes-list.component.css'
})
export class ClassesListComponent {
  classList = [
    { titulo: 'Turma 1 - Titulo da Aula', descricao: 'Breve descrição sobre a aula ...' },
    { titulo: 'Turma 1 - Titulo da Aula', descricao: 'Breve descrição sobre a aula ...' },
    { titulo: 'Turma 1 - Titulo da Aula', descricao: 'Breve descrição sobre a aula ...' },
    { titulo: 'Turma 1 - Titulo da Aula', descricao: 'Breve descrição sobre a aula ...' },
  ]

  editClass() {

  }

  removeClass() {

  }
}
