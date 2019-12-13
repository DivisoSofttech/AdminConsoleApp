import { OderSearchPopoverComponent } from './../../components/oder-search-popover/oder-search-popover.component';
import { PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cancellation',
  templateUrl: './cancellation.page.html',
  styleUrls: ['./cancellation.page.scss'],
})
export class CancellationPage implements OnInit {

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
  }


  async add(ev: any) {
    console.log('add working');
    const popover = await this.popoverController.create({
      component: OderSearchPopoverComponent,
      translucent: true,
      keyboardClose:false
    });
    return await popover.present();
  }

}
