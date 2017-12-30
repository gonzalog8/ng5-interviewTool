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
import { Interview } from './interview';
import { Answer } from './answer';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DataService {
  // URLs to web api
  private questionnaireUrl = 'api/questionnaire';
  private questionUrl = 'api/question';
  private interviewUrl = 'api/interview';
  private answerUrl = 'api/answer';

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

  // HTTP GET SERVICES
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

  getHTTPAnswers (): Observable<Answer[]> {
    return this.http.get<Answer[]>(this.answerUrl);
  }
  getHTTPAnswerById (id: number): Observable<Answer> {
    return this.http.get<Answer>(this.answerUrl + '/' + id);
  }

  // HTTP POST SERVICES
  postHTTPQuestion (question: Question) {
    return this.http.post<Question>(this.questionUrl, question, httpOptions).pipe(
      tap((q: Question) => console.log(`service says questions added w/ id=${q.id}`)),
      catchError(this.handleError<Question>('addQuestion'))
    );
  }

  postHTTPInterview (interview: Interview) {
    return this.http.post<Interview>(this.interviewUrl, interview, httpOptions).pipe(
      tap((i: Interview) => console.log(`service says interview added w/ id=${i.id}`)),
      catchError(this.handleError<Interview>('addInterview'))
    );
  }

  postHTTPAnswer (answer: Answer) {
    return this.http.post<Answer>(this.answerUrl, answer, httpOptions).pipe(
      tap((a: Answer) => console.log(`service says answer added w/ id=${a.id}`)),
      catchError(this.handleError<Answer>('addAnswer'))
    );
  }

  putHTTPAnswer (answer: Answer) {
    return this.http.put<Answer>(this.answerUrl, answer, httpOptions).pipe(
      // tap((a: Answer) => console.log(`service says answer updated w/ id=${a.id}`)),
      catchError(this.handleError<Answer>('updateAnswer'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
