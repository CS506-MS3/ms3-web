import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PropertyForm} from '../../_domains/property-form';

@Component({
  selector: 'app-property-form',
  templateUrl: './property-form.component.html',
  styleUrls: ['./property-form.component.scss']
})
export class PropertyFormComponent implements OnInit {
  @Input() type: string;
  @Input() options: any;
  @Output() formSubmit = new EventEmitter<PropertyForm>();

  propertyForm: FormGroup;

  addressVerification = {
    verified: false,
    address: {
      components: [],
      location: {
        lat: null,
        lng: null
      }
    }
  };

  roomTypeOptions = [
    {
      value: 'STUDIO',
      alias: 'STUDIO'
    },
    {
      value: '1BR',
      alias: '1BR'
    },
    {
      value: '2BR',
      alias: '2BR'
    },
    {
      value: '3BR',
      alias: '3BR'
    },
    {
      value: '4BR',
      alias: '4BR'
    }
  ];
  durationOptions = [
    {
      value: 1,
      alias: '1 month'
    },
    {
      value: 2,
      alias: '2 months'
    },
    {
      value: 3,
      alias: '3 months'
    },
    {
      value: 4,
      alias: '4 months'
    },
    {
      value: 5,
      alias: '5 months'
    },
    {
      value: 6,
      alias: '6 months'
    },
    {
      value: 7,
      alias: '7 months'
    },
    {
      value: 8,
      alias: '8 months'
    },
    {
      value: 9,
      alias: '9 months'
    },
    {
      value: 10,
      alias: '10 months'
    },
    {
      value: 11,
      alias: '11 months'
    },
    {
      value: 12,
      alias: '1 year'
    }
  ];

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.propertyForm = this._formBuilder.group({
      title: ['', Validators.required],
      description: [''],
      propertyType: ['APARTMENT', Validators.required],
      roomType: ['1BR', Validators.required],
      price: [0, Validators.required],
      startDate: ['', Validators.required],
      duration: [3, Validators.required],
      amenities: this._formBuilder.array(this.options.amenities.map((option) => this._formBuilder.control(false))),
      pets: this._formBuilder.array(this.options.pets.map((option) => this._formBuilder.control(false))),
      houseRules: this._formBuilder.array(this.options.houseRules.map((option) => this._formBuilder.control(false))),
    });
  }

  onSubmit({value, valid}) {
    const amenities = this.options.amenities
      .filter((option, index) => value.amenities[index])
      .map((option) => option.id);
    const pets = this.options.pets
      .filter((option, index) => value.pets[index])
      .map((option) => option.id);
    const houseRules = this.options.houseRules
      .filter((option, index) => value.houseRules[index])
      .map((option) => option.id);

    const options = [...amenities, ...pets, ...houseRules];
    let level1Type;
    switch (value.propertyType) {
      case 'APARTMENT':
        level1Type = 'street_number';
        break;
      case 'HOUSE':
        level1Type = 'street_number';
        break;
    }

    this.formSubmit.emit({
      title: value.title,
      address: this.buildAddress(value.propertyType),
      roomType: value.roomType,
      description: value.description,
      startDate: value.startDate,
      duration: value.duration,
      price: value.price,
      options: options,
      imageUrls: []
    });
  }

  private buildAddress(type) {
    const includedTypes = [
      'subpremise',
      'street_number',
      'route',
      'locality',
      'administrative_area_level_1',
      'postal_code'
    ];

    const address = this.addressVerification.address.components.filter((component) => {
      return component.types.reduce((prev, curr) => {
        return prev || includedTypes.includes(curr);
      }, false);
    });
    const level1 = address
      .shift()
      .long_name;
    const level2 = address
      .filter((component) => component.types.includes('street_number') || component.types.includes('route'))
      .map((component) => component.long_name).join(' ');
    const city = address
      .filter((component) => component.types.includes('locality'))
      .map((component) => component.long_name)
      .join(' ');
    const state = address
      .filter((component) => component.types.includes('administrative_area_level_1'))
      .map((component) => component.long_name)
      .join(' ');
    const zipcode = address
      .filter((component) => component.types.includes('postal_code'))
      .map((component) => component.long_name)
      .join(' ');
    const geocode = this.addressVerification.address.location;

    return {
      type: type,
      detailLevel1: level1,
      detailLevel2: level2,
      city: city,
      state: state,
      zipcode: zipcode,
      geocode: geocode
    };
  }

  updateAddressVerification(addressVerification) {
    this.addressVerification = addressVerification;
  }
}
