import { ReportSummary } from './../../api/models/report-summary';
import { OrderSummeryRow } from './../../customModels/order-summery-row';
import { Store } from './../../api/models/store';
import { Util } from 'src/app/services/util';
import { QueryResourceService } from 'src/app/api/services';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { DatePipe, NgIf, DecimalPipe } from '@angular/common';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Page } from 'src/app/customModels/page';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {

  constructor(private queryResourceService: QueryResourceService
    ,         private datePipe: DatePipe,
              private util: Util,
              private formBuilder: FormBuilder,
              private decimalPipe: DecimalPipe
    ) {

    }

  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;

  totalAmount: number;

  orderSummeryRow: OrderSummeryRow[] = [];
  orderSummeryColumns = [
    { name: 'Type' },
    { name: 'Total' },
    { name: 'Value' },

  ];

// store: Store = {storeUniqueId: 'spiceindia'};
 store: Store = {};


  ordersForm = this.formBuilder.group({
    fromDate: ['', [Validators.required, Validators.maxLength(100)]],
    toDate: ['', [Validators.required, Validators.maxLength(100)]],
    storeId: ['', [ Validators.maxLength(100)]],
});


public errorMessages = {
  fromDate: [
    { type: 'required', message: 'Name is required' },
    { type: 'maxlength', message: 'Name cant be longer than 100 characters' }
  ],
  toDate: [
    { type: 'required', message: 'Email is required' },
    { type: 'pattern', message: 'Please enter a valid email address' }
  ],
  storeId: [
    { type: 'required', message: 'Phone number is required' },
    { type: 'pattern', message: 'Please enter a valid phone number' }
  ]
  };


  pages: Page[] = [];
  isReport: Boolean = false;
  reportType = 'orders';
  storeSearchTerm = '';
  fromDate = '';
  toDate = '';
  paymenttype: string;
  deliveryType: string;
  stores = [];
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
  isStoreSearch = false;
  currentPage: Page = {pageNumber: 0, data: []};





  ngOnInit() {

  }

changeDiv(isReport: Boolean) {
  this.isReport = isReport;
  console.log('report type is ', this.reportType);
}

applyFilter() {



  this.fromDate = this.ordersForm.get('fromDate').value.split('T', 1)[0];
  this.toDate = this.ordersForm.get('toDate').value.split('T', 1)[0];
  console.log('from date', this.fromDate);
  console.log('to date', this.toDate);

  console.log('payment ', this.paymenttype);

  console.log('from collection', this.deliveryType);


  if (this.reportType === 'orders') {
  if (this.currentPage.data.length === 0) {
  this.queryResourceService.getOrdersByFilterUsingGET({fromDate: this.fromDate, toDate: this.toDate,
     storeId: this.store.storeUniqueId, paymentStatus: this.paymenttype,
  methodOfOrder: this.deliveryType, pageNumber: this.currentPage.pageNumber, size: 10}).subscribe(res => {
    console.log('got ordermasters ',  res);
    if (res == null) {this.util.presentAlert('Alert', 'the requested filter option is currently not availabe'); }
    this.rows = res.content;
    this.rows.forEach(row => {
      this.totalAmount += row.totalDue;
      row.orderPlaceAt = this.datePipe.transform(new Date(row.orderPlaceAt), 'dd/MM/yyyy');

    });
    console.log('got ordermasters ', res);
    this.createPages(res.totalPages, res.content);


  }, err => {
    console.log('error ordermasters ', err);

  });
  } else {
    this.rows = this.currentPage.data;
  }
  } else {

    this.getOrderSummeryByFillter();
    }

  this.changeDiv(true);
}

getOrderSummeryByFillter() {

  console.log('the store id is ', this.store.storeUniqueId);
  this.queryResourceService.createReportSummaryUsingGET({toDate: this.toDate, fromDate: this.fromDate,
  storeName: this.store.storeUniqueId}).subscribe(res => {

    console.log('report summery is ', res);

    this.makeOrderSummeryTable(res);

  }, err => {
    console.log('error geting report summery is ', err);

  }



);

}
  makeOrderSummeryTable(reportSummery: ReportSummary) {

    console.log('created rows');
    const col2: OrderSummeryRow[] = [];

    const all: OrderSummeryRow = new OrderSummeryRow();

    all.type = 'all';
    all.total = reportSummery.typeAllCount;
    all.value = this.decimalPipe.transform(reportSummery.typeAllTotal, '1.2-2');
    col2.push(all);

    const card: OrderSummeryRow = new OrderSummeryRow();
    card.type = 'card';
    card.total = reportSummery.typeCardCount;
    card.value = this.decimalPipe.transform(reportSummery.typeCardTotal, '1.2-2');
    col2.push(card);

    const cash: OrderSummeryRow = new OrderSummeryRow();
    cash.type = 'cash';
    cash.total = reportSummery.typeCashCount;
    cash.value = this.decimalPipe.transform(reportSummery.typeCashTotal, '1.2-2');
    col2.push(cash);

    const delivery: OrderSummeryRow = new OrderSummeryRow();
    delivery.type = 'delivery';
    delivery.total = reportSummery.typeDeliveryCount;
    delivery.value = this.decimalPipe.transform(reportSummery.typeDeliveryTotal, '1.2-2');
    col2.push(delivery);

    const collection: OrderSummeryRow = new OrderSummeryRow();
    collection.type = 'collection';
    collection.total = reportSummery.typeCollectionCount;
    collection.value = this.decimalPipe.transform(reportSummery.typeCollectionTotal, '1.2-2');
    col2.push(collection);

    

    console.log('created rows ', col2);
    this.orderSummeryRow = col2;
  }

searchStore() {

  this.isStoreSearch = true;
  this.queryResourceService.findStoreBySearchTermUsingGET({name: this.storeSearchTerm}).subscribe(
    res => {
      this.stores = res.content;
    }
  );


}

selectStore(store: Store) {
  console.log('selected store is ', store);
  this.isStoreSearch = false;
  this.store = store;
  this.ordersForm.value.storeId = this.store.storeUniqueId;
  this.ordersForm.setValue(this.ordersForm.value);

}
removeStore() {
  this.store =  {};
}

nextPage(pageNumber) {
  console.log('the page is ', pageNumber);
  console.log('the page is ', this.pages[pageNumber - 1]);
  this.currentPage = this.pages[pageNumber - 1];
  console.log('the page is ',  this.currentPage);


  this.applyFilter();
}



createPages(totalPages, data) {


if (totalPages !== this.pages.length) {

  for (let i = 0; i < totalPages; i++) {
    const page = new Page();
    page.pageNumber = i;
    this.pages.push(page);
  }

}
for (let i = 0; i < totalPages; i++) {
    if (this.pages[i].data.length === 0) {
      this.pages[i].data = data;
      break;
    }
  }


}

submit() {

  console.log('pages length is',this.pages.length);
  this.pages = [];
  this.currentPage= {pageNumber: 0, data: []};

  this.applyFilter();

}



}
