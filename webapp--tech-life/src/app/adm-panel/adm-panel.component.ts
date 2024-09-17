import { Component, Output, EventEmitter, OnInit} from '@angular/core';
import { ClassesService } from '../services/classes.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-adm-panel',
  templateUrl: './adm-panel.component.html',
  styleUrl: './adm-panel.component.css'
})
export class AdmPanelComponent implements OnInit {
  @Output() logout = new EventEmitter();

  constructor(
    private userService: UsersService,
    private classService: ClassesService
  ) { }

  showListUsers = true;
  showAddUser = false;
  showListClasses = false;
  showAddClass = false;

  listUsers: Array<any> = [];
  updateUserData: any;

  classData = null;
  classList: Array<any> = [];
  updateClassData: any;
  loggedUser: any;

  ngOnInit() {
    this.getUsers();
    this.getClasses();
    this.loggedUser = JSON.parse(localStorage.getItem('user') || '{}');
  }

  getUsers() {
    this.userService.getUsers().subscribe((res: any) => {
      this.listUsers = res;
    })
  }

  getClasses() {
    this.classService.getClasses().subscribe((result: any) => {
      this.classList = result;
    })
  }

  onRemoveUser(_id: string) {
    this.userService.deleteUser(_id).subscribe((res: any) => {
    })
  }

  openUserEdit(user: any) {
    this.updateUserData = user;
    this.showListUsers = false;
    this.showListClasses = false;
    this.showAddClass = false;
    this.showAddUser = true;
  }

  onEditUser(user: any) {
    this.userService.updateUser(user._id, user).subscribe((res: any) => {
      this.updateUserData = null;
      this.showListUsers = true;
      this.showAddUser = false;
      this.showListClasses = false;
      this.showAddClass = false;
    });
  }

  onShowListUsers() {
    this.showListUsers = true;
    this.showAddUser = false;
    this.showListClasses = false;
    this.showAddClass = false;
  }

  onShowAddUser() {
    this.showListUsers = false;
    this.showAddUser = true;
    this.showListClasses = false;
    this.showAddClass = false;
  }

  onShowListClasses() {
    this.showListClasses = true;
    this.showAddClass = false;
    this.showListUsers = false;
    this.showAddUser = false;
  }

  onShowAddClass() {
    this.showListClasses = false;
    this.showAddClass = true;
    this.classData = null;
    this.showListUsers = false;
    this.showAddUser = false;
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

  createClassesComment(data: any) {
    this.classService.updateClass(data.classData._id, data.classData).subscribe((res: any) => {
    })
  }

  onSelectClass(classData: any) {
    this.classData = classData;
  }

  onCreateClass(classData: any) {
    this.classService.createClass(classData).subscribe((res: any) => {
      this.classList.push(classData);
      this.onShowListClasses();
    })
  }

  onUpdateClass(classData: any) {
    this.classService.updateClass(classData._id, classData).subscribe((res: any) => {
      this.updateClassData = null;
      const index = this.classList.findIndex(c => classData._id === c._id);
      if (index !== -1 && res) {
        this.classList[index] = classData;
      }
      
      this.onShowListClasses();
    });
  }

  onRemoveClass(_id: string) {
    this.classService.deleteClass(_id).subscribe((res: any) => {
    })
  }

  openClassEdit(classData: any) {
    this.updateClassData = classData;
    this.showListClasses = false;
    this.showAddClass = true;
    this.showListUsers = false;
    this.showAddUser = false;
  }

  onEditClass(classData: any) {
    this.classService.updateClass(classData._id, classData).subscribe((res: any) => {
      this.updateClassData = null;
      this.showListClasses = true;
      this.showAddClass = false;
      this.showListUsers = false;
      this.showAddUser = false;
    });
  }

  onClose() {
    this.classData = null;
  }

  onLogout() {
    this.logout.emit();
  }
}
