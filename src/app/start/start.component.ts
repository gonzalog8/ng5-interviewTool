import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Questionnaire } from '../questionnaire';

import { MatAutocompleteModule } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { ReturnStatement } from '@angular/compiler/src/output/output_ast';
import { Interview } from '../interview';


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  interviewer = new FormControl('', [Validators.required]);
  candidate = new FormControl('', [Validators.required]);
  selectedQuestionnaire = new FormControl('', [Validators.required]);
  questionnaires: Questionnaire[];

  getQuestionnaires(): void {
    this.dataService.getHTTPQuestionnaires().subscribe(qs =>
      this.questionnaires = qs
    );
  }

  startInterview() {
    if (this.candidate.invalid || this.interviewer.invalid || this.selectedQuestionnaire.invalid) {
      return;
    }
    const interview = {
      'interviewer': this.interviewer.value,
      'candidate': this.candidate.value,
      'state': 'inprocess',
      'resultingSeniority': '',
      'generalNotes': '',
      'answers': null,
    };
    this.dataService.putHTTPInterview(interview as Interview).subscribe(newI => {
      console.log('ID:' + newI.id);
      console.log('interviewer:' + newI.interviewer);
      console.log('candidate:' + newI.candidate);
    });
    // this.router.navigateByUrl('/questionnaire');
  }

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.getQuestionnaires();
  }

}
