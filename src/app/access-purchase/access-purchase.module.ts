import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccessPurchasePageComponent} from './access-purchase-page/access-purchase-page.component';
import {ClarityModule} from 'clarity-angular';
import { AccessPurchaseFormComponent } from './access-purchase-form/access-purchase-form.component';
import {EffectsModule} from '@ngrx/effects';
import {AccessItemEffects} from './access-item.effects';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule.forChild(),
    EffectsModule.forFeature([
      AccessItemEffects
    ])
  ],
  declarations: [AccessPurchasePageComponent, AccessPurchaseFormComponent]
})
export class AccessPurchaseModule {
}
