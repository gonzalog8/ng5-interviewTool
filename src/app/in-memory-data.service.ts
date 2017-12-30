import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Interview } from './interview';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const questionnaire = [
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
    const topics = [
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
    const question = [
      { '_topicID': 1, 'id': 1, 'title': 'What is a Constructor?', 'glbAvg' : 4.1 },
      { '_topicID': 1, 'id': 2, 'title': 'What is an Abstract Class?', 'glbAvg' : 4.3 },
      { '_topicID': 1, 'id': 3, 'title': 'What is an Interface?', 'glbAvg' : 4.2 },

      { '_topicID': 2, 'id': 4, 'title': 'What is Dependency Injection?', 'glbAvg' : 3.5 },
      { '_topicID': 2, 'id': 5, 'title': 'What are the types of DI in Spring?', 'glbAvg' : 3.5 }
    ];

    const interview = [
      {'id' : 1,
      'interviewer': 'fake',
      'candidate': 'lake',
      'state': 'inprocess',
      'resultingSeniority': 'junior',
      'generalNotes': 'very junior',
      'answers': null,
      }
    ];

    const answer = [
      {'id' : 1,
       '_interivewID': 1,
       '_questionID': 1,
       '_topicID': 1,
       'topic': 'fake topic',
       'question': 'fake question',
       'grade': 1,
       'notes': 'fake notes',
       'isExtraCredit': false,
      }
    ];
    return { questionnaire, topics, question, interview, answer };
    }
  }
