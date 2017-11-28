import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {SignUpPageComponent} from './account/sign-up-page/sign-up-page.component';
import {ActivatePageComponent} from './account/activate-page/activate-page.component';
import {ActivationSuccessPageComponent} from './account/activation-success-page/activation-success-page.component';
import {ActivationLinkRequestPageComponent} from './account/activation-link-request-page/activation-link-request-page.component';
import {SignUpSuccessPageComponent} from './account/sign-up-success-page/sign-up-success-page.component';
import {DeactivateAccountComponent} from './user/deactivate-account/deactivate-account.component';
import {AccountInfoPageComponent} from './user/account-info-page/account-info-page.component';
import {AccessPurchasePageComponent} from './access-purchase/access-purchase-page/access-purchase-page.component';
import {CreateListingPageComponent} from './properties/create-listing-page/create-listing-page.component';
import {RemoveListingPageComponent} from './properties/remove-listing-page/remove-listing-page.component';
import {AuthGuard} from './auth/auth.guard';
import {VisitorGuard} from './auth/visitor.guard';
import {PropertyListPageComponent} from './properties/property-list-page/property-list-page.component';
import {PropertyPageComponent} from './properties/property-page/property-page.component';
import {PasswordResetRequestPageComponent} from './password-reset/password-reset-request-page/password-reset-request-page.component';
import {PasswordResetPageComponent} from './password-reset/password-reset-page/password-reset-page.component';
import {UserInfoEditPageComponent} from './user/user-info-edit-page/user-info-edit-page.component';
import {PasswordChangePageComponent} from './user/password-change-page/password-change-page.component';
import {CancelSubscriptionComponent} from './user/cancel-subscription/cancel-subscription.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'welcome'},
  {path: 'welcome', component: LandingPageComponent},
  {path: 'account/register', component: SignUpPageComponent, canActivate: [VisitorGuard]},
  {path: 'account/activation_link_sent', component: SignUpSuccessPageComponent, canActivate: [VisitorGuard]},
  {path: 'account/activate', component: ActivatePageComponent, canActivate: [VisitorGuard]},
  {path: 'account/activation_success', component: ActivationSuccessPageComponent},
  {path: 'account/reactivate', component: ActivationLinkRequestPageComponent, canActivate: [VisitorGuard]},
  {path: 'account/deactivate', component: DeactivateAccountComponent, canActivate: [AuthGuard]},
  {path: 'account/info', component: AccountInfoPageComponent, canActivate: [AuthGuard]},
  {path: 'account/info/edit', component: UserInfoEditPageComponent, canActivate: [AuthGuard]},
  {path: 'account/info/change-password', component: PasswordChangePageComponent, canActivate: [AuthGuard]},
  {path: 'account/info/cancel-subscription', component: CancelSubscriptionComponent, canActivate: [AuthGuard]},
  {path: 'access/:type', component: AccessPurchasePageComponent, canActivate: [AuthGuard]},
  {path: 'properties', component: PropertyListPageComponent},
  {path: 'properties/create', component: CreateListingPageComponent, canActivate: [AuthGuard]},
  {path: 'properties/:id/remove', component: RemoveListingPageComponent, canActivate: [AuthGuard]},
  {path: 'properties/:id', component: PropertyPageComponent},
  {path: 'reset-password', component: PasswordResetPageComponent, canActivate: [VisitorGuard]},
  {path: 'reset-password/request-link', component: PasswordResetRequestPageComponent, canActivate: [VisitorGuard]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
