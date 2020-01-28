import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewTermsAndConditionsPage } from './new-terms-and-conditions.page';

const routes: Routes = [
  {
    path: '',
    component: NewTermsAndConditionsPage
  }
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewTermsAndConditionsPage]
})
export class NewTermsAndConditionsPageModule {}
