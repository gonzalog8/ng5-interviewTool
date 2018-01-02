import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'questionnaire/:id', component: QuestionnaireComponent },
  { path: 'review', component: ReviewComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
