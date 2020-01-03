import { CancellationRequestDTO } from './../../api/models/cancellation-request-dto';
import { CancelledOrderLineDTO } from './../../api/models/cancelled-order-line-dto';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { QueryResourceService } from 'src/app/api/services';
import { OrderLine } from 'src/app/api/models/order-line';
import { AuxItem, Order } from 'src/app/api/models';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-create-cancellation',
  templateUrl: './create-cancellation.page.html',
  styleUrls: ['./create-cancellation.page.scss'],
})
export class CreateCancellationPage implements OnInit {

  constructor(private route: ActivatedRoute,  private query: QueryResourceService
    ) { }
  orderId: string;


  order: Order = {};

  products = [];
  auxilaries = [];
  comboLineItems = [];


// orderLines = [];

 cancelledOrderLines = [];
 cancellationRequestDTO: CancellationRequestDTO = {amount: 0};


  aux: AuxItem[] = [];

  //isOrderDetail = true;

  ngOnInit() {
    console.log('id is ');
    this.orderId = this.route.snapshot.paramMap.get('id');
    console.log('id is ', this.orderId);
    // this.getAuxItems();

    this.query.findOrderByOrderIdUsingGET(this.orderId).subscribe(res => {

      this.order = res;
      this.findOrderLines();

    }, err => {
      console.log('>>>>>>>>>>>>>>>>>>>', err);
    });

  }

  // getAuxItems() {
  //   console.log(this.orderLine.id);
  //   this.query.findAuxItemsByIdUsingGET(this.orderLine.id).subscribe(aux => {
  //     this.aux = aux;
  //     console.log(aux);
  //   });
  // }

  getOfferLineItems() {
  }


    findOrderLines() {

    this.query.findOrderLinesByOrderNumberUsingGET(this.order.orderId).subscribe(orderLines => {
      //this.orderLines = orderLines;
      console.log('cancelled res >>>>>>',orderLines);
      this.cancelledOrderLines = orderLines;
      console.log('cancelled orderlines>>>>>>');
      this.cancelledOrderLines.forEach(re=>{
        console.log('cancelled orderline=====',re);
      });
    });


  }

  // segmentChanged(ev) {

  //   if (ev.detail.value === 'order detail') {
  //     this.isOrderDetail = true;
  //    } else {
  //     this.isOrderDetail = false;
  //    }

  // }
  updateCancellationOrderLines(orderLine: OrderLine) {

    console.log('updated order line ', orderLine);
    this.cancellationRequestDTO.amount = 0;
    console.log('canceledOrderLines ', this.cancelledOrderLines);
    this.cancelledOrderLines.forEach(res => {
     // console.log('res ', res);
      this.cancellationRequestDTO.amount += res.total;
      //console.log('res totel  ', res.total);

    //  console.log('refund Ammount ', this.cancellationRequestDTO.amount);
      if (res.id === orderLine.id) {

      res = orderLine.total;

    }

    });


  }



}
