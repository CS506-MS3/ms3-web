import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestApiService } from './rest-api.service';
import {AlertBarComponent} from './alert-bar/alert-bar.component';
import {AuthModule} from '../auth/auth.module';
import {HttpModule} from '@angular/http';
import {GeoService} from './geo.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    AuthModule
  ],
  declarations: [
    AlertBarComponent
  ],
  exports: [
    AlertBarComponent
  ],
  providers: [RestApiService, GeoService]
})
export class CoreModule { }
