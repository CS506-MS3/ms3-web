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
import {UserInfoGetEffects} from './user-info-get.effects';
import {RouterModule} from '@angular/router';
import {PersonalInfoComponent} from './personal-info/personal-info.component';
import {SubscriptionListComponent} from './subscription-list/subscription-list.component';
import {MyPropertiesListComponent} from './my-properties-list/my-properties-list.component';
import {MyPropertiesCardComponent} from './my-properties-card/my-properties-card.component';
import {SharedModule} from '../shared/shared.module';
import {MyWishlistComponent} from './my-wishlist/my-wishlist.component';
import {WishlistAddEffects} from './wishlist-add.effects';
import {WishlistRemoveEffects} from './wishlist-remove.effects';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule.forChild(),
    ReactiveFormsModule,
    RouterModule,
    EffectsModule.forFeature([
      DeactivateEffects.Effects,
      UserInfoGetEffects,
      WishlistAddEffects,
      WishlistRemoveEffects
    ]),
    SharedModule
  ],
  declarations: [
    AccountInfoPageComponent,
    DeactivateAccountComponent,
    PersonalInfoComponent,
    SubscriptionListComponent,
    MyPropertiesCardComponent,
    MyPropertiesListComponent,
    MyWishlistComponent
  ],
  providers: [
    UserInfoService, AccessService, WishlistService, MyPropertiesService
  ]
})
export class UserModule {
}
