import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SignUpFormComponent} from './sign-up-form/sign-up-form.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { AccountService } from './account.service';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import {EffectsModule} from '@ngrx/effects';
import {AccountEffects} from './account.effects';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([AccountEffects])
  ],
  declarations: [
    SignUpFormComponent,
    SignUpPageComponent,
    SignInFormComponent
  ],
  providers: [AccountService]
})
export class AccountModule { }
