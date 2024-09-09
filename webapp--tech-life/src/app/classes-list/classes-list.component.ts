import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrl: './classes-list.component.css'
})
export class ClassesListComponent {

  @Output() selectClass = new EventEmitter()
  @Input() classList: Array<any> = [];

  onSelectClass(classData: any) {
    this.selectClass.emit(classData);
  }
}
