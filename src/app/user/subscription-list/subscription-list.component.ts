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

  constructor(private _store: Store<any>) {
    this._store.select('accesses').subscribe((accesses) => {
      if (accesses.vendor) {
        this.vendorAccess = accesses.vendor;
      } else {
        this.vendorAccess = null;
      }

      if (accesses.customer) {
        this.customerAccess = accesses.customer;
      } else {
        this.customerAccess = null;
      }
    });
  }

  ngOnInit() {
  }
}
