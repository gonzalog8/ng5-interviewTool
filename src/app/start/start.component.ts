import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Questionnaire } from '../questionnaire';

// import { MatAutocompleteModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { ReturnStatement } from '@angular/compiler/src/output/output_ast';
import { Interview } from '../interview';
import { SingletonDataService } from '../singleton-data.service';
import { Answer } from '../answer';


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  interviewer = new FormControl('', [Validators.required]);
  candidate = new FormControl('', [Validators.required]);
  questionnaireControl = new FormControl('', [Validators.required]);
  questionnaires: Questionnaire[];

  getQuestionnaires(): void {
    this.dataService.getHTTPQuestionnaires().subscribe(qs =>
      this.questionnaires = qs
    );
  }

  startInterview() {
    if (this.candidate.invalid || this.interviewer.invalid || this.questionnaireControl.invalid) {
      return;
    }
    const interview = {
      'interviewer': this.interviewer.value,
      'candidate': this.candidate.value,
      'state': 'inprocess',
      'resultingSeniority': '',
      'generalNotes': '',
      'answers': new Array<Answer>(),
    };
    this.dataService.postHTTPInterview(interview as Interview).subscribe(newI => {
      this.singletonDataService.setInterview(newI);
      this.singletonDataService.setQuestionnaire(this.questionnaireControl.value);
      this.router.navigateByUrl('/questionnaire/' + this.questionnaireControl.value.id);
    });
  }

  constructor(private router: Router, private dataService: DataService, private singletonDataService: SingletonDataService) { }

  ngOnInit() {
    this.getQuestionnaires();
  }

}
