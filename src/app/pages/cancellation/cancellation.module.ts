import { CancellationRequestComponent } from './../../components/cancellation-request/cancellation-request.component';
import { OderSearchPopoverComponent } from './../../components/oder-search-popover/oder-search-popover.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CancellationPage } from './cancellation.page';

const routes: Routes = [
  {
    path: '',
    component: CancellationPage
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
  declarations: [CancellationPage],
  entryComponents:[OderSearchPopoverComponent,CancellationRequestComponent]
})
export class CancellationPageModule {}
