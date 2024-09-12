import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrl: './classes-list.component.css'
})
export class ClassesListComponent implements OnInit {

  @Output() selectClass = new EventEmitter();
  @Input() classList: Array<any> = [];
  @Output() removeClass = new EventEmitter();
  @Output() editClass = new EventEmitter();

  allowEdition: boolean = false;

  ngOnInit() {
    this.allowEdition = JSON.parse(localStorage.getItem('user') || '{}')?.role !== 'Aluno';
  }

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
