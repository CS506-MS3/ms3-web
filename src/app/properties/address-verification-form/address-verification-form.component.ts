import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GeoService} from '../../core/geo.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-address-verification-form',
  templateUrl: './address-verification-form.component.html',
  styleUrls: ['./address-verification-form.component.scss']
})
export class AddressVerificationFormComponent implements OnInit {
  @Output() verify = new EventEmitter<any>();

  addressForm: FormGroup;
  addressCandidate: any;
  addressCandidateString: string;

  openModal = false;
  verified = false;

  private _addressFields = [
    'subpremise',
    'street_number',
    'route',
    'locality'
  ];

  constructor(private _geo: GeoService, private _formBuilder: FormBuilder) {
    this.addressForm = this._formBuilder.group({
      address: ['', Validators.required]
    });
    this.onFormChanges();
  }

  ngOnInit() {
  }

  onSubmit({value, valid}) {
    if (valid) {
      this._geo.getLocation(value.address)
        .map((response) => response.json())
        .subscribe((result) => {
          if (result.status === 'OK') {
            this.addressCandidate = result.results[0];
            this.addressCandidateString = this.addressCandidate.formatted_address;
            this.openModal = true;
          }
        });
    }
  }

  onConfirm() {
    this.openModal = false;
    this.addressForm.value.address = this.addressCandidateString;
    this.verify.emit({
      verified: true,
      address: {
        components: this.addressCandidate.address_components,
        location: this.addressCandidate.geometry.location
      }
    });
    this.verified = true;
  }

  onReject() {
    this.openModal = false;
  }

  onFormChanges(): void {
    this.addressForm.get('address').valueChanges.subscribe(() => {
      if (this.verified) {
        this.verify.emit({
          verified: false,
          address: {}
        });
      }
      this.verified = false;
    });
  }
}
