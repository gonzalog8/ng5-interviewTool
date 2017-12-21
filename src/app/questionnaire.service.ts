import { Injectable } from '@angular/core';
import { MOCKQUESTIONNAIRE } from './mock-questionnaire';
import { Topic } from './topic';

@Injectable()
export class QuestionnaireService {
  data = MOCKQUESTIONNAIRE;
  constructor() { }

  getQuestionnaire(): Topic[] {
    return MOCKQUESTIONNAIRE;
  }
}
