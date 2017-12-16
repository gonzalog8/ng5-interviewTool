import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material';
import { MatFormFieldModule, MatInput, MatInputModule, MatCardModule } from '@angular/material/';
import { MatSliderModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatGridListModule } from '@angular/material';

import { TopicService } from './topic.service';
import 'hammerjs';

import { AppComponent } from './app.component';
import { InterviewerNameComponent } from './interviewer-name/interviewer-name.component';
import { HeaderComponent } from './header/header.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { TopicComponent } from './topic/topic.component';
import { QuestionComponent } from './question/question.component';
import { QuestionService } from './question.service';
import { AnswerComponent } from './answer/answer.component';


@NgModule({
  declarations: [
    AppComponent,
    InterviewerNameComponent,
    HeaderComponent,
    QuestionnaireComponent,
    TopicComponent,
    QuestionComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSliderModule,
    MatButtonModule,
    MatGridListModule
  ],
  providers: [ TopicService, QuestionService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
