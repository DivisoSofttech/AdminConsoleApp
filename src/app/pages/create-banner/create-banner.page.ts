import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import { OrderService } from 'src/app/services/order.service';
import { Store, BannerDTO } from 'src/app/api/models';
import { AggregateQueryResourceService, AggregateCommandResourceService } from 'src/app/api/services';
import { SearchResultComponent } from 'src/app/components/search-result/search-result.component';
import { PopoverController, ModalController, ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-create-banner',
  templateUrl: './create-banner.page.html',
  styleUrls: ['./create-banner.page.scss'],
})
export class CreateBannerPage implements OnInit {

  searchStatus: boolean;
  stores: Store[];
  modal: HTMLIonModalElement;
  banner: BannerDTO = {};

  constructor(public imageService: ImageService,
    public orderService: OrderService,
    private queryService: AggregateQueryResourceService,
    private modalController: ModalController,
    private toastController: ToastController,
    private commandService: AggregateCommandResourceService,
    private navController: NavController) { }

  ngOnInit() {
  }

  public createNewBanner(): void {
    console.log("creates new banner");
    this.banner.image = this.imageService.croppedImage.split(',')[1];
    this.banner.storeId = this.orderService.selectedStore.regNo;
    this.banner.expiryDate = this.banner.expiryDate.split("+")[0] + "Z";
    console.log("banner to be saved", this.banner);
    this.commandService.createBannerUsingPOST(this.banner)
    .subscribe(response=>{
      console.log("banner successfully saved",this.banner);
      this.presentToast();
    }, err=>{
      console.error("error while saving banner",err);
      
    })
  }

  isNotSearching() {
    this.searchStatus = false;
    console.log('isNotSearching', this.searchStatus);
    this.orderService.searchTerm = null;
    this.stores = null;
    if (this.modal)
      this.modal.dismiss();
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

  loadResults() {
    if (
      this.orderService.searchTerm !== '' ||
      this.orderService.searchTerm != null
    ) {
      this.queryService
        .findStoreBySearchTermUsingGET({
          searchTerm: this.orderService.searchTerm
        })
        .subscribe(
          response => {
            console.log(this.orderService.searchTerm, response.content);
            this.stores = response.content;
            if (response) {
              console.log("response size: ", response.size);

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
}
