import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ClarityModule} from 'clarity-angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from '../app.routing';
import {SignInFormComponent} from './sign-in-form/sign-in-form.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ClarityModule.forChild()
  ],
  declarations: [HeaderComponent, FooterComponent, SignInFormComponent],
  exports: [HeaderComponent, FooterComponent]
})
export class SharedModule {
}
