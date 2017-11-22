import {Component, HostBinding, OnInit} from '@angular/core';
import {PropertyService} from '../property.service';
import {ActivatedRoute} from '@angular/router';
import {Property} from '../../_domains/property';
import 'rxjs/add/operator/merge';
import {PropertyOptions} from '../../_domains/property-options';

@Component({
  selector: 'app-property-page',
  templateUrl: './property-page.component.html',
  styleUrls: ['./property-page.component.scss']
})
export class PropertyPageComponent implements OnInit {
  @HostBinding('class') cssClass = 'content-container';

  propertyId: string;
  data: Property;
  _propertySubscription;

  options = [];
  propertyOptions = {
    amenities: [],
    pets: [],
    houseRules: []
  };

  constructor(private _propertyService: PropertyService, private _activatedRoute: ActivatedRoute) {
    this.propertyId = this._activatedRoute.snapshot.params.id;
    this._propertySubscription = this._propertyService.propertyOptions$.merge(this._propertyService.property$)
      .subscribe((data) => {
        if (data && this._isPropertyOption(data)) {
          this.options = data.list;
        }

        if (data && this._isProperty(data)) {
          this.data = data;
        }

        this._setOptions();
      });
  }

  private _isPropertyOption(obj: any): obj is PropertyOptions {
    return obj.list !== undefined
  }

  private _isProperty(obj: any): obj is Property {
    return obj.title !== undefined
  }

  private _setOptions() {
    if (this.options.length > 0 && this.data) {
      const selectedOptions = this.data.options
        .map((id) => this.options.find((option) => option.id === id));

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
  }

  ngOnInit() {
    this._propertyService.getOptions();
    this._propertyService.get(this.propertyId);
  }
}
