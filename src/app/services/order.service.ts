import { Injectable } from '@angular/core';
import { logging } from 'protractor';
import { Store } from '../api/models';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  public startDate = '2019-01-01T12:00:00.000+00:00';
  public endDate: string;
  public searchTerm: string;
  public todaysCount: number;
  public order: number;
  public selectedStore: Store= {};

  constructor() {
    this.endDate = (new Date().toISOString()).split("Z")[0]+"+00:00";
    console.log('new date and end date', this.endDate);
    this.todaysCount= -1;
  }
}
