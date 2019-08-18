import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { KeycloakAdminClient } from 'keycloak-admin/lib/client';
import { NavController, ToastController } from '@ionic/angular';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private navCtrl: NavController, private toastController: ToastController, private oauthService: OAuthService) {
    this.kcAdminClient = new KeycloakAdminClient();
    this.kcAdminClient.setConfig({
      baseUrl: 'http://dev.servers.divisosofttech.com:8888/auth'
    });
    this.configureKeycloakAdmin();
  }

  username: string;
  password: string;
  email: string;
  kcAdminClient: KeycloakAdminClient;
  phone: number;
  agreement: boolean;

  configureKeycloakAdmin() {
    this.kcAdminClient.auth({
      username: 'admin',
      password: 'karma999',
      grantType: 'password',
      clientId: 'admin-cli'
    });
  }

  signup() {
    const map = new Map([
      ['phone', this.phone],
      ['value', 3]
    ]);

    this.kcAdminClient.users.create({
      realm: 'graeshoppe',
      username: this.username,
      email: this.email,
      enabled: true,
      credentials: [{
        type: 'password',
        value: this.password
      }],
      attributes: map

    }).then(res => {
      this.oauthService.fetchTokenUsingPasswordFlowAndLoadUserProfile(this.username, this.password, new HttpHeaders()).then(() => {
        const claims = this.oauthService.getIdentityClaims();
        if (claims) { console.log(claims); }
        if (this.oauthService.hasValidAccessToken()) {
          this.presentToast('Signup successfully completed');
          // this.navCtrl.navigateRoot('/sale');
          console.log(this.username);
        }
      }).catch((err: HttpErrorResponse) => {
        this.presentToast(err.error.error_description);
      });
      this.navCtrl.navigateForward('/login');
    }, err => {
      console.log(err);
      this.presentToast('user already exists');
    });
  }

  dataChanged(agreement) {
    console.log('Old Agreement is ' + this.agreement);

    console.log('Agreement is ' + agreement);
    this.agreement = agreement;

  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      cssClass: 'toast'
    });
    await toast.present();
  }

  ngOnInit() {
    this.agreement = false;
  }
}
