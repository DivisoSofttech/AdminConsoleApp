import { Injectable } from '@angular/core';
import { LoadingController, ToastController, NavController, PopoverController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable()
export class Util {

    constructor(
        private loadingController: LoadingController,
        private toastController: ToastController,
        private navController: NavController,
        private alertController:AlertController
    ) {}

    async createLoader() {

        return await this.loadingController.create({
            spinner: 'bubbles'
        });
    }

    createToast(msg: string , iconName?: string) {
     this.toastController.create({
            message: msg ,
            duration: 2000,
            color: 'dark',
            position: 'bottom',
            showCloseButton : true,
            keyboardClose: true,
            buttons: [
              {
                side: 'start',
                icon: iconName !== undefined?iconName:'information-circle-outline',
              }]
          }).then(data => {
              data.present();
          });
    }

    navigateRoot() {
        this.navController.navigateRoot('');
    }


    navigateToLogin() {
        this.navController.navigateRoot('login');
    }

    async presentAlert(header:string,message:string) {
        const alert = await this.alertController.create({
          header: header,
          message: message,
          buttons: ['OK']
        });
    
        await alert.present();
      }

}
