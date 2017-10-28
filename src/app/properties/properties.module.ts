import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesService } from './properties.service';
import { PropertyService } from './property.service';
import { CreateListingPageComponent} from './create-listing-page/create-listing-page.component';
import {ClarityModule} from "clarity-angular";

@NgModule({
  imports: [
    CommonModule,
    ClarityModule.forChild()
  ],
  declarations: [CreateListingPageComponent],
  providers: [PropertiesService, PropertyService]
})
export class PropertiesModule { }
