import { Question } from './question';

export class Topic {
    id: number;
    title: string;
    glbAvg: number;
    questions: Question[];
}
