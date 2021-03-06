import { Component, OnInit, NgModule, Input, Output, EventEmitter } from '@angular/core';
import { SingletonDataService } from '../singleton-data.service';
import { Question } from '../question';
import { Topic } from '../topic';
import { DataService } from '../data.service';
import { Answer } from '../answer';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  grade: number;
  notes: string;
  gradeHint = {
    1: '1 - Cannot Perform',
    2: '2 - Can perform with supervision',
    3: '3 - Can perform with limited supervision',
    4: '4 - Can perform without supervision',
    5: '5 - Can teach others'
  };
  @Input() question: Question;
  @Input() topic: Topic;
  @Output() onSaved = new EventEmitter<number>();

  private answer: Answer;

  save() {
    if (!this.answer) {
      this.answer  = new Answer();
      this.answer._interivewID  = this.singletonDataService.getInterview().id;
      this.answer._questionID   = this.question.id;
      this.answer._topicID      = this.topic.id;
      this.answer.topic         = this.topic.title;
      this.answer.question      = this.question.title;
      this.answer.grade         = this.grade;
      this.answer.notes         = this.notes || '';
      this.answer.isExtraCredit = false;

      this.dataService.postHTTPAnswer(this.answer).subscribe(a => {
        this.answer = a;
        this.singletonDataService.getInterview().answers.push(a);
        this.onSaved.emit(a.grade);
      });
    } else {
      this.answer.grade         = this.grade;
      this.answer.notes         = this.notes || '';

      this.dataService.putHTTPAnswer(this.answer).subscribe(a => {
        this.answer = a;
        this.onSaved.emit(a.grade);
        // TODO: UPDATE ANWSER IN INTERVIVEW.ANSWERS ARRAY.
      });

    }
  }

  constructor(private dataService: DataService, private singletonDataService: SingletonDataService) { }

  ngOnInit() {
  }

}
