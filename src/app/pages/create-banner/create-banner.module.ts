import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CreateBannerPage } from './create-banner.page';
import { ImageCropperModule } from 'ngx-image-cropper';
import { SearchResultComponent } from 'src/app/components/search-result/search-result.component';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: CreateBannerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ImageCropperModule,
    ComponentsModule
  ],
  declarations: [CreateBannerPage],
  entryComponents: [SearchResultComponent]
})
export class CreateBannerPageModule {}
