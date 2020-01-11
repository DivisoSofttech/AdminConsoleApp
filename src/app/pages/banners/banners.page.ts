import { Util } from './../../services/util';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BannerDTO } from 'src/app/api/models';
import { QueryResourceService, CommandResourceService } from 'src/app/api/services';
import { AlertController, ActionSheetController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.page.html',
  styleUrls: ['./banners.page.scss'],
})
export class BannersPage implements OnInit {

  banners: BannerDTO[];
  pageNumber = 0;
  refreshEvent;

  constructor(
    private queryService: QueryResourceService,
    private alertController: AlertController,
    private command: CommandResourceService,
    private actionSheetController: ActionSheetController,
    private modalController: ModalController,
    private router: Router,
    private util: Util
  ) { }


  ngOnInit() {
    this.util.createLoader().then(loader => {
      loader.present();
      this.queryService.getAllBannersUsingGET({page: this.pageNumber})
      .subscribe(response => {
        console.log('banners: ', response);
        this.banners = response;
        loader.dismiss();
        this.refreshEvent.event.complete();
      },err => {
        loader.dismiss();
      });
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

  async editDeleteActionSheet(banner) {
    const actionSheet = await this.actionSheetController.create({
      buttons: [
      {
        text: 'Delete',
        icon: 'trash',
        handler: () => {
          this.deleteBanner(banner);
        }
      }, {
        text: 'Edit',
        icon: 'create',
        handler: () => {
          this.router.navigate(['/', 'create-banner', banner.id]);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  // async openEditBannerModal() {
  //   const modal = this.modalController.create({
  //   });
  //   await (await modal).presen
  // }

  refresh(event) {
    this.refreshEvent = event;
    this.banners = [];
    this.ngOnInit();
  }
}
