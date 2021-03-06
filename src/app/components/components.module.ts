import { SubtermcardComponent } from './subtermcard/subtermcard.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ImageSelectorComponent } from './image-selector/image-selector.component';
import { RefundProductCardComponent } from './refund-product-card/refund-product-card.component';
import { CancellationRequestComponent } from './cancellation-request/cancellation-request.component';
import { OderSearchPopoverComponent } from './oder-search-popover/oder-search-popover.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SearchResultComponent } from './search-result/search-result.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { OrderProductCardComponent } from './order-product-card/order-product-card.component';
import { ImageCropperModule } from 'ngx-img-cropper';
import { CancellationDetailsComponent } from './cancellation-details/cancellation-details.component';
import { TermCardComponent } from './term-card/term-card.component';



@NgModule({
  declarations: [
    SearchResultComponent,
    OderSearchPopoverComponent,
    RefundProductCardComponent,
    CancellationRequestComponent,
    OrderViewComponent,
    OrderProductCardComponent,
    ImageSelectorComponent,
    CancellationDetailsComponent,
    FeedbackComponent,
    TermCardComponent,
    SubtermcardComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ImageCropperModule
  ],
  exports: [
    FeedbackComponent,
    SearchResultComponent,
    OderSearchPopoverComponent,
    RefundProductCardComponent,
    CancellationRequestComponent,
    OrderViewComponent,
    OrderProductCardComponent,
    ImageSelectorComponent,
    CancellationDetailsComponent,
    TermCardComponent,
    SubtermcardComponent
  ],
  entryComponents: [
    CancellationDetailsComponent,
    SubtermcardComponent
  ]

})
export class ComponentsModule { }
