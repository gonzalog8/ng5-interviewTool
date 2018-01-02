import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { SingletonDataService } from '../singleton-data.service';
import { Interview } from '../interview';
import { ShowableTopic } from '../showableTopic';
import { Answer } from '../answer';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  interview: Interview;
  resultingSeniority: string;
  showableTopic: Map<number, ShowableTopic>;
  gradeHint = {
    1: '1 - Cannot Perform',
    2: '2 - Can perform with supervision',
    3: '3 - Can perform with limited supervision',
    4: '4 - Can perform without supervision',
    5: '5 - Can teach others'
  };

  seniorityControl = new FormControl('', [Validators.required]);

  seniorities = [
    { name: 'Trainee' },
    { name: 'Junior' },
    { name: 'Junior Adv' },
    { name: 'Semi-Senior' },
    { name: 'Semi-Senior Adv' },
    { name: 'Senior' },
    { name: 'Software Designer' },
    { name: 'Architect' },
    { name: 'Tech Master' },
    { name: 'Tech Director' },
  ];

  constructor(private dataService: DataService, private singletonDataService: SingletonDataService) { }

  loadData() {
    this.interview = this.singletonDataService.getInterview();
  }

  ngOnInit() {
    // this.loadData();
    this.loadFakeData();
    this.interview.answers.sort( (a, b) => a._topicID - b._topicID);
    this.showableTopic = new Map<number, ShowableTopic>();
    this.groupAnswersByTopic();

  }

  // getTopicAvg(topicID: number): number {
  //   let topicSum: number = 0;
  //   let topicCount: number = 0;

  //   for (let eachAnswer of this.interview.answers) {
  //     if (eachAnswer._topicID === topicID) {
  //       topicSum += eachAnswer.grade;
  //       topicCount += 1;
  //     }
  //   }
  //   return topicSum / topicCount;
  // }

  saveAndClose() {
    console.log('notes: ' + this.interview.generalNotes);
    console.log('srty: ' + this.seniorityControl.value);
 }
  groupAnswersByTopic() {
    let previousTopicId: number;
    for ( let eachAnswer of this.interview.answers ) {

      if ( eachAnswer._topicID === previousTopicId ) {
        this.showableTopic.get(eachAnswer._topicID).answersList.push(eachAnswer);
        this.showableTopic.get(eachAnswer._topicID).avg =
                            ( this.showableTopic.get(eachAnswer._topicID).avg
                            + eachAnswer.grade )
                            / 2;
      } else {
        const st = new ShowableTopic();
        st.title = eachAnswer.topic;
        st.avg   = eachAnswer.grade;
        st.answersList = new Array<Answer>();
        st.answersList.push(eachAnswer);

        this.showableTopic.set(eachAnswer._topicID, st);
        previousTopicId = eachAnswer._topicID;
      }
    }
  }

  loadFakeData() {
    this.interview = new Interview();
    this.interview.id          = 1;
    this.interview.candidate   = 'Willy Junior';
    this.interview.interviewer = 'Mike GateKeeper';
    this.interview.answers = [
      { '_interivewID':  1,
        '_topicID':      1,
        '_questionID':   1,
        'topic':         'Object Oriented Programming',
        'question':      'What is a Constructor?',
        'isExtraCredit': false,
        'id':            1,
        'grade':         5,
        'notes':         'Clear understanding of all types of constructors'
      },
      { '_interivewID':  1,
        '_topicID':      2,
        '_questionID':   3,
        'topic':         'Spring',
        'question':      'What is a Dependency Injection?',
        'isExtraCredit': false,
        'id':            1,
        'grade':         3,
        'notes':         'Needed a little help to organize thoughts and express them'
      },
      { '_interivewID':  1,
        '_topicID':      1,
        '_questionID':   2,
        'topic':         'Object Oriented Programming',
        'question':      'What is an Abstract Class?',
        'isExtraCredit': false,
        'id':            1,
        'grade':         4,
        'notes':         'Clear understanding of Abstract Classes and how to create them'
      },
    ];
  }
}
