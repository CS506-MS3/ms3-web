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
  @Output() submit = new EventEmitter<PropertyForm>();

  propertyForm: FormGroup;

  addressVerification = {
    verified: false,
    address: {}
  };

  roomTypeOptions = [
    {
      value: '1_BR',
      alias: '1BR'
    },
    {
      value: '2_BR',
      alias: '2BR'
    },
    {
      value: '3_BR',
      alias: '3BR'
    },
    {
      value: '4_BR',
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
  amenityOptions = [
    {
      id: 1,
      alias: 'Elevator'
    },
    {
      id: 2,
      alias: 'Wifi'
    },
    {
      id: 3,
      alias: 'Internet'
    },
    {
      id: 4,
      alias: 'Kitchen'
    },
    {
      id: 5,
      alias: 'TV'
    },
    {
      id: 6,
      alias: 'Washer'
    },
    {
      id: 7,
      alias: 'Dryer'
    },
    {
      id: 8,
      alias: 'Free Parking'
    },
    {
      id: 9,
      alias: 'Paid Parking'
    },
    {
      id: 10,
      alias: 'AC'
    },
    {
      id: 11,
      alias: 'Heating'
    },
    {
      id: 12,
      alias: 'Hot Tub'
    },
    {
      id: 13,
      alias: 'Pool'
    },
    {
      id: 14,
      alias: 'Gym'
    },
    {
      id: 15,
      alias: 'Indoor Fireplace'
    },
    {
      id: 16,
      alias: 'Cable TV'
    },
    {
      id: 17,
      alias: 'Doorman'
    },
    {
      id: 18,
      alias: 'Bathtub'
    },
    {
      id: 19,
      alias: 'Game Console'
    }
  ];
  petOptions = [
    {
      id: 1,
      alias: 'Has Dogs'
    },
    {
      id: 2,
      alias: 'Has Cats'
    },
    {
      id: 3,
      alias: 'Has Other Pets'
    }
  ];
  houseRulesOptions = [
    {
      id: 1,
      alias: 'Dogs OK'
    },
    {
      id: 2,
      alias: 'Cats OK'
    },
    {
      id: 3,
      alias: 'Other Pets OK'
    },
    {
      id: 4,
      alias: 'No Smoking'
    },
    {
      id: 5,
      alias: 'No Drinking'
    },
    {
      id: 6,
      alias: 'Couples OK'
    }
  ];

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.propertyForm = this._formBuilder.group({
      title: ['', Validators.required],
      description: [''],
      propertyType: ['APT', Validators.required],
      roomType: ['1_BR', Validators.required],
      price: [0, Validators.required],
      startDate: ['', Validators.required],
      duration: [3, Validators.required],
      amenities: this._formBuilder.group(this.amenityOptions.reduce((obj, option) => {
        obj[option.alias] = [false];
        return obj;
      }, {})),
      pets: this._formBuilder.group(this.petOptions.reduce((obj, option) => {
        obj[option.alias] = [false];
        return obj;
      }, {})),
      houseRules: this._formBuilder.group(this.houseRulesOptions.reduce((obj, option) => {
        obj[option.alias] = [false];
        return obj;
      }, {}))
    });
  }

  onSubmit({value, valid}) {

    this.submit.emit({
      title: value.title,
      address: this.addressVerification.address,
      description: value.description,
      propertyType: value.propertyType,
      roomType: value.roomType,
      price: value.price,
      startDate: value.startDate,
      duration: value.duration,
      amenities: this.amenityOptions.filter((option) => value.amenities[option.alias])
        .map((option) => option.id),
      pets: this.petOptions.filter((option) => value.pets[option.alias])
        .map((option) => option.id),
      houseRules: this.houseRulesOptions.filter((option) => value.houseRules[option.alias])
        .map((option) => option.id),
      imageUrls: []
    });
  }

  updateAddressVerification(addressVerification) {
    this.addressVerification = addressVerification;
  }
}
