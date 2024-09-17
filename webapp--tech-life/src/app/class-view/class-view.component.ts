import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-class-view',
  templateUrl: './class-view.component.html',
  styleUrl: './class-view.component.css'
})
export class ClassViewComponent {
  @Input() classData: any = null;
  @Output() close = new EventEmitter();
  @Output() createComment = new EventEmitter();

  comment: string = '';

  onCreateComment() {

    const loggedUser = JSON.parse(localStorage.getItem('user') || '{}');
    const commentObj = {
      user: loggedUser?.name ?? '',
      comment: this.comment,
      date: new Date()
    }

    this.classData.comments.push(commentObj);

    this.createComment.emit({ classData: this.classData, comment: commentObj });
    this.comment = '';
  }

  redirectToLink(url: string) {
    window.open(url, '_blank');
  }

  onClose() {
    this.close.emit();
  }
}
