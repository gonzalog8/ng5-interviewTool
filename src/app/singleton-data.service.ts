import { Injectable } from '@angular/core';

@Injectable()
export class SingletonDataService {
  private _interviewID: number;
  private _questionnaireID: number;

  constructor() { }

  setInterviewID(interviewID: number): void {
    if (this._interviewID) {
      return;
    }
    this._interviewID = interviewID;
  }

  setQuestionnaireID(questionnaireID: number): void {
    if (this._questionnaireID) {
      return;
    }
    this._questionnaireID = questionnaireID;
  }

  getInterviewID(): number {
    return this._interviewID;
  }

  getQuestionnaireID(): number {
    return this._questionnaireID;
  }
}
