import { Util } from './../../services/util';
import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { PopoverController, IonSearchbar } from '@ionic/angular';
import { SearchResultComponent } from '../../components/search-result/search-result.component';
import { QueryResourceService } from '../../api/services';
import { Store } from '../../api/models';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  noFilter = true;
  searchStatus = false;
  stores: Store[];
  pageNumber: number;
  isRefreshed = false;
  refreshEvent;
  loader: HTMLIonLoadingElement;
  approvelPending=0;
  approved=0;
  completed=0;

  @ViewChild('searchBar', { static: false }) searchBar: IonSearchbar;

  constructor(
    public orderService: OrderService,
    private popoverController: PopoverController,
    private queryService: QueryResourceService,
    private util: Util
  ) {}

  listResults(ev: any) {
    this.presentPopover(ev);
  }

  test(ev) {
    console.log(' test ', ev.detail.value);
  }

dashBoardCount()
{

  this.queryService.findOrderCountByDateAndStatusNameUsingGET({
    statusName: 'delivered',
    date: this.orderService.endDate.split('T')[0]
  })
  .subscribe(
    response => {
      console.log(response);
      this.completed = response;
    },
    error => {
      if (this.isRefreshed) {
        this.refreshEvent.target.complete();
      }
      this.loader.dismiss();
      console.log('something went wrong', error, this.orderService.endDate.split('T')[0]);
    }
  );

  this.queryService.findOrderCountByDateAndStatusNameUsingGET({
    statusName: 'payment-processed-approved',
    date: this.orderService.endDate.split('T')[0]
  })
  .subscribe(
    response => {
      console.log(response);
      this.approved = response;
    },
    error => {
      if (this.isRefreshed) {
        this.refreshEvent.target.complete();
      }
      this.loader.dismiss();
      console.log('something went wrong', error, this.orderService.endDate.split('T')[0]);
    }
  );

  this.queryService.findOrderCountByDateAndStatusNameUsingGET({
    statusName: 'payment-processed-unapproved',
    date: this.orderService.endDate.split('T')[0]
  })
  .subscribe(
    response => {
      console.log(response);
      this.approvelPending = response;
    },
    error => {
      if (this.isRefreshed) {
        this.refreshEvent.target.complete();
      }
      this.loader.dismiss();
      console.log('something went wrong', error, this.orderService.endDate.split('T')[0]);
    }
  );
}

  ngOnInit() {
    this.dashBoardCount();
    this.util.createLoader().then(loader => {
      this.loader = loader;
      loader.present();
      this.orderService.selectedStore = {imageLink: '', storeUniqueId: ''};
      this.queryService
      .findOrderCountByDateAndStatusNameUsingGET({
        statusName: 'completed',
        date: this.orderService.endDate.split('T')[0]
      })
      .subscribe(
        response => {
          console.log(response);
          this.orderService.todaysCount = response;
        },
        error => {
          if (this.isRefreshed) {
            this.refreshEvent.target.complete();
          }
          this.loader.dismiss();
          console.log('something went wrong', error, this.orderService.endDate.split('T')[0]);
        }
      );
      this.queryService.findOrderCountByDateAndStatusNameUsingGET({
        statusName: 'payment-processed',
        date: this.orderService.endDate.split('T')[0]
      }).subscribe(
        res => {
          this.orderService.todaysCount += res;
        }, err => {
          if (this.isRefreshed) {
            this.refreshEvent.target.complete();
          }
          this.loader.dismiss();
          console.log('error ', err);
        }
      );
      this.loadOrdersWithDates();
    });
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
         name : this.orderService.searchTerm
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
        to: this.orderService.endDate.split('T')[0],
        storeId: this.orderService.selectedStore.regNo,
        from: this.orderService.startDate.split('T')[0], page: this.pageNumber
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
    this.orderService.selectedStore =  {storeUniqueId: '', imageLink: ''};
    this.loadOrdersWithDates();
  }

  loadOrdersWithDates() {
    console.log('if ', this.orderService.selectedStore);
    if (this.orderService.selectedStore.storeUniqueId != '') {
      // tslint:disable-next-line:max-line-length
      console.log('checking date and store regno', this.orderService.startDate, this.orderService.endDate, this.orderService.selectedStore.regNo);
      this.queryService
        .findOrderByDatebetweenAndStoreIdUsingGET({
          to: this.orderService.endDate.split('T')[0],
          storeId: this.orderService.selectedStore.regNo,
          from: this.orderService.startDate.split('T')[0], page: this.pageNumber
        })
        .subscribe(
          response => {
            if (this.isRefreshed) {
              this.refreshEvent.target.complete();
            }
            this.loader.dismiss();
            console.log(response);
            this.orderService.order = response.totalElements;
          },
          error => {
            if (this.isRefreshed) {
              this.refreshEvent.target.complete();
            }
            console.log('something went wrong', error);
            this.loader.dismiss();
          }
        );
    } else {

      this.queryService
        .findOrderMasterCountByExpectedDeliveryBetweenUsingGET({
          to: this.orderService.endDate.split('T')[0],
          from: this.orderService.startDate.split('T')[0]
        })
        .subscribe(
          response => {
            if (this.isRefreshed) {
              this.refreshEvent.target.complete();
            }
            this.loader.dismiss();
            console.log('got data betweens dates');
            console.log(response);
            this.orderService.order = response;
          },
          error => {
            if (this.isRefreshed) {
              this.refreshEvent.target.complete();
            }
            console.log('something went wrong', error);
            this.loader.dismiss();
          }
        );

    }

  }
  refresh(event) {
    this.isRefreshed = true;
    this.refreshEvent = event;
    this.ngOnInit();
  }
}
