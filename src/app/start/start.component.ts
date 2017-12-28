import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Questionnaire } from '../questionnaire';

import { MatAutocompleteModule } from '@angular/material';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  questionnaires: Questionnaire[];

  getQuestionnaires(): void {
    this.dataService.getHTTPQuestionnaires().subscribe(qs =>
      this.questionnaires = qs
    );
  }
  questionnaireFormCtrl() {}

  startInterview() {
    this.router.navigateByUrl('/questionnaire');
  }

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.getQuestionnaires();
  }

}
