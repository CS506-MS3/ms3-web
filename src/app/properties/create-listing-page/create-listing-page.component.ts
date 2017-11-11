import {Component, HostBinding, OnInit} from '@angular/core';
import {PropertyService} from '../property.service';

@Component({
  selector: 'app-create-listing-page',
  templateUrl: './create-listing-page.component.html',
  styleUrls: ['./create-listing-page.component.scss'],
})
export class CreateListingPageComponent implements OnInit {
  @HostBinding('class') cssClass = 'content-container';

  options = {
    amenities: [],
    pets: [],
    houseRules: []
  };

  constructor(private _propertyService: PropertyService) {
    this._propertyService.propertyOptions$.subscribe((options) => {
      if (options.list.length > 0) {
        this.options.amenities = options.list.filter((option) => option.type === 'AMENITIES');
        this.options.pets = options.list.filter((option) => option.type === 'PETS');
        this.options.houseRules = options.list.filter((option) => option.type === 'HOUSE_RULES');
      }
    });
  }

  ngOnInit() {
    this._propertyService.getOptions();
  }

  onSubmit(form) {

    return this._propertyService.create(form);
  }
}
