import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-subscription-list',
  templateUrl: './subscription-list.component.html',
  styleUrls: ['./subscription-list.component.scss']
})
export class SubscriptionListComponent implements OnInit {
  vendorAccess: any = null;
  customerAccess: any = null;

  private _mockData = {
    customer_next_payment_date: '2013-08-14T00:01:00.234Z',
    customer_payment_amount: '5',
    customer_end_date: '2013-07-14T00:01:00.234Z',
    vendor_next_payment_date: '2013-06-14T00:01:00.234Z',
    vendor_payment_amount: '5',
    vendor_end_date: '2013-05-14T00:01:00.234Z'
  };

  constructor(private _store: Store<any>) {
    this._store.select('accesses').subscribe((accesses) => {
      if (accesses.list.length > 0) {
      } else {
        const data = this._mockData;
        if (data.vendor_next_payment_date) {
          this.vendorAccess = {
            nextPaymentDate: data.vendor_next_payment_date,
            paymentAmount: data.vendor_payment_amount,
            endDate: data.vendor_end_date
          };
        } else {
          this.vendorAccess = null;
        }

        if (data.customer_next_payment_date) {
          this.customerAccess = {
            nextPaymentDate: data.customer_next_payment_date,
            paymentAmount: data.customer_payment_amount,
            endDate: data.customer_end_date
          };
        } else {
          this.customerAccess = null;
        }
      }
    });
  }

  ngOnInit() {
  }
}
