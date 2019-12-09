import { Component, OnInit, ViewChild } from '@angular/core';
import { PopoverController, IonSearchbar, ModalController } from '@ionic/angular';
import { OrderService } from 'src/app/services/order.service';
import { AggregateQueryResourceService } from 'src/app/api/services';
import { Store, BannerDTO } from 'src/app/api/models';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {

  stores: Store[];
  searchStatus: boolean;

  @ViewChild('searchBar', { static: false }) searchBar: IonSearchbar;
  
  constructor(private orderService: OrderService, private queryService: AggregateQueryResourceService, private modalController: ModalController) {
   }

  ngOnInit() {

  }
  ionViewDidEnter() {
    this.searchBar.setFocus().then(data=>{
      console.log("searchbar got focus",data);
    },err=>{
      console.error("error when focusing searchbar",err);
    });
  }

  isNotSearching() {
    console.log('isNotSearching', this.searchStatus);
    this.searchStatus = false;
    this.orderService.searchTerm = null;
    this.stores = null;
    this.modalController.dismiss();
  }
  isSearching() {
    console.log('isSearching', this.searchStatus);
    this.searchStatus = true;
    setTimeout(() => {
      this.searchBar.setFocus();
    }, 200);
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
            console.log('something went wrong', error);
          }
        );
    } else {
      this.searchStatus = false;
    }
  }
  setCurrentStore(store: Store) {
    this.isNotSearching();
    console.log('selected store', store);
    this.orderService.selectedStore = store;
    this.searchStatus = false;
  }

  clearStore() {
    this.orderService.selectedStore = null;
  }
}
