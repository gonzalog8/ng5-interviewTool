import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material';
import { MatFormFieldModule, MatInput, MatInputModule, MatCardModule } from '@angular/material/';
import { MatDialogModule } from '@angular/material';
import { MatSliderModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatGridListModule } from '@angular/material';

import { DataService } from './data.service';
import 'hammerjs';

import { AppComponent } from './app.component';
import { InterviewerNameComponent } from './interviewer-name/interviewer-name.component';
import { HeaderComponent } from './header/header.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { TopicComponent } from './topic/topic.component';
import { QuestionComponent } from './question/question.component';
import { AnswerComponent } from './answer/answer.component';
import { NewQuestionDialogComponent } from './new-question-dialog/new-question-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    InterviewerNameComponent,
    HeaderComponent,
    QuestionnaireComponent,
    TopicComponent,
    QuestionComponent,
    AnswerComponent,
    NewQuestionDialogComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSliderModule,
    MatButtonModule,
    MatGridListModule,
    MatDialogModule
  ],
  providers: [ DataService ],
  bootstrap: [ AppComponent ],
  entryComponents: [ NewQuestionDialogComponent ]
})
export class AppModule { }
