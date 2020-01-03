import { Component, OnInit } from '@angular/core';
import { BannerDTO } from 'src/app/api/models';
import { QueryResourceService, CommandResourceService } from 'src/app/api/services';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.page.html',
  styleUrls: ['./banners.page.scss'],
})
export class BannersPage implements OnInit {

  banners: BannerDTO[];
  pageNumber = 0;

  constructor(
    private queryService: QueryResourceService,
    private alertController: AlertController,
    private command: CommandResourceService
  ) { }


  ngOnInit() {
    this.queryService.getAllBannersUsingGET({page: this.pageNumber})
      .subscribe(response => {
        console.log('banners: ', response);
        this.banners = response;
      });
  }

  async deleteBanner(banner) {
    const alert = await this.alertController.create({
      header: 'Delete Banner',
      message: 'Are you Sure!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Delete',
          handler: () => {
            this.command.deleteBannerUsingDELETE(banner.id)
              .subscribe(data => {
                console.log('banner deleted');
                this.banners = this.banners.filter(b => b.id !== banner.id);
              });
          }
        }
      ]
    });

    await alert.present();
  }
}
