import { CancellationSummary } from './../../api/models/cancellation-summary';
import { Printer, PrintOptions} from '@ionic-native/printer/ngx';
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
import { File } from '@ionic-native/file/ngx';
import { CancellationSummeryRow } from 'src/app/customModels/cancellation-summery-row ';
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
              private decimalPipe: DecimalPipe,
              private printer: Printer,
              private queryResource: QueryResourceService,
              private file: File
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


  cancellationSummeryRow: CancellationSummeryRow[] = [];
  cancellationSummeryColumns = [
    { name: 'Type' },
    { name: 'count' },
    { name: 'balanceDue' },
    { name: 'refundAmount' },

  ];

// store: Store = {storeUniqueId: 'spiceindia'};
 store: Store = {};


  ordersForm = this.formBuilder.group({
    fromDate: ['', [Validators.required, Validators.maxLength(100)]],
    toDate: ['', [Validators.required, Validators.maxLength(100)]],
    storeId: ['', [ Validators.maxLength(100)]],
});

orderSummeryForm = this.formBuilder.group({
  date: ['', [Validators.required, Validators.maxLength(100)]],
  storeId: ['', [ Validators.maxLength(100)]],
});

cancellationSummeryForm = this.formBuilder.group({
  date: ['', [Validators.required, Validators.maxLength(100)]],
  storeId: ['', [Validators.required, Validators.maxLength(100)]],
});


public errorMessages = {
  fromDate: [
    { type: 'required', message: 'Name is required' },
    { type: 'maxlength', message: 'Name cant be longer than 100 characters' }
  ],
  date: [
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
  date = '';
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
  if (this.deliveryType === 'all') {this.deliveryType = undefined; }
  if (this.paymenttype === 'all') {this.paymenttype = undefined; }

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
  } else if (this.reportType === 'orders summery') {

    this.getOrderSummaryByFillter();
    } else {

      this.getCancellationSummary();

    }

  this.changeDiv(true);
}

///// cancellation summary////////////
getCancellationSummary() {

  console.log(' cancellation summary ');

  this.date = this.cancellationSummeryForm.get('date').value.split('T', 1)[0];

  this.util.createLoader().then(loader => {
    loader.present();


    this.queryResourceService.cancellationSummaryForViewUsingGET({date: this.date,
          storeName: this.store.storeUniqueId}).subscribe(res => {

            console.log('cancellation summery is ', res);

            this.makeCancellationSummeryTable(res);
            loader.dismiss();

          }, err => {
            console.log('error geting cancellation summery is ', err);
            loader.dismiss();

          }



        );
        });

}

makeCancellationSummeryTable(cancellationSummery: CancellationSummary) {

  console.log('created rows');
  const col2: CancellationSummeryRow[] = [];

  const all: CancellationSummeryRow = {};

  all.type = 'all';
  all.count = cancellationSummery.allCardCount;
  all.balanceDue = this.decimalPipe.transform(cancellationSummery.allCardTotal, '1.2-2');
  all.refundAmount = this.decimalPipe.transform(cancellationSummery.allRefundAmount, '1.2-2');
  col2.push(all);


  const delivery: CancellationSummeryRow = new CancellationSummeryRow();
  delivery.type = 'delivery';
  delivery.count = cancellationSummery.deliveryCardCount;
  delivery.balanceDue =  this.decimalPipe.transform(cancellationSummery.deliveryCardTotal, '1.2-2');
  delivery.refundAmount = this.decimalPipe.transform(cancellationSummery.deliveryRefundAmount, '1.2-2');
  col2.push(delivery);

  const collection: CancellationSummeryRow = {};
  collection.type = 'collection';
  collection.count = cancellationSummery.collectionCardCount;
  collection.balanceDue =  this.decimalPipe.transform(cancellationSummery.collectionCardTotal, '1.2-2');
  collection.refundAmount =  this.decimalPipe.transform(cancellationSummery.collectionRefundAmount, '1.2-2');

  col2.push(collection);



  console.log('created rows ', col2);
  this.cancellationSummeryRow = col2;



}



///// cancellation summary////////////

getOrderSummaryByFillter() {

  console.log('filter method working');
  this.date = this.orderSummeryForm.get('date').value.split('T', 1)[0];
  console.log('the date is ', this.date);

  console.log('the store id is ', this.store.storeUniqueId);
  this.util.createLoader().then(loader => {
    loader.present();


    this.queryResourceService.createReportSummaryUsingGET({date: this.date,
          storeName: this.store.storeUniqueId}).subscribe(res => {

            console.log('report summery is ', res);

            this.makeOrderSummeryTable(res);
            loader.dismiss();

          }, err => {
            console.log('error geting report summery is ', err);
            loader.dismiss();

          }



        );
        });




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
  if (this.reportType === 'orders summery') {
  this.ordersForm.value.storeId = this.store.storeUniqueId;
  this.ordersForm.setValue(this.ordersForm.value);
} else if (this.reportType === 'cancellation summery') {



  this.cancellationSummeryForm.value.storeId = this.store.storeUniqueId;
  this.cancellationSummeryForm.setValue(this.cancellationSummeryForm.value);
  console.log('cancellation valid', this.cancellationSummeryForm.valid);
  console.log('the store is ', this.cancellationSummeryForm.get('storeId').value);
  console.log('the date is ', this.cancellationSummeryForm.get('date').value);


}

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

////////////// table paginating area////////////////////

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
///////////////////
submit() {

  console.log('pages length is', this.pages.length);
  this.pages = [];
  this.currentPage = {pageNumber: 0, data: []};

  this.applyFilter();

}

///////////////////////////////// pdf printing area start////////////////////////////

printPdf() {

  if (this.reportType === 'orders') {
    this.getOrdersReportPdf();
    console.log('orders if');

  } else if (this.reportType === 'orders summery') {

    this.getOrderSummaryPdf();
    console.log('orders  summery if');

  }
  else{

    this.getCancellationReportPdf();
    console.log('cancellation  summery if');

  }
}


getOrderSummaryPdf() {
  this.util.createLoader().then(loader => {
    loader.present();

    this.queryResource.getReportSummaryAsPdfUsingGET({
      storeId: this.store.storeUniqueId,
      date: this.date
    }).subscribe(orderDocket => {
      console.log(orderDocket.pdf, orderDocket.contentType);
      const byteCharacters = atob(orderDocket.pdf);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: orderDocket.contentType });
      console.log('blob is' + blob);
      this.fileCreation(blob, orderDocket);
      loader.dismiss();
    }, err => {
      console.log('error geting order summary', err);
      loader.dismiss();
      this.util.createToast('Error Loading Pdf', 'alert');
    });
  });
}

fileCreation(blob, result) {
  const res = this.file.createFile(this.file.externalCacheDirectory, 'items.pdf', true);
  if (res !== undefined) {
      res
    .then(() => {
      console.log('file created' + blob);

      this.file
        .writeFile(this.file.externalCacheDirectory, 'items.pdf', blob, {
          replace: true
        })
        .then(value => {
          console.log('file writed' + value);
          const options: PrintOptions = {
            name: 'MyDocument'
          };
          this.printer.print(this.file.externalCacheDirectory + 'items.pdf', options).then();
          // this.fileOpener
          //   .showOpenWithDialog(
          //     this.file.externalCacheDirectory + 'items.pdf',
          //     result.contentType
          //   )
          //   .then(() => console.log('File is opened'))
          //   .catch(e => console.log('Error opening file', e));
          // this.documentViewer.viewDocument(this.file.externalCacheDirectory + 'items.pdf', 'application/pdf',
          // {print: {enabled: true}, openWith: {enabled: true}});
        });
    });
    }
    }

    getOrdersReportPdf() {
      this.util.createLoader().then(loader => {
        loader.present();

        this.queryResource.getOrdersPdfByFilterUsingGET({
          storeId: this.store.storeUniqueId,
          toDate: this.toDate,
          fromDate: this.fromDate,
           paymentStatus: this.paymenttype,
          methodOfOrder: this.deliveryType,

        }).subscribe(orderDocket => {
          console.log(orderDocket.pdf, orderDocket.contentType);
          const byteCharacters = atob(orderDocket.pdf);
          const byteNumbers = new Array(byteCharacters.length);
          for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
          }
          const byteArray = new Uint8Array(byteNumbers);
          const blob = new Blob([byteArray], { type: orderDocket.contentType });
          console.log('blob is' + blob);
          this.fileCreation(blob, orderDocket);
          loader.dismiss();
        }, err => {
          console.log('error geting order summary', err);
          loader.dismiss();
          this.util.createToast('Error Loading Pdf', 'alert');
        });
      });
    }

    getCancellationReportPdf() {
      this.util.createLoader().then(loader => {
        loader.present();

        this.queryResource.getCancellationReportAsPdfUsingGET({
          storeName: this.store.storeUniqueId,
          date: this.date,


        }).subscribe(cancellationDocket => {
          console.log(cancellationDocket.pdf, cancellationDocket.contentType);
          const byteCharacters = atob(cancellationDocket.pdf);
          const byteNumbers = new Array(byteCharacters.length);
          for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
          }
          const byteArray = new Uint8Array(byteNumbers);
          const blob = new Blob([byteArray], { type: cancellationDocket.contentType });
          console.log('blob is' + blob);
          this.fileCreation(blob, cancellationDocket);
          loader.dismiss();
        }, err => {
          console.log('error geting order summary', err);
          loader.dismiss();
          this.util.createToast('Error Loading Pdf', 'alert');
        });
      });
    }



///////////////////////////////// pdf printing area end////////////////////////////


}
