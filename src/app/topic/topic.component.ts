import { Component, OnInit, Input } from '@angular/core';
import { Topic } from '../topic';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})

export class TopicComponent implements OnInit {
  @Input() topics: Topic [];

  constructor() {
  }
  ngOnInit() {
  }

  addQuestion(topicId) {
    console.log('New Question to be added for topicId:' + topicId);
  }
}
