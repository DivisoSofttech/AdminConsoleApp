import { MessageComponent } from './message/message.component';
import { RefundProductCardComponent } from './refund-product-card/refund-product-card.component';
import { CancellationRequestComponent } from './cancellation-request/cancellation-request.component';
import { OderSearchPopoverComponent } from './oder-search-popover/oder-search-popover.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SearchResultComponent } from './search-result/search-result.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { OrderProductCardComponent } from './order-product-card/order-product-card.component';



@NgModule({
  declarations: [MessageComponent ,SearchResultComponent,OderSearchPopoverComponent,RefundProductCardComponent,CancellationRequestComponent,OrderViewComponent,OrderProductCardComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [MessageComponent,SearchResultComponent,OderSearchPopoverComponent,RefundProductCardComponent,CancellationRequestComponent,OrderViewComponent,OrderProductCardComponent]
})
export class ComponentsModule { }
