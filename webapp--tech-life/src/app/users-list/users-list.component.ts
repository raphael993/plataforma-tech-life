import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {

  @Input() listUsers: Array<any> = [];
  @Output() removeUser = new EventEmitter();
  @Output() editUser = new EventEmitter();

  onEditUser(user: any) {
    this.editUser.emit(user);
  }

  onRemoveUser(_id: string) {
    this.listUsers = this.listUsers.filter((u) => u._id !== _id);
    this.removeUser.emit(_id);
  }
}
