import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Topic } from '../topic';
import { Questionnaire } from '../questionnaire';
import { Question } from '../question';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  questionnaire: Questionnaire;

  getQuestionnaire() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log('getQuestionnaire recieved ID: ' + id);
    this.dataService.getHTTPQuestionnaireById(id).subscribe(qs => this.questionnaire = qs);
  }
  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getQuestionnaire();
  }

}
