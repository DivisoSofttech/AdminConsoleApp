import { Router } from '@angular/router';
import { OderSearchPopoverComponent } from './../../components/oder-search-popover/oder-search-popover.component';
import { PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { url } from 'inspector';

@Component({
  selector: 'app-cancellation',
  templateUrl: './cancellation.page.html',
  styleUrls: ['./cancellation.page.scss'],
})
export class CancellationPage implements OnInit {

  constructor(private popoverController: PopoverController, private router: Router) { }

  ngOnInit() {
  }


  async add(ev: any) {
    console.log('add working');
    const popover = await this.popoverController.create({
      component: OderSearchPopoverComponent,
      translucent: true,
      keyboardClose: false
    });

    await popover.present();


    popover.onDidDismiss().then(res => {
      console.log('dissmissed ', res.data);
      if (res.data != null) {
      this.router.navigate(['/', 'create-cancellation', res.data]);
      }
    });


  }

}
