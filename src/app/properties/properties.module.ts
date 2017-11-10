import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PropertiesService} from './properties.service';
import {PropertyService} from './property.service';
import {CreateListingPageComponent} from './create-listing-page/create-listing-page.component';
import {ClarityModule} from 'clarity-angular';
import {PropertyFormComponent} from './property-form/property-form.component';
import {AddressVerificationFormComponent} from './address-verification-form/address-verification-form.component';
import {ImageFormComponent} from './image-form/image-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {EffectsModule} from '@ngrx/effects';
import {PropertyCreateEffects} from './property-create.effects';
import {PropertyRemoveEffects} from './property-remove.effects';
import {RemoveListingPageComponent} from './remove-listing-page/remove-listing-page.component';
import {RouterModule} from '@angular/router';
import { PropertyListPageComponent } from './property-list-page/property-list-page.component';
import { PropertiesSortComponent } from './properties-sort/properties-sort.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    ClarityModule.forChild(),
    EffectsModule.forFeature([
      PropertyCreateEffects,
      PropertyRemoveEffects
    ])
  ],
  declarations: [
    CreateListingPageComponent,
    PropertyFormComponent,
    AddressVerificationFormComponent,
    ImageFormComponent,
    RemoveListingPageComponent,
    PropertyListPageComponent,
    PropertiesSortComponent
  ],
  providers: [PropertiesService, PropertyService]
})
export class PropertiesModule {
}
