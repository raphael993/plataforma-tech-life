import { Component, Output, EventEmitter, OnInit  } from '@angular/core';
import { ClassesService } from '../services/classes.service';

@Component({
  selector: 'app-student-panel',
  templateUrl: './student-panel.component.html',
  styleUrl: './student-panel.component.css'
})
export class StudentPanelComponent implements OnInit {
  @Output() logout = new EventEmitter();

  classData = null;
  classList = [];
  loggedUser: any;

  constructor(private classesService: ClassesService) {}

  ngOnInit() {
    this.getClasses();
    this.loggedUser = JSON.parse(localStorage.getItem('user') || '{}');
  }

  getClasses() {
    this.classesService.getClasses().subscribe((res: any) => {
      this.classList = res;
    })
  }

  createClassesComment(data: any) {
      this.classesService.updateClass(data.classData._id, data.classData).subscribe((res: any) => {  
      })
  }

  onSelectClass(classData: any) {
    this.classData = classData;
  }

  onClose() {
    this.classData = null;
  }

  onLogout() {
    this.logout.emit();
  }
}
