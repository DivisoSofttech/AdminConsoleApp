import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CreateCancellationPage } from './create-cancellation.page';
import { OrderViewComponent } from 'src/app/components/order-view/order-view.component';
import { OrderProductCardComponent } from 'src/app/components/order-product-card/order-product-card.component';

const routes: Routes = [
  {
    path: '',
    component: CreateCancellationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CreateCancellationPage],
  entryComponents: [OrderViewComponent, OrderProductCardComponent]
})
export class CreateCancellationPageModule {}
