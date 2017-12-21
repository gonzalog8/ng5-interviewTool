import { Component, OnInit } from '@angular/core';
import { QuestionnaireService } from '../questionnaire.service';
import { Topic } from '../topic';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  topics: Topic[];

  getQuestionnaire() {
    this.topics = this.questionnaireService.getQuestionnaire();
  }
  constructor(private questionnaireService: QuestionnaireService) { }

  ngOnInit() {
    this.getQuestionnaire();
  }

}
