import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrl: './create-class.component.css'
})
export class CreateClassComponent {

  @Output() createClass = new EventEmitter();

  title: string = '';
  description: string = '';
  resourceList: string = '';
  videoUrl: string = '';

  onSubmit() {
    return this.createClass.emit({ 
      title: this.title,
      description: this.description,
      resourceList: [this.resourceList],
      videoUrl: this.videoUrl,
      comments: []
    });
  }

  onReset(form: any) {
    form.resetForm();
  }
}
