import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthService} from './auth.service';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from './auth.effects';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([AuthEffects])
  ],
  declarations: [],
  providers: [AuthService]
})
export class AuthModule {
}
