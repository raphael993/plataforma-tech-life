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
    private classService: ClassesService
  ) { }

  showListClasses = true;
  showAddClass = false;

  classData = null;
  classList: Array<any> = [];
  updateClassData: any;

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
  }

  onEditClass(classData: any) {
    this.classService.updateClass(classData._id, classData).subscribe((res: any) => {
      this.updateClassData = null;
      this.showListClasses = true;
      this.showAddClass = false;
    });
  }

  onClose() {
    this.classData = null;
  }

  onLogout() {
    this.logout.emit();
  }

}
