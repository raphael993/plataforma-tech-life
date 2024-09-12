import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrl: './classes-list.component.css'
})
export class ClassesListComponent {

  @Output() selectClass = new EventEmitter();
  @Input() classList: Array<any> = [];
  @Output() removeClass = new EventEmitter();
  @Output() editClass = new EventEmitter();

  onEditClass(classData: any) {
    this.editClass.emit(classData);
  }

  onRemoveClass(_id: string): void {
    this.classList = this.classList.filter((u) => u._id !== _id);
    this.removeClass.emit(_id);
  }

  onSelectClass(classData: any): void {
    this.selectClass.emit(classData);
  }
}
