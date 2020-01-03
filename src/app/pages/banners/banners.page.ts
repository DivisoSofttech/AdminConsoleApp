import { Component, OnInit } from '@angular/core';
import { BannerDTO } from 'src/app/api/models';
import { QueryResourceService } from 'src/app/api/services';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.page.html',
  styleUrls: ['./banners.page.scss'],
})
export class BannersPage implements OnInit {

  banners: BannerDTO[];
  pageNumber:number=0;

  constructor(private queryService: QueryResourceService) { }


  ngOnInit() {
    this.queryService.getAllBannersUsingGET({page:this.pageNumber})
      .subscribe(response=>{
        console.log("banners: ",response);
        this.banners=response;
      })
  }
}
