import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-access-purchase-page',
  templateUrl: './access-purchase-page.component.html',
  styleUrls: ['./access-purchase-page.component.scss']
})
export class AccessPurchasePageComponent implements OnInit {
  item: any;
  hasToken = false;
  purchaseForm: any;

  constructor(private _store: Store<any>) {
  }

  ngOnInit() {
    this.item = {
      id: 1,
      title: 'Subleaser Access Subscription',
      pricePerItem: 10.99,
      canHaveMultiple: false
    };
  }

  onStripeTokenReceived(purchaseData) {
    if (purchaseData.token !== null) {
      this.hasToken = true;
      this.purchaseForm = {
        id: purchaseData.item.id,
        count: purchaseData.count,
        token: purchaseData.token
      };
    } else {
      this.hasToken = false;
      this.purchaseForm = null;
    }
  }

  onSubmit() {

    this._store.dispatch({
      type: 'AccessPurchaseEffects.REQUEST',
      payload: this.purchaseForm
    });
  }
}
