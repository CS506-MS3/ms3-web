import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestApiService } from './rest-api.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [RestApiService]
})
export class CoreModule { }
