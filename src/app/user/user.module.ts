import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserInfoService} from './user-info.service';
import {AccessService} from './access.service';
import {WishlistService} from './wishlist.service';
import {MyPropertiesService} from './my-properties.service';
import {AccountInfoPageComponent} from './account-info-page/account-info-page.component';
import {DeactivateAccountComponent} from './deactivate-account/deactivate-account.component';
import {EffectsModule} from '@ngrx/effects';
import {DeactivateEffects} from './deactivate.effects';
import {ClarityModule} from 'clarity-angular';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule.forChild(),
    ReactiveFormsModule,
    EffectsModule.forFeature([
      DeactivateEffects.Effects,
    ]),
  ],
  declarations: [
    AccountInfoPageComponent,
    DeactivateAccountComponent
  ],
  providers: [
    UserInfoService, AccessService, WishlistService, MyPropertiesService
  ]
})
export class UserModule {
}
