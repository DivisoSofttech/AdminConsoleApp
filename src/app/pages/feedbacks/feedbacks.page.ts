import { Feedback } from './../../api/models/feedback';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { QueryResourceService } from 'src/app/api/services/query-resource.service';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.page.html',
  styleUrls: ['./feedbacks.page.scss'],
})
export class FeedbacksPage implements OnInit {

  constructor(private queryService: QueryResourceService) { }

  @ViewChild(IonInfiniteScroll, null) infiniteScroll: IonInfiniteScroll;
  pagenumber = 0;
  totelPages = 1;
  feedbacks: Feedback[] = [];

  ngOnInit() {
    this.findFeedBacks();


  }


  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.pagenumber < this.totelPages) {
        this.pagenumber++;
        this.findFeedBacks();
        if (this.feedbacks.length === 1000) {
            event.target.disabled = true;
          }
    }
    }, 500);
  }

  findFeedBacks() {

    this.queryService.findAllFeedBackUsingGET({page: this.pagenumber, size: 10}).subscribe(
      res => {

        console.log(' got feed backs ', res);
        this.totelPages = res.totalPages;
        this.feedbacks.concat(res.content);
        this.feedbacks = this.feedbacks.concat(res.content);
        console.log('  feed backs are', res.content);

        console.log('  feed backs are', this.feedbacks);

      }
    );

  }

  toggleInfiniteScroll() {
    console.log('Done');

    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

}
