import { Component, Output, EventEmitter, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent implements OnChanges{
  @Output() createUser = new EventEmitter();
  @Output() updateUser = new EventEmitter();
  @Input() updateUserData: any;

  name: string = '';
  email: string = '';
  isActive: boolean = true;
  role: string = '';
  password: string = '';

  roleList: Array<string> = ['Administrador', 'Professor', 'Aluno'];

  ngOnChanges(change: SimpleChanges) {
    if (change['updateUserData'].currentValue){

     const update = change['updateUserData'].currentValue;

      this.name = update.name
      this.email = update.email
      this.isActive = update.isActive
      this.role = update.role
      this.password =  update.password
    }
  }

  onSubmit() {
    if (!this.updateUserData) {
      return this.createUser.emit({ 
        name: this.name,
        email: this.email,
        isActive: this.isActive,
        role: this.role,
        password: this.password
      });
    }

    this.updateUser.emit({
      _id: this.updateUserData._id, 
      name: this.name,
      email: this.email,
      isActive: this.isActive,
      role: this.role,
      password: this.password
    });
    this.updateUserData = null;
  }

  onReset(form: any) {
    form.resetForm();
  }
}
