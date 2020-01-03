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

  @Input() orderLine: OrderLine = {};
  aux: AuxItem[] = [];
  @Output() changeEmiter=new EventEmitter();


  ngOnInit() {
    this.maxQuantity = this.orderLine.quantity;
    console.log('max quantiti ',this.maxQuantity);
    this.orderLine.quantity = 0;

    this.getAuxItems();
  }


constructor(private query: QueryResourceService) { }

getAuxItems(){
    console.log(this.orderLine.id);
    this.query.findAuxItemsByIdUsingGET(this.orderLine.id).subscribe(aux => {
      this.aux = aux;
      console.log(aux);
    });
  }

getOfferLineItems() {

  }
decreaseProductCount() {
    if (this.orderLine.quantity > 0) {this.orderLine.quantity++;
                                      this.orderLine.total= this.orderLine.pricePerUnit*this.orderLine.quantity;
                                      this.changeEmiter.emit(this.orderLine);
    }

  }

increaseProductCount() {
    if (this.orderLine.quantity < this.maxQuantity) {this.orderLine.quantity--;
                                                     this.orderLine.total= this.orderLine.pricePerUnit*this.orderLine.quantity;
                                                     this.changeEmiter.emit(this.orderLine);

    }
  }

}
