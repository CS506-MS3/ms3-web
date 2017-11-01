import {Component, HostBinding, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {PropertyService} from '../property.service';

@Component({
  selector: 'app-remove-listing-page',
  templateUrl: './remove-listing-page.component.html',
  styleUrls: ['./remove-listing-page.component.scss']
})
export class RemoveListingPageComponent implements OnInit {
  @HostBinding('class') cssClass = 'content-container';

  removeListingForm: FormGroup;
  propertyId: number;


  constructor(private _formBuilder: FormBuilder,
              private _activatedRoute: ActivatedRoute,
              private _propertyService: PropertyService) {
    this._activatedRoute.params.subscribe(params => {
      this.propertyId = params['id'];
    });
  }

  ngOnInit() {
    this.removeListingForm = this._formBuilder.group({
      password: ['', Validators.required],
    });
  }

  onSubmit(removeListingForm: FormGroup) {

    this._propertyService.remove(this.propertyId, removeListingForm.value);
  }
}
