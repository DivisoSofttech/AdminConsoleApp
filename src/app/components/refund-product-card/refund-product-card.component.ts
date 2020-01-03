import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QueryResourceService } from 'src/app/api/services';
import { AuxItem, OrderLine } from 'src/app/api/models';

@Component({
  selector: 'app-refund-product-card',
  templateUrl: './refund-product-card.component.html',
  styleUrls: ['./refund-product-card.component.scss'],
})
export class RefundProductCardComponent implements OnInit {
  maxQuantity: number;

  pricePerUnit:number;

 @Input() orderLine: OrderLine = {};
 aux: AuxItem[] = [];
 @Output() changeEmiter = new EventEmitter();


 ngOnInit() {
   this.maxQuantity = this.orderLine.quantity;
   console.log('initial orderline for refund ', this.orderLine);
   this.pricePerUnit=this.orderLine.total/this.orderLine.quantity;
   this.orderLine.quantity = 0;
   this.orderLine.total=0;
  

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
decreaseProductCount() {
   if (this.orderLine.quantity > 0) {this.orderLine.quantity--;
                                     this.orderLine.total = this.pricePerUnit * this.orderLine.quantity;
                                     this.changeEmiter.emit(this.orderLine);

   }

 }

increaseProductCount() {
   if (this.orderLine.quantity < this.maxQuantity) {this.orderLine.quantity++;
                                                    this.orderLine.total = this.pricePerUnit * this.orderLine.quantity;
                                                    this.changeEmiter.emit(this.orderLine);
                                                    console.log('price per unit  is =',this.pricePerUnit);

   }
 }

}
