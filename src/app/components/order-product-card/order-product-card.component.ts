import { AuxItem } from './../../api/models/aux-item';
import { QueryResourceService } from 'src/app/api/services';
import { OrderLine } from './../../api/models/order-line';
import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-order-product-card',
  templateUrl: './order-product-card.component.html',
  styleUrls: ['./order-product-card.component.scss'],
})
export class OrderProductCardComponent implements OnInit {

   maxQuantity: number;

   pricePerUnit:number;

  @Input() orderLine: OrderLine = {};
  aux: AuxItem[] = [];
 


  ngOnInit() {
    this.maxQuantity = this.orderLine.quantity;
    console.log('initial orderline ', this.orderLine);
    this.pricePerUnit=this.orderLine.total/this.orderLine.quantity;
    
   

    this.getAuxItems();
  }


constructor(private query: QueryResourceService) { }

getAuxItems() {
    console.log(this.orderLine.id);
    this.query.findAuxItemsByIdUsingGET(this.orderLine.id).subscribe(aux => {
      this.aux = aux;
      console.log(aux);
    });
  }

getOfferLineItems() {

  }

}
