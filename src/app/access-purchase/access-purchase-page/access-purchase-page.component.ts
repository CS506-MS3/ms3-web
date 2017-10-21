import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-access-purchase-page',
  templateUrl: './access-purchase-page.component.html',
  styleUrls: ['./access-purchase-page.component.scss']
})
export class AccessPurchasePageComponent implements OnInit {
  item: any;
  hasToken = false;

  constructor() { }

  ngOnInit() {
    this.item = {
      title: 'Subleaser Access Subscription',
      pricePerItem: 10.99,
      canHaveMultiple: false
    };
  }

  onStripeTokenReceived($event) {
  }
}
