import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as PricingsGetActions from '../../_effect-actions/pricings.actions';
import * as AccessAddActions from '../../_effect-actions/access-add.actions';
import {ActivatedRoute} from '@angular/router';
import {Pricings} from '../../_domains/pricings';
import {Pricing} from "../../_domains/pricing";

@Component({
  selector: 'app-access-purchase-page',
  templateUrl: './access-purchase-page.component.html',
  styleUrls: ['./access-purchase-page.component.scss']
})
export class AccessPurchasePageComponent implements OnInit {
  item: Pricing = {
    id: null,
    type: null,
    alias: null,
    pricePerItem: null,
    canHaveMultiple: null
  };
  hasToken = false;
  purchaseForm: any;
  type: string;

  constructor(private _store: Store<any>, private _route: ActivatedRoute) {
    this.type = this._route.snapshot.params.type;

    this._store.select('pricings').subscribe((pricings: Pricings) => {
      this.item = pricings.list.find((item: Pricing) => item.type === this.type) || this.item;
    });
  }

  ngOnInit() {
    this._store.dispatch(new PricingsGetActions.Request());
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

    this._store.dispatch(new AccessAddActions.Request(this.purchaseForm));
  }
}
