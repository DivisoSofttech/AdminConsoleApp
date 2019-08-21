import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { OrderService } from 'src/app/services/order.service';
import { AggregateQueryResourceService } from 'src/app/api/services';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {

  stores: string[];

  constructor(private orderService: OrderService, private queryService: AggregateQueryResourceService) {
   }

  ngOnInit() {
  }
  loadResults() {
    this.queryService.findStoreBySearchTermUsingGET({searchTerm: this.orderService.searchTerm}).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log('something went wrong', error);
      }
    );
  }
}
