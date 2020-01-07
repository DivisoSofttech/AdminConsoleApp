import { Status } from './../../api/models/status';
import { RefundDetailsDTO } from './../../api/models/refund-details-dto';
import { CommandResourceService } from 'src/app/api/services';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CancellationRequestDTO } from 'src/app/api/models';
import { CancellationRequestService } from 'src/app/services/cancellation-request.service';
import { Util } from 'src/app/services/util';

@Component({
  selector: 'app-cancellation-request',
  templateUrl: './cancellation-request.component.html',
  styleUrls: ['./cancellation-request.component.scss'],
})
export class CancellationRequestComponent implements OnInit {

  @Input() cancellation: CancellationRequestDTO;
  refundDto: RefundDetailsDTO = {};

  constructor(private commandResource: CommandResourceService,
              public cancellationRequestService: CancellationRequestService,
              private util:Util) {

   }

  ngOnInit() {
  }

  refund() {
    this.util.createLoader().then(loader=>{
      loader.present();
    this.refundDto.status = 'started';

    this.commandResource.createRefundDetailsUsingPOST({orderId: this.cancellation.orderId, refundDetailsDTO: this.refundDto}).subscribe(
res => {
  console.log('created refund detials ', res);
  this.cancellation.status='accepted';
  this.cancellationRequestService.completedRequestDTOs.push(this.cancellation);
  // console.log(' element completed ', this.cancellation);
   this.cancellationRequestService.cancellationRequestDTOs.splice(this.cancellationRequestService.cancellationRequestDTOs.indexOf(this.cancellation), 1 );
   loader.dismiss();
}, err => {
  loader.dismiss();
  console.log('error crating refund detials ', err);
}

    );
 } );

  }

}
