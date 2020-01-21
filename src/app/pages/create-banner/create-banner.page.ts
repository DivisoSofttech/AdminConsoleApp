import { Util } from './../../services/security/util';
import { ImageSelectorComponent } from './../../components/image-selector/image-selector.component';
import { Banner } from './../../api/models/banner';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import { OrderService } from 'src/app/services/order.service';
import { Store, BannerDTO } from 'src/app/api/models';
import { QueryResourceService, CommandResourceService } from 'src/app/api/services';
import { SearchResultComponent } from 'src/app/components/search-result/search-result.component';
import { PopoverController, ModalController, ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-create-banner',
  templateUrl: './create-banner.page.html',
  styleUrls: ['./create-banner.page.scss']
})
export class CreateBannerPage implements OnInit {

  searchStatus: boolean;
  stores: Store[];
  modal: HTMLIonModalElement;
  imageContentType;
  banner: BannerDTO = {};


  constructor(public imageService: ImageService,
              public orderService: OrderService,
              private queryService: QueryResourceService,
              private modalController: ModalController,
              private toastController: ToastController,
              private commandService: CommandResourceService,
              private navController: NavController,
              private activatedRoute: ActivatedRoute,
              private util: Util
             ) { }

  ngOnInit() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(id);
    if (id > 0) {
      this.util.createLoader().then(loader => {
        loader.present();
        this.queryService.getBannerUsingGET(id).subscribe(ban => {
          console.log(ban);
          this.banner = ban;
          this.queryService.getStoreByRegNoUsingGET(ban.storeId).subscribe(store => {
            this.orderService.selectedStore = store;
            loader.dismiss();
          });
        });
      });
    }
    console.log(this.banner);
  }

  createUpdateBanner() {
    if (this.banner.id) {
      this.updateBanner();
    } else {
      this.createNewBanner();
    }
  }

  updateBanner() {
    console.log('update banner');
    // this.banner.image = this.imageService.croppedImage.split(',')[1];
    this.banner.storeId = this.orderService.selectedStore.regNo;
    console.log('banner to be saved', this.banner);
    this.commandService.updateBannerUsingPUT(this.banner)
    .subscribe(response => {
      console.log('banner successfully saved', this.banner);
      this.presentToast();
      this.imageService.updateBannerPage(response);
      this.navController.back();
    }, err => {
      this.navController.back();
      console.error('error while saving banner', err);

    });
  }

  public createNewBanner(): void {
    console.log('creates new banner');
    // this.banner.image = this.imageService.croppedImage.split(',')[1];
    this.banner.storeId = this.orderService.selectedStore.regNo;
    console.log('banner to be saved', this.banner);
    this.commandService.createBannerUsingPOST(this.banner)
    .subscribe(response => {
      this.imageService.updateBannerPage(response);
      this.navController.back();
      console.log('banner successfully saved', this.banner);
      this.presentToast();
    }, err => {
      this.navController.back();
      console.error('error while saving banner', err);

    });
  }

  isNotSearching() {
    this.searchStatus = false;
    console.log('isNotSearching', this.searchStatus);
    this.orderService.searchTerm = null;
    this.stores = null;
    if (this.modal) {
      this.modal.dismiss();
    }
  }

  isSearching() {

    this.searchStatus = true;
    console.log('isSearching', this.searchStatus);
    /*     setTimeout(() => {
          this.searchBar.setFocus();
        }, 200);*/
    if (!this.modal) {
      this.presentModal();
    }
  }

  async selectImage() {

    const modal = await this.modalController.create({
      component: ImageSelectorComponent,
      cssClass: 'half-height'
    });

    modal.onDidDismiss()
      .then(data => {
        this.banner.image = data.data.image.substring(data.data.image.indexOf(',') + 1);
        this.imageContentType = data.data.image.slice(data.data.image.indexOf(':') + 1, data.data.image.indexOf(';'));

      });

    return await modal.present();
  }

  loadResults() {
    if (
      this.orderService.searchTerm !== '' ||
      this.orderService.searchTerm != null
    ) {
      this.queryService
        .findStoreBySearchTermUsingGET({
          name: this.orderService.searchTerm
        })
        .subscribe(
          response => {
            console.log(this.orderService.searchTerm, response.content);
            this.stores = response.content;
            if (response) {
              console.log('response size: ', response.size);

              this.presentModal();
            }
          },
          error => {
            console.error('something went wrong', error);
          }
        );
    } else {
      this.searchStatus = false;
    }
  }

  async presentModal() {
    this.modal = await this.modalController.create({
      component: SearchResultComponent,
      backdropDismiss: true
    });
    return await this.modal.present();
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'New banner has been saved.',
      duration: 2000,
      buttons: [
        {
          side: 'start',
          text: 'Ok',
          handler: () => {
            console.log('Banner saved');
            this.navController.back();
          }
        }
      ]
    });
    toast.present();
  }

  selectStore(store: any) {
    console.log('store selected from child', store);
  }
}
