import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ClarityModule} from 'clarity-angular';
import {StoreModule} from '@ngrx/store';
import {routerReducer} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {AppRoutingModule} from './app.routing';
import {SharedModule} from './shared/shared.module';
import {AccountModule} from './account/account.module';
import {CoreModule} from './core/core.module';
import * as Auth from './_actions/auth.reducer';
import {AlertActions} from './_actions/alert.actions';
import * as Accesses from './_actions/accesses.reducer';
import * as MyProperties from './_actions/my-properties.reducer';
import * as UserInfo from './_actions/user-info.reducer';
import * as Wishlist from './_actions/wishlist.reducer';
import * as Pricings from './_actions/pricings.reducer';
import {EffectsModule} from '@ngrx/effects';
import {UserModule} from './user/user.module';
import {PropertiesModule} from './properties/properties.module';
import {AccessPurchaseModule} from './access-purchase/access-purchase.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      alert: AlertActions.reducer,
      auth: Auth.reducer,
      accesses: Accesses.reducer,
      myProperties: MyProperties.reducer,
      userInfo: UserInfo.reducer,
      wishlist: Wishlist.reducer,
      routerReducer: routerReducer,
      pricings: Pricings.reducer
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    AppRoutingModule,
    CoreModule,
    SharedModule,
    AccountModule,
    UserModule,
    PropertiesModule,
    AccessPurchaseModule,
    ClarityModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
