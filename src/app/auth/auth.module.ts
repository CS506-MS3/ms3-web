import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthService} from './auth.service';
import {EffectsModule} from '@ngrx/effects';
import {SignInEffects} from './sign-in.effects';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([
      SignInEffects.Effects
    ])
  ],
  declarations: [],
  providers: [AuthService]
})
export class AuthModule {
}
