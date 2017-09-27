import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ClarityModule} from 'clarity-angular';
import {StoreModule} from '@ngrx/store';
import {routerReducer} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {AppRoutingModule} from './app.routing';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({routerReducer: routerReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    AppRoutingModule,
    SharedModule,
    ClarityModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
