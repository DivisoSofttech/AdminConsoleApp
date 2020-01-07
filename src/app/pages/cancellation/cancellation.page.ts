import { CancellationRequestService } from './../../services/cancellation-request.service';
import { CancellationRequestComponent } from './../../components/cancellation-request/cancellation-request.component';
import { QueryResourceService } from 'src/app/api/services';
import { CancellationRequestDTO } from './../../api/models/cancellation-request-dto';
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
  isCompleted=false;
  
  constructor(private popoverController: PopoverController,
     private router: Router, private queryResourceService: QueryResourceService,
     public cancellationRequestService:CancellationRequestService) { }

  ngOnInit() {

    this.queryResourceService.findCancellationRequestByStatusUsingGET({statusName:'accepted'}).subscribe(
      res => {
          console.log('completed request ', res);
          this.cancellationRequestService.completedRequestDTOs = res.content;
      },
      err => {

      }
    );

    this.queryResourceService.findCancellationRequestByStatusUsingGET({statusName:'requested'}).subscribe(
      res => {
          console.log('cancellation request ', res);
          this.cancellationRequestService.cancellationRequestDTOs = res.content;
      },
      err => {

      }
    );


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

 segmentChanged(ev) {

    if (ev.detail.value === 'completed') {
      this.isCompleted = true;
     } else {
      this.isCompleted = false;
     }

  }

 
}
