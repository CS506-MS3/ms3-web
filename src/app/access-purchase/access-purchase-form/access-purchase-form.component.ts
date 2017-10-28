import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-access-purchase-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './access-purchase-form.component.html',
  styleUrls: ['./access-purchase-form.component.scss']
})
export class AccessPurchaseFormComponent implements OnInit {
  @Input() item: any;
  @Output() onTokenReceived: EventEmitter<any> = new EventEmitter<any>();

  count = 1;
  hasToken = false;

  constructor() { }

  ngOnInit() {
  }

  incrementCount() {
    this.count++;
    this.hasToken = false;
    this.onTokenReceived.emit({
      item: this.item,
      count: this.count,
      token: null
    });
  }

  decrementCount() {
    this.count -= 1 < this.count ? 1 : 0;
    this.hasToken = false;
    this.onTokenReceived.emit({
      item: this.item,
      count: this.count,
      token: null
    });
  }

  openCheckout() { // based on http://blog.mgechev.com/2016/07/05/using-stripe-payment-with-angular-2/
    const handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_oi0sKPJYLGjdvOXOM8tE8cMa',
      locale: 'auto',
      token: function (token: any) {
        this.onTokenReceived.emit({
          item: this.item,
          count: this.count,
          token: token
        });
        this.hasToken = true;
      }
    });

    handler.open({
      name: 'Madison Sublease',
      description: this.item.alias,
      amount: this.count * this.item.pricePerItem * 100
    });
  }
}
