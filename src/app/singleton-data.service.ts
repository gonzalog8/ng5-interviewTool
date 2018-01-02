import { Injectable } from '@angular/core';
import { Interview } from './interview';
import { Questionnaire } from './questionnaire';

@Injectable()
export class SingletonDataService {
  private _interview: Interview;
  private _questionnaire: Questionnaire;

  constructor() { }

  setInterview(interview: Interview): void {
    if (this._interview) {
      return;
    }
    this._interview = interview;
  }

  setQuestionnaire(questionnaire: Questionnaire): void {
    if (this._questionnaire) {
      return;
    }
    this._questionnaire = questionnaire;
  }

  getInterview(): Interview {
    return this._interview;
  }

  getQuestionnaire(): Questionnaire {
    return this._questionnaire;
  }
}
