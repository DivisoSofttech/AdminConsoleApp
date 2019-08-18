import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import {authConfig } from './security/configs/security-config';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Reports',
      url: '/reports',
      icon: 'document'
    },
    {
      title: 'Offers',
      url: '/offers',
      icon: 'gift'
    },
    {
      title: 'Users',
      url: '/users',
      icon: 'people'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private oauthService: OAuthService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent;
      this.splashScreen.hide();
    });
    this.configureOAuth();
  }

  configureOAuth(): any {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    // Load Discovery Document and then try to login the user
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
}
