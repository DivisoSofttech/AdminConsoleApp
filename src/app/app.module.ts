import { Util } from './services/util';
import { ConfigsModule } from './configs/configs.module';
import { KeycloakAdminConfig } from './configs/keycloak.admin.config';
import { AuthInterceptor } from './services/security/auth-interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { OAuthModule} from 'angular-oauth2-oidc';
import { HttpClientModule, HttpClient,  HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ConfigsModule,
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    OAuthModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Util,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    HttpClient,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true

    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
