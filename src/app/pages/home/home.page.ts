import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { PopoverController, IonSearchbar } from '@ionic/angular';
import { SearchResultComponent } from '../../components/search-result/search-result.component';
import { AggregateQueryResourceService } from '../../api/services';
import { Store } from '../../api/models';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  searchStatus = false;
  stores: Store[];
  @ViewChild('searchBar', { static: false }) searchBar: IonSearchbar;

  constructor(
    public orderService: OrderService,
    private popoverController: PopoverController,
    private queryService: AggregateQueryResourceService
  ) {}

  listResults(ev: any) {
    this.presentPopover(ev);
  }
  ngOnInit() {

    this.orderService.selectedStore={};
    
    this.queryService
      .getOrderCountByDateAndStatusNameUsingGET({
        statusName: 'completed',
        date: this.orderService.endDate.split("+")[0]+"Z"
      })
      .subscribe(
        response => {
          console.log(response);
          this.orderService.todaysCount = response;
        },
        error => {
          console.log('something went wrong', error);
        }
      );
    this.queryService.findOrderCountByDateAndStatusNameUsingGET({
        statusName: 'payment-processed',
        date: this.orderService.endDate.split("+")[0]+"Z"
      }).subscribe(
        res => {
          this.orderService.todaysCount = res;
        }
      );
    this.loadOrdersWithDates();
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: SearchResultComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  isNotSearching() {
    console.log('isNotSearching', this.searchStatus);
    this.searchStatus = false;
    this.orderService.searchTerm = null;
    this.stores = null;
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
    this.queryService
      .findOrderByDatebetweenAndStoreIdUsingGET({
        to: this.orderService.endDate.split("+")[0]+"Z",
        storeId: this.orderService.selectedStore.regNo,
        from: this.orderService.startDate.split("+")[0]+"Z"
      })
      .subscribe(
        response => {
          console.log(response);
          this.orderService.order = response.totalElements;
        },
        error => {
          console.log('something went wrong', error);
        }
      );
  }

  clearStore() {
    this.orderService.selectedStore = null;
    this.loadOrdersWithDates();
  }

  loadOrdersWithDates() {
    if (this.orderService.selectedStore) {
      console.log("checking date", this.orderService.startDate, this.orderService.endDate);
      this.queryService
        .findOrderByDatebetweenAndStoreIdUsingGET({
          to: this.orderService.endDate.split("+")[0]+"Z",
          storeId: this.orderService.selectedStore.regNo,
          from: this.orderService.startDate.split("+")[0]+"Z"
        })
        .subscribe(
          response => {
            console.log(response);
            this.orderService.order = response.totalElements;
          },
          error => {
            console.log('something went wrong', error);
          }
        );
    } else {
      console.log("checking date", this.orderService.startDate, this.orderService.endDate);
      this.queryService
        .findOrderByDatebetweenUsingGET({
          to: this.orderService.endDate.split("+")[0]+"Z",
          from: this.orderService.startDate.split("+")[0]+"Z"
        })
        .subscribe(
          response => {
            console.log(response);
            this.orderService.order = response.totalElements;
          },
          error => {
            console.log('something went wrong', error);
          }
        );
    }
  }
}
