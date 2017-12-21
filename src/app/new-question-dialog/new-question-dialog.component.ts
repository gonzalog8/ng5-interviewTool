import { Component, OnInit, Inject, NgModule } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-new-question-dialog',
  templateUrl: './new-question-dialog.component.html',
  styleUrls: ['./new-question-dialog.component.css']
})
export class NewQuestionDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NewQuestionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
