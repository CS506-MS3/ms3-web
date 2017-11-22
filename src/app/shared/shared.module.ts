import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ClarityModule} from 'clarity-angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SignInFormComponent} from './sign-in-form/sign-in-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {PropertySummaryCardComponent} from './property-summary-card/property-summary-card.component';
import {WishlistCardComponent} from './wishlist-card/wishlist-card.component';
import {WishlistButtonComponent} from './wishlist-button/wishlist-button.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule,
    ClarityModule.forChild()
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    PropertySummaryCardComponent,
    SignInFormComponent,
    WishlistCardComponent,
    WishlistButtonComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PropertySummaryCardComponent,
    WishlistButtonComponent
  ]
})
export class SharedModule {
}
