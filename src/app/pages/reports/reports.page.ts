import { Util } from 'src/app/services/util';
import { QueryResourceService } from 'src/app/api/services';
import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { DatePipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {


  totalAmount: number;

  constructor(private queryResourceService: QueryResourceService
    ,         private datePipe: DatePipe,
              private util: Util
    ) {

  }
  isReport: Boolean = false;
  reportType = 'orders';
  storeSearchTerm= '';
  fromDate: string = null;
  toDate: string = null;
  storeId: string = null;
  paymenttype: string;
  deliveryType: string;
  stores=[]
  // tslint:disable-next-line: member-ordering

  rows = [];
  columns = [
    { name: 'Order number' },
    { name: 'Order place at' },
    { name: 'total due' },
    { name: 'Customer id' },
    { name: 'Payment status' }
  ];

  rawEvent: any;
  contextmenuRow: any;
  contextmenuColumn: any;
  columnMode = ColumnMode;
  isStoreSearch:boolean=false;

  ngOnInit() {
  }

changeDiv(isReport: Boolean) {
  this.isReport = isReport;
  console.log('report type is ', this.reportType);
}

applyFilter() {



  this.fromDate = this.fromDate.split('T', 1)[0];
  this.toDate = this.toDate.split('T', 1)[0];
  console.log('from date', this.fromDate);
  console.log('to date', this.toDate);

  console.log('payment ', this.paymenttype);

  console.log('from collection', this.deliveryType);

  // tslint:disable-next-line: max-line-length
  this.queryResourceService.getOrdersByFilterUsingGET({fromDate: this.fromDate, toDate: this.toDate, storeId: this.storeId, paymentStatus: this.paymenttype,
  methodOfOrder: this.deliveryType}).subscribe(res => {
    console.log('got ordermasters ', res);
    if (res == null) {this.util.presentAlert('Alert','the requested filter option is currently not availabe') }
    this.rows = res;
    res.forEach(row => {
      this.totalAmount += row.totalDue;
      row.orderPlaceAt = this.datePipe.transform(new Date(row.orderPlaceAt), 'dd/MM/yyyy');

    });
    console.log('got ordermasters ', res);

  }, err => {
    console.log('error ordermasters ', err);

  });

  this.changeDiv(true);
}

searchStore(){

  this.isStoreSearch=true;

  this.queryResourceService.findStoreBySearchTermUsingGET({name:this.storeSearchTerm}).subscribe(
    res=>{
      this.stores=res.content;
    }
  )


}

}
