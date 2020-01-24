import { Util } from './services/util';
import { KeycloakService } from './services/security/keycloak.service';
import { AuthGuardConfig } from './configs/auth.guard.config';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Dashboard',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Reports',
      url: '/reports',
      icon: 'document'
    },
    {
      title: 'Cancellation',
      url: '/cancellation',
      icon: 'close'
    }
    ,
    {
      title: 'Feedbacks',
      url: '/feedbacks',
      icon: 'star-half'
    }
    ,
    {
      title: 'Offers',
      url: '/offers',
      icon: 'gift'
    },
    {
      title: 'Banners',
      url: '/banners',
      icon: 'albums'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private keycloakService: KeycloakService,
    private util: Util
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.backgroundColorByHexString('#73c2c9');
      this.splashScreen.hide();
    });
  }

  logout() {
    this.keycloakService.logout();
    this.util.createToast('You\'ve been logged out');
  }
}
