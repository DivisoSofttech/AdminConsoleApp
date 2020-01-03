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
  declarations: [SearchResultComponent,OderSearchPopoverComponent,CancellationRequestComponent,OrderViewComponent,OrderProductCardComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [SearchResultComponent,OderSearchPopoverComponent,CancellationRequestComponent,OrderViewComponent,OrderProductCardComponent]
})
export class ComponentsModule { }
