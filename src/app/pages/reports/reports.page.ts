import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {
  isReport:Boolean=true;

  ngOnInit() {
  }
  // tslint:disable-next-line: member-ordering
  rows = [
    { orderNo: '123', date: 'jgiuhiuhih', totelDue: '12' },
    { orderNo: '234', date: '23-23-23', totelDue: 'KFC' },
    { orderNo: '211', date: '34-23-45', totelDue: 'Burger King' },
  ];
  columns = [
    { name: 'Order no' },
    { name: 'Date' },
    { name: 'totel due' },
    { name: 'Customer id' },
    { name: 'Payment status' }
  ];

  rawEvent: any;
  contextmenuRow: any;
  contextmenuColumn: any;

  ColumnMode = ColumnMode;

  constructor() {
    
  }

changeDiv(isReport:Boolean){
  this.isReport=isReport;

}  

}
