import { CancellationDetailsComponent } from './../../components/cancellation-details/cancellation-details.component';
import { DecimalPipe } from '@angular/common';
import { CancellationRequestService } from './../../services/cancellation-request.service';
import { url } from 'inspector';
import { NavController, ToastController, ModalController } from '@ionic/angular';
import { Auxilary } from './../../customModels/auxilary';
import { CancellationRequestDTO } from './../../api/models/cancellation-request-dto';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { QueryResourceService, CommandResourceService } from 'src/app/api/services';
import { OrderLine } from 'src/app/api/models/order-line';
import { AuxItem, Order, CancelledOrderLineDTO, CancellationRequest } from 'src/app/api/models';
import { ThrowStmt } from '@angular/compiler';
import { Util } from 'src/app/services/util';

@Component({
  selector: 'app-create-cancellation',
  templateUrl: './create-cancellation.page.html',
  styleUrls: ['./create-cancellation.page.scss'],
})
export class CreateCancellationPage implements OnInit {

  constructor(private activeRoute: ActivatedRoute,
              private route: Router,  private query: QueryResourceService,
              private commandResource: CommandResourceService,
              private util: Util,
              private navCtrl: NavController,
              private cancellationRequestService: CancellationRequestService,
              private decimalPipe: DecimalPipe,
              private modalController: ModalController) { }
  orderId: string;


  order: Order = {};

  products = [];
  comboLineItems = [];
  auxilaries: Auxilary[] = [];




 orderLines = [];
  cancelledOrderLines: CancelledOrderLineDTO[] = [];
 cancellationRequestDTO: CancellationRequestDTO = {amount: 0};


  aux: AuxItem[] = [];



  ngOnInit() {
    console.log('id is ');
    this.orderId = this.activeRoute.snapshot.paramMap.get('id');
    console.log('id is ', this.orderId);


    this.query.findOrderByOrderIdUsingGET(this.orderId).subscribe(res => {

      this.order = res;
      if(this.order!==null){

      console.log('order is ', this.order);
      if (this.order.paymentMode !== 'COD') {

      this.findOrderLines();


      }
      else{
        this.util.createToast('cant create cancellation/refund on a cash on delivery order','waring');
        this.navCtrl.navigateBack('/cancellation');
      }
    }
    else{
      this.util.createToast('Cant find the order check the given order id ','waring');
      this.navCtrl.navigateBack('/cancellation');

    }

    }, err => {
      console.log('>>>>>>>>>>>>>>>>>>>', err);
    });
    console.log('order is ', this.order);
  

  }





    findOrderLines() {

    this.query.findOrderLinesByOrderNumberUsingGET(this.order.orderId).subscribe(orderLines => {
      // this.orderLines = orderLines;
      console.log('cancelled res >>>>>>', orderLines);
      this.orderLines = orderLines;

      console.log('cancelled orderlines>>>>>>');
      this.orderLines.forEach(re => {
        console.log('cancelled orderline=====', re);
      });
      this.calculateRefund();
    });


  }


  updateCancellationOrderLines(orderLine: OrderLine) {

    console.log('updated order line ', orderLine);
    console.log('canceledOrderLines ', this.orderLines);
    this.orderLines.forEach(res => {

      if (res.id === orderLine.id) {

      res = orderLine.total;

    }

    });
    this.calculateRefund();



  }

  updateAuxLines(auxilary: Auxilary) {

  // console.log('kdjnkdfjfndfn');
   if (!(this.auxilaries.includes(auxilary))) {
    this.auxilaries.push(auxilary);
    // console.log('new aux added ',auxilary);

   }
   this.calculateRefund();

  }
  calculateRefund() {

    this.cancellationRequestDTO.amount = 0;
    this.orderLines.forEach(res => {
       // console.log('res ', res);
      // console.log('res totel  ', res.total);

    //  console.log('refund Ammount ', this.cancellationRequestDTO.amount);
      this.cancellationRequestDTO.amount += res.total;
    });
    this.auxilaries.forEach(res => {
        console.log('res ', res);
        console.log('res totel  ', res.auxItem.total);

    //  console.log('refund Ammount ', this.cancellationRequestDTO.amount);
        this.cancellationRequestDTO.amount += res.auxItem.total;
    }

    );
    this.cancellationRequestDTO.amount = Number.parseFloat(this.decimalPipe.transform(this.cancellationRequestDTO.amount, '1.2-2'));
    //  console.log('refund Ammount piped', this.cancellationRequestDTO.amount);

  }

  createCancellation() {

    this.util.createLoader().then(loader => {
      loader.present();
      this.query.findCustomerByIdpCodeUsingGET(this.order.customerId).subscribe(res => {
      console.log('customer is ', res);
      this.cancellationRequestDTO.customerEmail = res.contact.email;
      this.cancellationRequestDTO.customerPhone = res.contact.mobileNumber;
      this.cancellationRequestDTO.phoneCode = res.contact.phoneCode;
      this.cancellationRequestDTO.orderId = this.order.orderId;

      this.cancellationRequestDTO.date = new Date().toISOString();
      // this.cancellationRequestDTO.paymentId=this.order.paymentRef
      this.cancellationRequestDTO.status = 'requested';
      this.cancellationRequestDTO.paymentId = this.order.paymentRef;
      console.log('created cancellation request ', this.cancellationRequestDTO);

      this.commandResource.createCancellationRequestUsingPOST(this.cancellationRequestDTO).subscribe(res1 => {
         console.log('created cancellation request ', res1);
         const cancellationRequest:CancellationRequest=res1;
         cancellationRequest.refundDetails=null;
         console.log('created cancellationRequest request ', cancellationRequest);

         this.saveCancelledOrderLines(res1.id);
        // this.cancellationRequestService.cancellationRequestDTOs.push(res1);
         // tslint:disable-next-line:max-line-length
         this.cancellationRequestService.cancellationRequestDTOs = [cancellationRequest].concat(this.cancellationRequestService.cancellationRequestDTOs);
         console.log('created cancellation requests ##### ',  this.cancellationRequestService.cancellationRequestDTOs);

         loader.dismiss();

         this.route.navigateByUrl('/cancellation');

       });
    },
    err => {
      console.log('error occred creating cancelation request ', err);
      loader.dismiss();

     });

    });

   }

   saveCancelledOrderLines(cancellationRequestId) {


    this.orderLines.forEach(element => {

      const cancelledOrderLine: CancelledOrderLineDTO = {};

      cancelledOrderLine.cancellationRequestId = cancellationRequestId;
      cancelledOrderLine.ammount = element.total;
      cancelledOrderLine.itemName = element.item;
      cancelledOrderLine.pricePerUnit = element.pricePerUnit;
      cancelledOrderLine.quantity = element.quantity;
      cancelledOrderLine.productId = element.productId;
      this.cancelledOrderLines.push(cancelledOrderLine);
     });
    console.log('cancelled orderlines  ', this.orderLines);
    this.commandResource.createCancelledOrderLineByListUsingPOST(this.cancelledOrderLines).subscribe(res => {
       console.log('cancelled orderlines created ', res);

     },
     err => {
      console.log(' error creating cancelledOrderlines ', err);

     });

   }


}
