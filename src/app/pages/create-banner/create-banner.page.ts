import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-create-banner',
  templateUrl: './create-banner.page.html',
  styleUrls: ['./create-banner.page.scss'],
})
export class CreateBannerPage implements OnInit {

  constructor(public imageService: ImageService) { }

  ngOnInit() {
  }

  public createNewBanner(): void {
    console.log("creates new banner");
  }

}
