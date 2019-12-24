import { Component, OnInit } from '@angular/core';
import { QueryResourceService, CommandResourceService } from '../../api/services';
import { DeductionValueTypeDTO, OfferModel } from '../../api/models';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss']
})
export class NewOfferPage implements OnInit {

  deductionValueTypes: DeductionValueTypeDTO[];
  message: string;
  offerModel: OfferModel = {};

  constructor(private queryResourceService: QueryResourceService,
              private commandResourceService:CommandResourceService,
              private toastController: ToastController,
              private navController: NavController) { }

  ngOnInit() {
    this.queryResourceService.getAllDeductionValueTypesUsingGET({}).subscribe(
      response => {
        console.log('deduction value types ', response);
        this.deductionValueTypes = response;
      },
      error => {
        console.log(error);
        this.message = 'sorry..error when getting deduction types, ' + error;
        this.presentToast();
      }
    );
  }

  createNewOffer() {
    console.log('offer to be saved', this.offerModel);
    this.commandResourceService.createOfferUsingPOST(this.offerModel).subscribe(
      response => {
        this.offerModel = response;
        this.message = 'Offer is created successfully';
        this.presentToast();
        this.navController.navigateBack('offers');

      },
      error => {
        console.log('offer could not be created', error);
        this.message = 'Operation failed';
        this.presentToast();
      }
    );
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: this.message,
      duration: 2000
    });
    toast.present();
  }

}
