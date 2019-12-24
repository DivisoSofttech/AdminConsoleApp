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
  constructor(private queryService: QueryResourceService) { }

  ngOnInit() {
    this.queryService.getAllOffersUsingGET({}).subscribe(
      response => {
        console.log(response);
        this.offers = response;
      },
      error => {
        console.log('error while getting offers', error);
      }
    );
  }

}
