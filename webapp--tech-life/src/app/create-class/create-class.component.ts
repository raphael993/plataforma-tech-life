import { Component, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrl: './create-class.component.css'
})
export class CreateClassComponent implements OnChanges {

  @Output() createClass = new EventEmitter();
  @Output() updateClass = new EventEmitter();
  @Input() updateClassData: any;

  title: string = '';
  description: string = '';
  resourceList: string = '';
  videoUrl: string = '';
  comments: Array<any> = [];

  ngOnChanges(change: SimpleChanges) {
    if (change['updateClassData'].currentValue){

     const update = change['updateClassData'].currentValue;

      this.title = update.title;
      this.description = update.description;
      this.resourceList = update.resourceList;
      this.videoUrl = update.videoUrl;
    }
  }

  onSubmit() {
    if (!this.updateClassData) {
      return this.createClass.emit({ 
        title: this.title,
        description: this.description,
        resourceList: [this.resourceList],
        videoUrl: this.videoUrl,
        comments: []
      })
    }

    this.updateClass.emit({
      _id: this.updateClassData._id, 
      title: this.title,
      description: this.description,
      resourceList: this.resourceList,
      videoUrl: this.videoUrl,
    });
    this.updateClassData = null;
  }

  onReset(form: any) {
    form.resetForm();
  }
}
