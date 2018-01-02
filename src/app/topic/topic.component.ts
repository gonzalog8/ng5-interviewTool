import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Topic } from '../topic';
import { NewQuestionDialogComponent } from '../new-question-dialog/new-question-dialog.component';
import { DataService } from '../data.service';
import { Question } from '../question';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})

export class TopicComponent implements OnInit {
  @Input() topic: Topic;

  constructor(public dialog: MatDialog, private dataService: DataService) {}

  addQuestion(topicID, topicTitle): void {
    let dialogRef = this.dialog.open(NewQuestionDialogComponent, {
      width: '550px',
      data: { topicID: topicID, topicTitle: topicTitle }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed and the question was: ' + result + '. topicID: ' + topicID);
      if (result) {
        this.dataService.postHTTPQuestion({'_topicID': topicID, 'title': result, 'glbAvg': 0} as Question).subscribe(newQ => {
          this.topic.questions.push(newQ);
        });
      }
    });
  }

  ngOnInit() {
  }

}
