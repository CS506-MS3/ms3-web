import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestApiService } from './rest-api.service';
import {AlertBarComponent} from './alert-bar/alert-bar.component';
import {AuthModule} from '../auth/auth.module';

@NgModule({
  imports: [
    CommonModule,
    AuthModule
  ],
  declarations: [
    AlertBarComponent
  ],
  exports: [
    AlertBarComponent
  ],
  providers: [RestApiService]
})
export class CoreModule { }
