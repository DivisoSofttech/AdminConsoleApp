import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SearchResultComponent } from './search-result/search-result.component';



@NgModule({
  declarations: [SearchResultComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [SearchResultComponent]
})
export class ComponentsModule { }
