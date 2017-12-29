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
  questionnaireFormCtrl() {}

  startInterview() {
    if (this.candidate.invalid || this.interviewer.invalid || this.selectedQuestionnaire.invalid) {
      return;
    }
    this.router.navigateByUrl('/questionnaire');
  }

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.getQuestionnaires();
  }

}
