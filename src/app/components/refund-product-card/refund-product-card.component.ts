import { Auxilary } from './../../customModels/auxilary';
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

  pricePerUnit: number;

 @Input() orderLine: OrderLine = {};
 auxs: Auxilary[] = [];
 @Output() changeEmiter = new EventEmitter();
 @Output() auxChangeEmiter=new EventEmitter();

 ngOnInit() {
   this.maxQuantity = this.orderLine.quantity;
   this.pricePerUnit = this.orderLine.total / this.orderLine.quantity;
   this.orderLine.pricePerUnit=this.pricePerUnit;

   console.log('initial orderline for refund ', this.orderLine);
   


   this.getAuxItems();
 }


constructor(private query: QueryResourceService) { }

getAuxItems() {
   console.log(this.orderLine.id);
   this.query.findAuxItemsByIdUsingGET(this.orderLine.id).subscribe(aux => {
     aux.forEach(res => {
      const auxilary = new Auxilary();
      auxilary.auxItem = res;
      auxilary.maxQuantity = res.quantity;
      auxilary.pricePerUnit = res.total / res.quantity;
      res.quantity = 0;
      res.total = 0;
      this.auxs.push(auxilary);

     });

     console.log('auxilary ', this.auxs);
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
                                                    console.log('price per unit  is =', this.pricePerUnit);

   }
 }

 decreaseAuxCount(auxilary: Auxilary) {
  if (auxilary.auxItem.quantity > 0) {auxilary.auxItem.quantity--;
                                      auxilary.auxItem.total = auxilary.pricePerUnit * auxilary.auxItem.quantity;
                                      this.auxChangeEmiter.emit(auxilary);

  }

}

increaseAuxCount(auxilary: Auxilary) {
  console.log('hiii', );
  if (auxilary.auxItem.quantity <  auxilary.maxQuantity) {auxilary.auxItem.quantity++;
                                                          auxilary.auxItem.total = auxilary.pricePerUnit * auxilary.auxItem.quantity;
                                                          this.auxChangeEmiter.emit(auxilary);
                                                          console.log(' aux price per  unit  is =', auxilary.pricePerUnit);
}
}

}
