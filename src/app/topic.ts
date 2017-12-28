import { Question } from './question';

export class Topic {
    _questionnaireID: number;
    id: number;
    title: string;
    glbAvg: number;
    questions: Question[];
}
