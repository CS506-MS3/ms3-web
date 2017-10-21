import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-access-purchase-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './access-purchase-form.component.html',
  styleUrls: ['./access-purchase-form.component.scss']
})
export class AccessPurchaseFormComponent implements OnInit {
  @Input() item: any;
  count = 1;

  constructor() { }

  ngOnInit() {
  }

  incrementCount() {
    this.count++;
  }

  decrementCount() {
    this.count -= 1 < this.count ? 1 : 0;
  }
}
