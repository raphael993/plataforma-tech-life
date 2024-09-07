import { Component } from '@angular/core';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrl: './create-class.component.css'
})
export class CreateClassComponent {
  tituloAula: string = '';
  descricaoAula: string = '';
  materialApoio: string = '';
  aula: string = '';

  onSubmit() {
    
  }

  onReset(form: any) {
    form.resetForm(); // Limpa o formulário
  }
}
