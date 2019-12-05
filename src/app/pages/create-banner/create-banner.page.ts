import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import { OrderService } from 'src/app/services/order.service';
import { Store } from 'src/app/api/models';
import { AggregateQueryResourceService } from 'src/app/api/services';

@Component({
  selector: 'app-create-banner',
  templateUrl: './create-banner.page.html',
  styleUrls: ['./create-banner.page.scss'],
})
export class CreateBannerPage implements OnInit {

  searchStatus:boolean;
  stores: Store[];

  constructor(public imageService: ImageService, public orderService: OrderService,private queryService: AggregateQueryResourceService) { }

  ngOnInit() {
  }

  public createNewBanner(): void {
    console.log("creates new banner");
  }

  isNotSearching() {
    this.searchStatus = false;
    console.log('isNotSearching', this.searchStatus);
    this.orderService.searchTerm = null;
    this.stores = null;
  }

  isSearching() {

    this.searchStatus = true;
    console.log('isSearching', this.searchStatus);
/*     setTimeout(() => {
      this.searchBar.setFocus();
    }, 200);*/
  } 

  loadResults() {
    if (
      this.orderService.searchTerm !== '' ||
      this.orderService.searchTerm != null
    ) {
      this.queryService
        .findStoreBySearchTermUsingGET({
          searchTerm: this.orderService.searchTerm
        })
        .subscribe(
          response => {
            console.log(this.orderService.searchTerm, response.content);
            this.stores = response.content;
          },
          error => {
            console.error('something went wrong', error);
          }
        );
    } else {
      this.searchStatus = false;
    }
  }
}
