import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PasswordResetService} from './password-reset.service';
import {PasswordResetRequestPageComponent} from './password-reset-request-page/password-reset-request-page.component';
import {PasswordResetPageComponent} from './password-reset-page/password-reset-page.component';
import {SharedModule} from '../shared/shared.module';
import {EffectsModule} from '@ngrx/effects';
import {PasswordResetEffects} from './password-reset.effects';
import {PasswordResetLinkEffects} from './password-reset-link.effects';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    EffectsModule.forFeature([
      PasswordResetEffects,
      PasswordResetLinkEffects
    ])
  ],
  declarations: [PasswordResetRequestPageComponent, PasswordResetPageComponent],
  providers: [PasswordResetService]
})
export class PasswordResetModule {
}
