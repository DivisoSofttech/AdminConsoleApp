import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-oder-search-popover',
  templateUrl: './oder-search-popover.component.html',
  styleUrls: ['./oder-search-popover.component.scss'],
})
export class OderSearchPopoverComponent implements OnInit {

  orderID: string='FEXP-';

  constructor (public viewCtrl: PopoverController) { }

  ngOnInit() {}

  dismiss(item) {
    console.log("order ",this.orderID);
    let data = this.orderID;
    this.viewCtrl.dismiss(data);
  }

}
