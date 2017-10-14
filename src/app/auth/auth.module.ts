import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthService} from './auth.service';
import {EffectsModule} from '@ngrx/effects';
import {SignInEffects} from './sign-in.effects';
import {AuthGuard} from './auth.guard';
import {AuthPermissions} from './auth.permission';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([
      SignInEffects.Effects
    ])
  ],
  declarations: [],
  providers: [AuthService, AuthGuard, AuthPermissions]
})
export class AuthModule {
}
