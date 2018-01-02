import { Component, OnInit, Input } from '@angular/core';
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


  constructor() {
  }

  ngOnInit() {
  }

}
