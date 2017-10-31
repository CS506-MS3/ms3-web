import {Component, HostBinding, OnInit} from '@angular/core';
import {PropertyService} from '../property.service';

@Component({
  selector: 'app-create-listing-page',
  templateUrl: './create-listing-page.component.html',
  styleUrls: ['./create-listing-page.component.scss'],
})
export class CreateListingPageComponent implements OnInit {
  @HostBinding('class') cssClass = 'content-container';

  constructor(private _propertyService: PropertyService) {
  }

  ngOnInit() {
  }

  onSubmit(form) {

    return this._propertyService.create(form);
  }
}
