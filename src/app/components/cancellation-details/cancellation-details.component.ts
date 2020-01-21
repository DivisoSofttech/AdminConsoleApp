import { ModalController } from '@ionic/angular';
import { QueryResourceService } from 'src/app/api/services';
import { CancelledAuxilaryOrderLine } from './../../api/models/cancelled-auxilary-order-line';
import { CancelledOrderLine } from './../../api/models/cancelled-order-line';
import { CancellationRequestDTO } from './../../api/models/cancellation-request-dto';
import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'src/app/api/models/order';

@Component({
  selector: 'app-cancellation-details',
  templateUrl: './cancellation-details.component.html',
  styleUrls: ['./cancellation-details.component.scss'],
})
export class CancellationDetailsComponent implements OnInit {

  constructor(private queryResourceService:QueryResourceService,
    private modalCtrl:ModalController) { }

cancellation: CancellationRequestDTO = {};
cancelledOrderLines: CancelledOrderLine[] = [];
cancelledAuxilaryOrderLines: CancelledAuxilaryOrderLine[] = [];


  ngOnInit() {
this.queryResourceService.findCancellationOrderLinesAndCancelledAuxilaryOrderLinesByIdUsingGET(this.cancellation.id).subscribe(
  res=>{
      console.log(' got orderlines ',res);
      this.cancelledOrderLines=res.cancelledOrderLines;
      this.cancelledAuxilaryOrderLines=res.cancelledAuxilaryOrderLines;


  },
  err=>{
    console.log(' got orderlines ',err);

  }
);

  }

  dismiss(){
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }


}
