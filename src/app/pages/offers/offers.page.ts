import { Component, OnInit } from '@angular/core';
import { QueryResourceService } from '../../api/services';
import { OfferDTO } from '../../api/models';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  offers: OfferDTO[];
  refreshEvent;

  constructor(private queryService: QueryResourceService) { }

  ngOnInit() {
    this.getAllOffers(0);
  }

  getAllOffers(i) {
    this.queryService.getAllOffersUsingGET({page: i}).subscribe(
      response => {
        console.log(response);
        this.offers = response;
        if (this.refreshEvent) {
          this.refreshEvent.target.complete();
        }
      },
      error => {
        console.log('error while getting offers', error);
        if (this.refreshEvent) {
          this.refreshEvent.target.complete();
        }
      }
    );
  }

  refresh(event) {
    this.refreshEvent = event;
    this.offers = [];
    this.getAllOffers(0);
  }
}
