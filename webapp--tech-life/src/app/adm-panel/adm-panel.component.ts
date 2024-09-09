import { Component, Output, EventEmitter, OnInit} from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-adm-panel',
  templateUrl: './adm-panel.component.html',
  styleUrl: './adm-panel.component.css'
})
export class AdmPanelComponent implements OnInit {
  @Output() logout = new EventEmitter();

  constructor(private userService: UsersService) { }

  showListUsers = true;
  showAddUser = false;

  listUsers: Array<any> = [];
  updateUserData: any;

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe((res: any) => {
      this.listUsers = res;
    })
  }

  onRemoveUser(_id: string) {
    this.userService.deleteUser(_id).subscribe((res: any) => {
      
    })
  }

  openUserEdit(user: any) {
    this.updateUserData = user;
    this.showListUsers = false;
    this.showAddUser = true;
  }

  onEditUser(user: any) {
    this.userService.updateUser(user._id, user).subscribe((res: any) => {
      this.updateUserData = null;
      this.showListUsers = true;
      this.showAddUser = false;
    });
  }

  onCreateUser(user: any) {
    this.userService.createUser(user).subscribe((res: any) => {
      this.listUsers.push(user);
      this.onShowListUsers();
    });
  }

  onUpdateUser(user: any) {
    this.userService.updateUser(user._id, user).subscribe((res: any) => {
      this.updateUserData = null;
      const index = this.listUsers.findIndex(u => user._id === u._id);
      if (index !== -1 && res) {
        this.listUsers[index] = user;
      }
      
      this.onShowListUsers();
    });
  }

  onShowListUsers() {
    this.showListUsers = true;
    this.showAddUser = false;
  }

  onShowAddUser() {
    this.showListUsers = false;
    this.showAddUser = true;
  }

  onLogout() {
    this.logout.emit();
  }
}
