import {Component, OnInit} from '@angular/core';
import {PropertyService} from '../property.service';

@Component({
  selector: 'app-create-listing-page',
  templateUrl: './create-listing-page.component.html',
  styleUrls: ['./create-listing-page.component.scss'],
  host: {
    class:'content-container'
  }
})
export class CreateListingPageComponent implements OnInit {

  constructor(private _propertyService: PropertyService) {
  }

  ngOnInit() {
  }

  onSubmit(form) {

    return this._propertyService.create(form);
  }
}
