import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AccessItemInfo} from '../../_domains/access-item-info';
import * as AccessItemActions from '../../_effect-actions/access-item.actions';
import * as AccessAddActions from '../../_effect-actions/access-add.actions';
import {ActivatedRoute} from '@angular/router';
import {AccessItemType} from '../../_domains/access-item-type';

@Component({
  selector: 'app-access-purchase-page',
  templateUrl: './access-purchase-page.component.html',
  styleUrls: ['./access-purchase-page.component.scss']
})
export class AccessPurchasePageComponent implements OnInit {
  item = {
    id: null,
    title: null,
    pricePerItem: null,
    canHaveMultiple: null
  };
  hasToken = false;
  purchaseForm: any;
  type: AccessItemType;

  constructor(private _store: Store<any>, private _route: ActivatedRoute) {
    this._store.select('accessItem').subscribe((item: AccessItemInfo) => {
      if (item != null) {
        this.item = item;
      }
    });
    this.type = {
      type: this._route.snapshot.params.type
    };
  }

  ngOnInit() {
    this._store.dispatch(new AccessItemActions.Request(this.type));
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
