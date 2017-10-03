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
import {AccountActions} from './actions/account.actions';
import {AuthActions} from './actions/auth.actions';
import {AlertActions} from './actions/alert.actions';

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
      account: AccountActions.reducer,
      routerReducer: routerReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    AppRoutingModule,
    CoreModule,
    SharedModule,
    AccountModule,
    ClarityModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
