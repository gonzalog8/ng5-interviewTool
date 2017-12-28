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

  constructor(public dialog: MatDialog) {}

  addQuestion(topicIdx, topicID, topicTitle): void {
    let dialogRef = this.dialog.open(NewQuestionDialogComponent, {
      width: '550px',
      data: { topicIdx: topicIdx, topicID: topicID, topicTitle: topicTitle }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed and the question was: ' + result + '. TopicIDX: ' + topicIdx  + '. TopicID: ' + topicID);
      if (result) {
        this.topics[topicIdx].questions.push({'_topicID': topicID, 'id': 44, 'title': result, 'glbAvg': 0});
      }
    });
  }

  ngOnInit() {
  }

}
