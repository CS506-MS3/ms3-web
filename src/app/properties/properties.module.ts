import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PropertiesService} from './properties.service';
import {PropertyService} from './property.service';
import {CreateListingPageComponent} from './create-listing-page/create-listing-page.component';
import {ClarityModule} from "clarity-angular";
import {PropertyFormComponent} from './property-form/property-form.component';
import {AddressVerificationFormComponent} from './address-verification-form/address-verification-form.component';
import {ImageFormComponent} from './image-form/image-form.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClarityModule.forChild()
  ],
  declarations: [
    CreateListingPageComponent,
    PropertyFormComponent,
    AddressVerificationFormComponent,
    ImageFormComponent
  ],
  providers: [PropertiesService, PropertyService]
})
export class PropertiesModule {
}
