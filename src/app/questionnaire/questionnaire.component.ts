import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Topic } from '../topic';
import { Questionnaire } from '../questionnaire';
import { Question } from '../question';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  questionnaire: Questionnaire;

  getQuestionnaire() {
    this.questionnaire = this.dataService.getQuestionnaireById(1);
  }
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getQuestionnaire();
  }

}
