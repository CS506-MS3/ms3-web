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

  hasToken = false;

  constructor() {
  }

  ngOnInit() {
  }

  openCheckout() { // based on http://blog.mgechev.com/2016/07/05/using-stripe-payment-with-angular-2/
    const ONE_DOLLAR_IN_CENTS = 100;
    const handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_RrXUdTG5pJMkuNh7R5USxmxe',
      locale: 'auto',
      token: this.emitToken.bind(this)
    });

    handler.open({
      name: 'Madison Sublease',
      description: this.item.alias,
      amount: this.item.pricePerItem * ONE_DOLLAR_IN_CENTS
    });
  }

  emitToken(token: any) {
    this.onTokenReceived.emit({
      item: this.item,
      token: token
    });
    this.hasToken = true;
  }
}
