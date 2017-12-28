import { Topic } from './topic';
import { Questionnaire } from './questionnaire';
import { Question } from './question';

export const QUESTIONNAIRE: Questionnaire[] = [
  { 'id': 1,
    'title': 'Java Developer',
    'glbAvg': 0,
    'topics': null
  },
  { 'id': 2,
    'title': 'WebUI Developer',
    'glbAvg': 0,
    'topics': null
  }
];
export const TOPICS: Topic[] = [
    { '_questionnaireID': 1,
      'id': 1,
      'title': 'Object Oriented Programming',
      'glbAvg' : 4.1,
      'questions': null
    },
    { '_questionnaireID': 1,
      'id': 2,
      'title': 'Spring',
      'glbAvg' : 3.2,
      'questions': null
    }
];

export const QUESTIONS: Question[] = [
  { '_topicID': 1, 'id': 1, 'title': 'What is a Constructor?', 'glbAvg' : 4.1 },
  { '_topicID': 1, 'id': 2, 'title': 'What is an Abstract Class?', 'glbAvg' : 4.3 },
  { '_topicID': 1, 'id': 3, 'title': 'What is an Interface?', 'glbAvg' : 4.2 },

  { '_topicID': 2, 'id': 4, 'title': 'What is Dependency Injection?', 'glbAvg' : 3.5 },
  { '_topicID': 2, 'id': 5, 'title': 'What are the types of DI in Spring?', 'glbAvg' : 3.5 }
];
