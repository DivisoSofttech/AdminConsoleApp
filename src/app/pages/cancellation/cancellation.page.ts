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
  isCompleted = false;
  isSearching = false;

  searchResult: CancellationRequestDTO = null;
  selectedCancellationRequest: CancellationRequestDTO = {};

  constructor(private popoverController: PopoverController,
              private router: Router, private queryResourceService: QueryResourceService,
              public cancellationRequestService: CancellationRequestService) { }

  ngOnInit() {

    const date=new Date().toISOString().split('T',1)[0];
    console.log('date is ',date);
    this.queryResourceService.findCancellationRequestByStatusUsingGET({statusName: 'accepted',date:date}).subscribe(
      res => {
          console.log('completed request ', res);
          this.cancellationRequestService.completedRequestDTOs = res.content;
      },
      err => {

      }
    );

    this.queryResourceService.findCancellationRequestByStatusUsingGET({statusName: 'requested',date:date}).subscribe(
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
  isSearch() {
    this.isSearching = !this.isSearching;
  }

  searchByOrderId(ev){

    const orderId:string=ev.detail.value;
    console.log('evnt ',ev.detail.value);

    if(orderId.length>0){
   this.queryResourceService.getCancellationRequestByOrderIdUsingGET(ev.detail.value).subscribe(
     res=>{
       console.log('got cncellation request by order id ',res);
       this.searchResult=res;
    },err=>{

      console.log('error geting cncellation request by order id ',err);

    }
  
   );
  }

  }


}
