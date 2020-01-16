import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { IonicModule } from '@ionic/angular';
import {NgxPaginationModule} from 'ngx-pagination';

import { ReportsPage } from './reports.page';

const routes: Routes = [
  {
    path: '',
    component: ReportsPage
  }
];

@NgModule({
  imports: 
  [
    //FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    CommonModule,
    FormsModule,
    NgxDatatableModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReportsPage]
})
export class ReportsPageModule {}
