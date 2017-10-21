import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccessPurchasePageComponent} from './access-purchase-page/access-purchase-page.component';
import {ClarityModule} from 'clarity-angular';
import { AccessPurchaseFormComponent } from './access-purchase-form/access-purchase-form.component';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule.forChild()
  ],
  declarations: [AccessPurchasePageComponent, AccessPurchaseFormComponent]
})
export class AccessPurchaseModule {
}
