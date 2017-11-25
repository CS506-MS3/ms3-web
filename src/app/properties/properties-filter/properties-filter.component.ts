import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FILTER_OPTIONS} from './filter-options.constants';
import {PropertyService} from '../property.service';

@Component({
  selector: 'app-properties-filter',
  templateUrl: './properties-filter.component.html',
  styleUrls: ['./properties-filter.component.scss']
})
export class PropertiesFilterComponent implements OnInit {
  @Input() filterInput: any;
  @Output() onApply = new EventEmitter<any>();

  filterForm: FormGroup;
  options: any;
  filterOpen = false;

  constructor(private _property: PropertyService, private _fb: FormBuilder) {

    this._property.propertyOptions$.subscribe((options) => {
      if (options.list.length > 0) {
        this.options = {};
        this.options.AMENITIES = options.list.filter((option) => option.type === 'AMENITIES');
        this.options.PETS = options.list.filter((option) => option.type === 'PETS');
        this.options.HOUSE_RULES = options.list.filter((option) => option.type === 'HOUSE_RULES');
        this.options = Object.assign({}, this.options, FILTER_OPTIONS);
        this.generateForm();
      }
    });
  }

  ngOnInit() {

    this._property.getOptions();
  }

  generateForm() {
    if (this.filterInput) {
      this.filterForm = this._fb.group({
        propertyType: [this.filterInput.propertyType],
        roomType: [this.filterInput.roomType],
        startBefore: [this.filterInput.startBefore ? this.filterInput.startBefore : null],
        endAfter: [this.filterInput.endAfter ? this.filterInput.endAfter : null],
        minPrice: [this.filterInput.minPrice ? this.filterInput.minPrice : null],
        maxPrice: [this.filterInput.maxPrice ? this.filterInput.maxPrice : null],
        zipcode: [this.filterInput.zipcode ? this.filterInput.zipcode : null],
        amenities: this._fb.array(this.options.AMENITIES.map(
          (option) => this._fb.control(
            this.filterInput.options && this.filterInput.options.includes(option.id)))),
        pets: this._fb.array(this.options.PETS.map(
          (option) => this._fb.control(
            this.filterInput.options && this.filterInput.options.includes(option.id)))),
        houseRules: this._fb.array(this.options.HOUSE_RULES.map(
          (option) => this._fb.control(
            this.filterInput.options && this.filterInput.options.includes(option.id))))
      });
    }
  }

  applyFilter({value, valid}) {
    const amenities = this.options.AMENITIES
      .filter((option, index) => value.amenities[index])
      .map((option) => option.id);
    const pets = this.options.PETS
      .filter((option, index) => value.pets[index])
      .map((option) => option.id);
    const houseRules = this.options.HOUSE_RULES
      .filter((option, index) => value.houseRules[index])
      .map((option) => option.id);

    this.filterOpen = false;
    this.onApply.emit({
      propertyType: value.propertyType,
      roomType: value.roomType,
      startBefore: value.startBefore,
      endBefore: value.endBefore,
      minPrice: value.minPrice,
      maxPrice: value.maxPrice,
      zipcode: value.zipcode,
      options: `[${[...amenities, ...pets, ...houseRules].join(',')}]`
    });
  }

  openFilter() {
    this.filterOpen = true;
  }
}
