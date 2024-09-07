import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-adm-panel',
  templateUrl: './adm-panel.component.html',
  styleUrl: './adm-panel.component.css'
})
export class AdmPanelComponent {
  @Output() logout = new EventEmitter();

  showListUsers = true;
  showAddUser = false;

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
