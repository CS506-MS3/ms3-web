import {Component, HostBinding, OnInit} from '@angular/core';
import {PropertyService} from '../property.service';

@Component({
  selector: 'app-property-page',
  templateUrl: './property-page.component.html',
  styleUrls: ['./property-page.component.scss']
})
export class PropertyPageComponent implements OnInit {
  @HostBinding('class') cssClass = 'content-container';

  data = {
    "id": "5636139285217280",
    "duration": 5,
    "price": 530.59,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus felis est, et luctus lorem hendrerit nec. Aliquam mauris urna, euismod consequat ultricies eget, vehicula ut lacus. In hac habitasse platea dictumst. Sed at feugiat mi. Integer congue, dui id lobortis dignissim, nunc lacus feugiat lectus, ac mollis purus risus ut justo. Suspendisse ut lorem ante. Nunc at sem quis massa suscipit luctus et vitae neque. Quisque pharetra justo arcu, vitae sagittis nulla volutpat eu.\nEtiam gravida id mauris et placerat. Aliquam iaculis feugiat commodo. Praesent fermentum commodo ex at tincidunt. In bibendum lorem magna, nec pretium urna convallis vel. Pellentesque condimentum vestibulum neque vel vehicula. Morbi lobortis metus urna, id semper diam tristique nec. Phasellus interdum, nisi sed.",
    "options": [
      1,
      2,
      3,
      4,
      5,
      11,
      13
    ],
    "address": {
      "geocode": {
        "lat": 43.0730257,
        "lng": -89.3928802
      },
      "detailLevel1": "Apt. 6B",
      "detailLevel2": "430 W Johnson St.",
      "city": "Madison",
      "state": "WI",
      "zipcode": "53703",
      "type": "APARTMENT"
    },
    "status": false,
    "owner": "5702666986455040",
    "imageUrls": [],
    "title": "Test Object 3",
    "roomType": "1BR",
    "startDate": "2017-11-10T21:16:48.757Z",
    "createTime": "2017-11-11T04:52:13.480Z",
    "updateTime": "2017-11-11T04:52:13.480Z"
  };

  options = [];
  propertyOptions = {
    amenities: [],
    pets: [],
    houseRules: []
  };

  constructor(private _propertyService: PropertyService) {
    this._propertyService.propertyOptions$.subscribe((options) => {
      if (options.list.length > 0) {
        this.options = options.list;
        const selectedOptions = this.data.options.map((id) => {
          return this.options.find((option) => {
            return parseInt(option.id) === id;
          });
        });

        this.propertyOptions.amenities = selectedOptions.filter((option) => {
          return option.type === 'AMENITIES'
        });
        this.propertyOptions.pets = selectedOptions.filter((option) => {
          return option.type === 'PETS'
        });
        this.propertyOptions.houseRules = selectedOptions.filter((option) => {
          return option.type === 'HOUSE_RULES'
        });
      }
    });
  }

  ngOnInit() {
    this._propertyService.getOptions();
  }
}
