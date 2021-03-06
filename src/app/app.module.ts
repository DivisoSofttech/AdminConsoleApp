import { ImageCropperModule } from 'ngx-image-cropper';
import { Util } from './services/util';
import { ConfigsModule } from './configs/configs.module';
import { KeycloakAdminConfig } from './configs/keycloak.admin.config';
import { AuthInterceptor } from './services/security/auth-interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { File } from '@ionic-native/file/ngx';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { OAuthModule} from 'angular-oauth2-oidc';
import { HttpClientModule, HttpClient,  HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { Camera } from '@ionic-native/camera/ngx';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DatePipe, DecimalPipe } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Printer } from '@ionic-native/printer/ngx';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    NgxDatatableModule,
    //FormsModule      ,
    NgxPaginationModule,
    BrowserModule,
    ReactiveFormsModule ,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ConfigsModule,
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    OAuthModule.forRoot(),
    ImageCropperModule
  ],
  providers: [
    StatusBar,
    Printer,
    DecimalPipe,
    SplashScreen,
    DatePipe,
    File,
    Util,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    HttpClient,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true

    },
    Camera
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
