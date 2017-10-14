import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesService } from './properties.service';
import { PropertyService } from './property.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [PropertiesService, PropertyService]
})
export class PropertiesModule { }
