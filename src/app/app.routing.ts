import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {SignUpPageComponent} from './account/sign-up-page/sign-up-page.component';
import {ActivatePageComponent} from './account/activate-page/activate-page.component';
import {ActivationSuccessPageComponent} from './account/activation-success-page/activation-success-page.component';
import {ActivationLinkRequestPageComponent} from './account/activation-link-request-page/activation-link-request-page.component';
import {SignUpSuccessPageComponent} from './account/sign-up-success-page/sign-up-success-page.component';
import {DeactivateAccountComponent} from './account/deactivate-account/deactivate-account.component';
import {AccountInfoPageComponent} from './account/account-info-page/account-info-page.component';
import {AccessPurchasePageComponent} from './access-purchase/access-purchase-page/access-purchase-page.component';
import {CreateListingPageComponent} from './properties/create-listing-page/create-listing-page.component';
import {RemoveListingPageComponent} from './account/remove-listing-page/remove-listing-page.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'welcome'},
  {path: 'welcome', component: LandingPageComponent},
  {path: 'register', component: SignUpPageComponent},
  {path: 'signUpSuccess', component: SignUpSuccessPageComponent},
  {path: 'activate', component: ActivatePageComponent},
  {path: 'activationSuccess', component: ActivationSuccessPageComponent},
  {path: 'activationLinkRequest', component: ActivationLinkRequestPageComponent},
  {path: 'deactivate', component: DeactivateAccountComponent},
  {path: 'accountInfo', component: AccountInfoPageComponent},
  {path: 'access/:type', component: AccessPurchasePageComponent},
  {path: 'createListing', component: CreateListingPageComponent},
  {path: 'removeListing', component: RemoveListingPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
