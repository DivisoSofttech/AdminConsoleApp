import { FeedbackComponent } from 'src/app/components/feedback/feedback.component';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FeedbacksPage } from './feedbacks.page';

const routes: Routes = [
  {
    path: '',
    component: FeedbacksPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  
  ],
  declarations: [FeedbacksPage],
  entryComponents:[FeedbackComponent]
})
export class FeedbacksPageModule {}
