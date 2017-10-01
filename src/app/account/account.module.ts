import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SignUpFormComponent} from './sign-up-form/sign-up-form.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SignUpFormComponent,
    SignUpPageComponent
  ]
})
export class AccountModule { }
