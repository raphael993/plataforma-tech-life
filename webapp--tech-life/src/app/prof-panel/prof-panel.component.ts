import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ClassesService } from '../services/classes.service';

@Component({
  selector: 'app-prof-panel',
  templateUrl: './prof-panel.component.html',
  styleUrl: './prof-panel.component.css'
})
export class ProfPanelComponent implements OnInit {
  @Output() logout = new EventEmitter();

  constructor(
    private classService: ClassesService,
    private classesService: ClassesService
  ) { }

  showListClasses = true;
  showAddClass = false;

  classData = null;
  classList: Array<any> = [];;

  ngOnInit() {
    this.classService.getClasses().subscribe((result: any) => {
      this.classList = result;
    })
  }

  onShowListClasses() {
    this.showListClasses = true;
    this.showAddClass = false;
  }

  onShowAddClass() {
    this.showListClasses = false;
    this.showAddClass = true;
    this.classData = null;
  }

  createClassesComment(data: any) {
    this.classesService.updateClass(data.classData._id, data.classData).subscribe((res: any) => {
    })
  }

  onSelectClass(classData: any) {
    this.classData = classData;
  }

  onCreateClass(classData: any) {
    this.classesService.createClass(classData).subscribe((res: any) => {
      this.classList.push(classData);
      this.onShowListClasses();
    })
  }

  onClose() {
    this.classData = null;
  }

  onLogout() {
    this.logout.emit();
  }

}
