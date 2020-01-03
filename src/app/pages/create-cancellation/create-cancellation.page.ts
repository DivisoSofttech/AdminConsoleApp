import { CancelledOrderLineDTO } from './../../api/models/cancelled-order-line-dto';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { QueryResourceService } from 'src/app/api/services';
import { OrderLine } from 'src/app/api/models/order-line';
import { AuxItem, Order } from 'src/app/api/models';

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


 orderLines = [];
 
 cancelledOrderLineDTOs=[];

  aux: AuxItem[] = [];

  isOrderDetail:boolean = true;

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
      this.orderLines = orderLines;
      console.log(orderLines);
    });


  }

  segmentChanged(ev) {

    if (ev.detail.value ==='order detail') {
      this.isOrderDetail=true;
     }
     else{
      this.isOrderDetail=false;
     }

  }
  updateCancellationOrderLines(orderLine:OrderLine){

    console.log('updated order line ',orderLine);

  }

}
