import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-prof-panel',
  templateUrl: './prof-panel.component.html',
  styleUrl: './prof-panel.component.css'
})
export class ProfPanelComponent {
  @Output() logout = new EventEmitter();

  showListClasses = true;
  showAddClass = false;

  onShowListClasses() {
    this.showListClasses = true;
    this.showAddClass = false;
  }

  onShowAddClass() {
    this.showListClasses = false;
    this.showAddClass = true;
  }

  onLogout() {
    this.logout.emit();
  }

}
