import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Topic } from '../topic';
import { Questionnaire } from '../questionnaire';
import { Question } from '../question';
import { ActivatedRoute, Router } from '@angular/router';
import { SingletonDataService } from '../singleton-data.service';
import { Interview } from '../interview';

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

  // TODO: re-use for downloading functionality
  getAnswers() {
    this.dataService.getHTTPAnswers().subscribe(answers => {
      for(let a of answers) {
        console.log('---')
        for (let prop in a) {
          console.log(prop + ': ' + a[prop]);
        }
      }
    });
  }

  validateCorrectNavigation() {
    if ( !this.singletonDataService.getInterview()) {
      console.log('There is no interview generated. Redirecting to start page.');
      this.router.navigateByUrl('');
    }
  }

  getCloseAndReview() {
    const interview: Interview = this.singletonDataService.getInterview();
    interview.state = 'onReview';

    this.dataService.putHTTPInterview(interview).subscribe(data => {
      this.router.navigateByUrl('review');
    });
  }

  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              private router: Router,
              private singletonDataService: SingletonDataService ) { }

  ngOnInit() {
    this.validateCorrectNavigation();
    this.getQuestionnaire();
  }

}
