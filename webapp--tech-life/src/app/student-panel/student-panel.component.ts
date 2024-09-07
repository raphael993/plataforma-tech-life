import { Component, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-student-panel',
  templateUrl: './student-panel.component.html',
  styleUrl: './student-panel.component.css'
})
export class StudentPanelComponent {
  @Output() logout = new EventEmitter();

  onLogout() {
    this.logout.emit();
  }
}
