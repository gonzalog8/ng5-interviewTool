import { Answer } from './answer';

export class Interview {
    id: number;
    interviewer: string;
    candidate: string;
    state: string;
    resultingSeniority: string;
    generalNotes: string;
    answers: Answer[];
}
