import { Component } from '@angular/core';
import { OrderService } from '../providers/order.service';
import { PopoverController } from '@ionic/angular';
import { SearchResultComponent } from '../components/search-result/search-result.component';
import { AggregateQueryResourceService } from '../api/services';
import { Store } from '../api/models';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  searchStatus: boolean = false;
  stores: Store[];

  constructor(private orderService: OrderService, private popoverController: PopoverController, private queryService: AggregateQueryResourceService) { }

  listResults(ev: any) {
    this.presentPopover(ev);
  }
  ngOnInit() {
    this.queryService.findOrderCountByDateAndStatusNameUsingGET({ statusName: "completed", date: this.orderService.endDate }).subscribe(
      response => {
        console.log(response);
        this.orderService.todaysCount = response;
      },
      error => {
        console.log("something went wrong", error);
      }
    );
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
    console.log("isNotSearching", this.searchStatus);
    this.searchStatus = false;
    this.orderService.searchTerm = null;
    this.stores = null;
  }
  isSearching() {
    console.log("isSearching", this.searchStatus);
    this.searchStatus = true;

  }
  loadResults() {
    if (this.orderService.searchTerm != "" || this.orderService.searchTerm != null) {
      this.queryService.findStoreBySearchTermUsingGET({ searchTerm: this.orderService.searchTerm }).subscribe(
        response => {
          console.log(this.orderService.searchTerm, response.content);
          this.stores = response.content;
        },
        error => {
          console.log("something went wrong", error);
        }
      );
    }
  }
  setCurrentStore(store: Store) {
    this.searchStatus = false;
    console.log("selected store",store);
    this.orderService.selectedStore = store;
    this.queryService.findOrderByDatebetweenAndStoreIdUsingGET(
      {
        to: this.orderService.endDate,
        storeId:this.orderService.selectedStore.regNo,
        from:this.orderService.startDate
      }).subscribe(response=>{
          console.log(response);
          this.orderService.order=response.content.length;
      },
      error=>{
        console.log("something went wrong",error);
      })
  }
  clearStore() {
    this.orderService.selectedStore=null;
  }
}
