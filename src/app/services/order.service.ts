import { Injectable } from '@angular/core';
import { logging } from 'protractor';
import { Store } from '../api/models';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  public startDate:string="2019-01-01T12:00:00.000Z";
  public endDate: string;
  public searchTerm: string;
  public todaysCount: number;
  public order: number;
  public selectedStore: Store;

  constructor() { 
    this.endDate=new Date().toISOString();
    console.log("new date and end date",this.endDate);
  }
}
