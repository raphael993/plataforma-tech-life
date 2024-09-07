import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() logout = new EventEmitter();
  @Input() isUserLogged: boolean = false;

  onLogout() {
    this.logout.emit();
  }
}
