import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material';
import { MatFormFieldModule, MatInput, MatInputModule, MatCardModule } from '@angular/material/';
import { MatDialogModule } from '@angular/material';
import { MatSliderModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatGridListModule } from '@angular/material';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';

import { DataService } from './data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import 'hammerjs';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { TopicComponent } from './topic/topic.component';
import { QuestionComponent } from './question/question.component';
import { AnswerComponent } from './answer/answer.component';
import { NewQuestionDialogComponent } from './new-question-dialog/new-question-dialog.component';
import { AppRoutingModule } from './/app-routing.module';
import { StartComponent } from './start/start.component';
import { InterviewComponent } from './interview/interview.component';
import { SingletonDataService } from './singleton-data.service';
import { ReviewComponent } from './review/review.component';
import { ConsoleComponent } from './console/console.component';
import { LogService } from './log.service';
import { DownloadDialogComponent } from './download-dialog/download-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuestionnaireComponent,
    TopicComponent,
    QuestionComponent,
    AnswerComponent,
    NewQuestionDialogComponent,
    StartComponent,
    InterviewComponent,
    ReviewComponent,
    ConsoleComponent,
    DownloadDialogComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSliderModule,
    MatButtonModule,
    MatGridListModule,
    MatDialogModule,
    MatSelectModule,
    MatChipsModule,
    MatTooltipModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [ DataService, SingletonDataService, LogService ],
  bootstrap: [ AppComponent ],
  entryComponents: [ NewQuestionDialogComponent, DownloadDialogComponent ]
})
export class AppModule { }
