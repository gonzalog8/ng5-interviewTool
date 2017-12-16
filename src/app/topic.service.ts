import { Injectable } from '@angular/core';
import { Topic } from './topic';
import { MOCKTOPIC } from './mock-topic';

@Injectable()
export class TopicService {

  getTopics(): Topic[] {
    return MOCKTOPIC;
  }

  constructor() { }

}
