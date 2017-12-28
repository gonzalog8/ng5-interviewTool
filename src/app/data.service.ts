import { Injectable } from '@angular/core';
import { QUESTIONNAIRE } from './mock-data';
import { TOPICS } from './mock-data';
import { QUESTIONS } from './mock-data';
import { Topic } from './topic';
import { Questionnaire } from './questionnaire';
import { Question } from './question';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class DataService {
  private questionnaireUrl = 'api/questionnaire';  // URL to web api

  constructor(private http: HttpClient) { }

  // PLAIN METHODS
  getQuestionnaires(): Observable<Questionnaire[]> {
    return of(QUESTIONNAIRE);
  }

  getTopics(): Observable<Topic[]> {
    return of(TOPICS);
  }

  getQuestions(): Observable<Question[]> {
    return of(QUESTIONS);
  }

  // GET BY ID METHODS
  getQuestionnaireById(id: number): Observable<Questionnaire> {
    let questionnaire: Questionnaire;

    for (let q of QUESTIONNAIRE) {
      if (q.id === id) {
        questionnaire = q;
      }
    }
    questionnaire.topics = this.getTopicsByQuestionnaireID(questionnaire.id);

    for (let t of questionnaire.topics) {
      t.questions = this.getQuestionsByTopicID(t.id);
    }

    return of(questionnaire);
  }

  getTopicsByQuestionnaireID(questionnaireID: number): Topic[] {
    const topics: Topic[] = new Array<Topic>();

    for (let t of TOPICS) {
      if (t._questionnaireID === questionnaireID) {
        topics.push(t);
      }
    }
    return topics;
  }

  getQuestionsByTopicID(topicID: number): Question[] {
    const questions: Question[] = new Array<Question>();

    for (let q of QUESTIONS) {
      if (q._topicID === topicID) {
        questions.push(q);
      }
    }
    return questions;
  }

  // HTTP SERVICES
  getHTTPQuestionnaires (): Observable<Questionnaire[]> {
    return this.http.get<Questionnaire[]>(this.questionnaireUrl);
  }

  getHTTPQuestionnaireById(id: number): Observable<Questionnaire> {
    // return this.http.get<Questionnaire>(this.questionnaireUrl + '/' + id);
    return this.http.get<Questionnaire>(this.questionnaireUrl + '/' + id)
      .pipe(
        map(qn => {
          qn.topics = this.getTopicsByQuestionnaireID(qn.id);
          for (let t of qn.topics) {
            t.questions = this.getQuestionsByTopicID(t.id);
          }
          return qn;
        })
      );
  }
}
