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
      { '_topicID': 1, 'id': 1, 'title': 'What is a Constructor?', 'glbAvg' : 4.1, 'minimunSeniority': 'Jr', 'countOfUsage': 45 },
      { '_topicID': 1, 'id': 2, 'title': 'What is an Abstract Class?', 'glbAvg' : 4.3, 'minimunSeniority': 'Jr', 'countOfUsage': 32 },
      { '_topicID': 1, 'id': 3, 'title': 'What is an Interface?', 'glbAvg' : 4.2, 'minimunSeniority': 'Jr', 'countOfUsage': 34 },

      { '_topicID': 2, 'id': 4, 'title': 'What is Dependency Injection?', 'glbAvg' : 2.5, 'minimunSeniority': 'SSr', 'countOfUsage': 38 },
      { '_topicID': 2, 'id': 5, 'title': 'What are the types of DI in Spring?', 'glbAvg' : 3.0, 'minimunSeniority': 'Sr', 'countOfUsage': 29 }
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
      {'id' : 0,
       '_interivewID': 0,
       '_questionID': 0,
       '_topicID': 0,
       'topic': 'fake topic',
       'question': 'fake question',
       'grade': 0,
       'notes': 'fake notes',
       'isExtraCredit': false,
      }
    ];
    return { questionnaire, topics, question, interview, answer };
    }
  }
