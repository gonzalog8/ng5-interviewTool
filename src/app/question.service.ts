import { Injectable } from '@angular/core';
import { Question } from './question';
import { MOCKQUESTION } from './mock-questions';


@Injectable()
export class QuestionService {

  getQuestions(): Question[] {
    return MOCKQUESTION;
  }

  constructor() { }

}
