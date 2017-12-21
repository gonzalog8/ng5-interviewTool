import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Topic } from '../topic';
import { NewQuestionDialogComponent } from '../new-question-dialog/new-question-dialog.component';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})

export class TopicComponent implements OnInit {
  @Input() topics: Topic [];
  newQuestion: String;

  constructor(public dialog: MatDialog) {}

  addQuestion(topicId): void {
    let dialogRef = this.dialog.open(NewQuestionDialogComponent, {
      width: '250px',
      data: { topicId: topicId }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed and the question was: ' + result);
      this.newQuestion = result;
    });
  }

  ngOnInit() {
  }

}
