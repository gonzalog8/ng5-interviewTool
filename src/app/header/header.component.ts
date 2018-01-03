import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule, MatCard, MatDialog } from '@angular/material/';
import { SingletonDataService } from '../singleton-data.service';
import { Interview } from '../interview';
import { Router } from '@angular/router';
import { DownloadDialogComponent } from '../download-dialog/download-dialog.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private singletonDataService: SingletonDataService,
              private router: Router,
              public dialog: MatDialog) {}

  ngOnInit() {
  }

  downloadAction(): void {
    let dialogRef = this.dialog.open(DownloadDialogComponent, {
      width: '550px',
      data: { interview: this.downloadInterview() }
    });
  }

  downloadInterview(): string {
    console.log('DOWNLOADABLE INTERVIEW');
    const interview: Interview = this.singletonDataService.getInterview();

    if (! interview) {
      console.log('Interview is empty');
      return;
    }

    let output: string;
    output  = 'Candidate: '   + interview.candidate   + '\n';
    output += 'Interviewer: ' + interview.interviewer + '\n';
    output += 'Interview State: ' + interview.state   + '\n';
    output += 'Answers: \n';
    for (let eachAnswer of interview.answers) {
        output += '\t' + eachAnswer.topic + ' - ' + eachAnswer.question;
        output += '\t' + eachAnswer.grade + ' - ' + eachAnswer.notes;
        output += '\n';
    }
    output += '\n\n';
    output += 'Resulting Seniority: ' + interview.resultingSeniority + '\n';
    output += 'General Notes: '       + interview.generalNotes + '\n';

    return output;
  }

}
