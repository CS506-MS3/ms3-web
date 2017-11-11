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
      amenities: this._formBuilder.array(this.options.amenities.map((option) => this._formBuilder.control(false))),
      pets: this._formBuilder.array(this.options.pets.map((option) => this._formBuilder.control(false))),
      houseRules: this._formBuilder.array(this.options.houseRules.map((option) => this._formBuilder.control(false))),
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
      amenities: this.options.amenities.filter((option) => value.amenities[option.id])
        .map((option) => option.id),
      pets: this.options.pets.filter((option) => value.pets[option.id])
        .map((option) => option.id),
      houseRules: this.options.houseRules.filter((option) => value.houseRules[option.id])
        .map((option) => option.id),
      imageUrls: []
    });
  }

  updateAddressVerification(addressVerification) {
    this.addressVerification = addressVerification;
  }
}
