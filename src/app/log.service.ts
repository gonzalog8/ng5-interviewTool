import { Injectable } from '@angular/core';

@Injectable()
export class LogService {
  logEntries: string[] = new Array<string>();

  constructor() {
  }

  log (entry: string) {
    this.logEntries.push(entry);
  }
  clear() {
    this.logEntries = [];
  }

}
