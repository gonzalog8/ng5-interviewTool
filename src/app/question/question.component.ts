import { Component, OnInit, Input, Output } from '@angular/core';
import { Question } from '../question';
import { Topic } from '../topic';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;
  @Input() topic: Topic;
  isExpanded: boolean = false;
  answeredWithGrade: number;


  answerSaved(event) {
    if (event) {
      this.isExpanded = false;
      this.answeredWithGrade = event;
    }
  }
  constructor() {
  }

  ngOnInit() {
  }

}
