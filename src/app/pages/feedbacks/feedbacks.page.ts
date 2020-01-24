import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.page.html',
  styleUrls: ['./feedbacks.page.scss'],
})
export class FeedbacksPage implements OnInit {

  constructor() { }

  @ViewChild(IonInfiniteScroll, null) infiniteScroll: IonInfiniteScroll;

  ngOnInit() {
  }
  numbers  = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];


  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();
      const data = [1, 2, 3, 4, 5, 6, 7, 8];
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      for(let i=0;i<100;i++){
        if(i%10==0)this.numbers.push(i);

      }
      if (data.length === 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    console.log('Done');

    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

}
