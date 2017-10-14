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
import {AuthActions} from './_actions/auth.actions';
import {AlertActions} from './_actions/alert.actions';
import * as Accesses from './_actions/accesses.reducer';
import * as MyProperties from './_actions/my-properties.reducer';
import * as UserInfo from './_actions/user-info.reducer';
import * as Wishlist from './_actions/wishlist.reducer';
import {EffectsModule} from '@ngrx/effects';
import {UserModule} from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      alert: AlertActions.reducer,
      auth: AuthActions.reducer,
      accesses: Accesses.reducer,
      myProperties: MyProperties.reducer,
      userInfo: UserInfo.reducer,
      wishlist: Wishlist.reducer,
      routerReducer: routerReducer
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
    PropertyModule,
    ClarityModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
