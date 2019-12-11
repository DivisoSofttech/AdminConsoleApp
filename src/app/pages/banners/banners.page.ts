import { Component, OnInit } from '@angular/core';
import { AggregateQueryResourceService } from 'src/app/api/services';
import { BannerDTO } from 'src/app/api/models';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.page.html',
  styleUrls: ['./banners.page.scss'],
})
export class BannersPage implements OnInit {

  banners: BannerDTO[];

  constructor(private queryService: AggregateQueryResourceService) { }


  ngOnInit() {
    this.queryService.getAllBannersUsingGET({})
      .subscribe(response=>{
        console.log("banners: ",response);
        this.banners=response;
      })
  }
}
