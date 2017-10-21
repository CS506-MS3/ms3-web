import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccessPurchasePageComponent} from './access-purchase-page/access-purchase-page.component';
import {ClarityModule} from 'clarity-angular';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule.forChild()
  ],
  declarations: [AccessPurchasePageComponent]
})
export class AccessPurchaseModule {
}
