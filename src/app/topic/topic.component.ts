import { Component, OnInit } from '@angular/core';
import { TopicService } from '../topic.service';
import { Topic } from '../topic';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})

export class TopicComponent implements OnInit {
  topics: Topic [];

  getTopics(): void {
    this.topics = this.topicService.getTopics();
  }

  constructor(private topicService: TopicService) {
  }

  ngOnInit() {
    this.getTopics();
  }

}
