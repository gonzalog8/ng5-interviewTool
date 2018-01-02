import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {

  constructor(public logService: LogService) { }

  clearLogs() {
    this.logService.clear();
  }

  ngOnInit() {
  }

}
