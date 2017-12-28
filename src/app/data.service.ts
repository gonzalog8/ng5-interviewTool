import { Injectable } from '@angular/core';
import { QUESTIONNAIRE } from './mock-data';
import { TOPICS } from './mock-data';
import { QUESTIONS } from './mock-data';
import { Topic } from './topic';
import { Questionnaire } from './questionnaire';
import { Question } from './question';

@Injectable()
export class DataService {
  constructor() { }

  getQuestionnaires(): Questionnaire[] {
    return QUESTIONNAIRE;
  }

  getTopics(): Topic[] {
    return TOPICS;
  }

  getQuestions(): Question[] {
    return QUESTIONS;
  }

  getQuestionnaireById(id: number): Questionnaire {
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

    return questionnaire;
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
}
