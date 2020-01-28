import { ModalController } from '@ionic/angular';
import { Status } from './../../api/models/status';
import { RefundDetailsDTO } from './../../api/models/refund-details-dto';
import { CommandResourceService } from 'src/app/api/services';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CancellationRequestDTO, CancellationRequest } from 'src/app/api/models';
import { CancellationRequestService } from 'src/app/services/cancellation-request.service';
import { Util } from 'src/app/services/util';
import { CancellationDetailsComponent } from '../cancellation-details/cancellation-details.component';

@Component({
  selector: 'app-cancellation-request',
  templateUrl: './cancellation-request.component.html',
  styleUrls: ['./cancellation-request.component.scss'],
})
export class CancellationRequestComponent implements OnInit {

  @Input() cancellation: CancellationRequest;
  refundDto: RefundDetailsDTO = {};

  constructor(private commandResource: CommandResourceService,
              public cancellationRequestService: CancellationRequestService,
              private util: Util,
              private modalController: ModalController) {

   }

  ngOnInit() {
  }


  

  refund() {
    this.util.createLoader().then(loader => {
      loader.present();
      // this.refundDto.amount = this.cancellation.amount;
      this.commandResource.createRefundUsingPOST({paymentId: this.cancellation.paymentId,
         orderId: this.cancellation.orderId, refundDetailsDTO: this.refundDto}).subscribe(
            res => {
              console.log('created refund detials ', res);
              if (res.status === 'completed') {
              this.cancellation.status = 'accepted';
              this.cancellation.refundDetails = res;
              // tslint:disable-next-line: max-line-length
              this.cancellationRequestService.completedRequestDTOs = [this.cancellation].concat(this.cancellationRequestService.completedRequestDTOs);
              // console.log(' element completed ', this.cancellation);
              // tslint:disable-next-line:max-line-length
              this.cancellationRequestService.cancellationRequestDTOs.splice(this.cancellationRequestService.cancellationRequestDTOs.indexOf(this.cancellation), 1 );

              } else {
                this.util.presentAlert('Alert', 'The payment is not received at our bank account, Please try after sometime.');
              }
              loader.dismiss();
            }, err => {
              loader.dismiss();
              console.log('error crating refund detials ', err);
              this.util.presentAlert('Alert', 'An error occured, Please try after sometime.');

            } );
        } );

     }

     async moreInfo() {

      const modal = await this.modalController.create({
        component: CancellationDetailsComponent,
        componentProps: {
          cancellation: this.cancellation,

        }
      });
      return await modal.present();

     }

}
