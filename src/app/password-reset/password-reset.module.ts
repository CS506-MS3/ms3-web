import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordResetService } from './password-reset.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [PasswordResetService]
})
export class PasswordResetModule { }
