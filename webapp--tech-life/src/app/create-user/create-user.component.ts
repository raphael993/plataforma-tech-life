import { Component } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
  nome: string = '';
  email: string = '';
  status: string = 'ativo'; // Valor padrão para o radio button

  onSubmit() {
    
  }

  onReset(form: any) {
    form.resetForm(); // Reseta os campos do formulário
  }
}
