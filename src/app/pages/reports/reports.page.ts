import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {


  ngOnInit() {
  }
  // tslint:disable-next-line: member-ordering
  rows = [
    { order: '123', date: 'jgiuhiuhih', totel_due: '12' },
    { order: '234', date: '23-23-23', totel_due: 'KFC' },
    { order_no: '211', date: '34-23-45', totel_due: 'Burger King' },
  ];
  columns = [
    { name: 'Order no' },
    { name: 'Date' },
    { name: 'totel_due' },
    { name: 'Customer id' },
    { name: 'Payment status' }
  ];

  rawEvent: any;
  contextmenuRow: any;
  contextmenuColumn: any;

  ColumnMode = ColumnMode;

  constructor() {
    
  }

  

}
