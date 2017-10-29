import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-remove-listing-page',
  templateUrl: './remove-listing-page.component.html',
  styleUrls: ['./remove-listing-page.component.scss']
})
export class RemoveListingPageComponent implements OnInit {

  removeListingForm: FormGroup;


  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.removeListingForm = this._formBuilder.group({
      password: ['', Validators.required],
    });
  }

  onSubmit(removeListingForm: FormGroup) {

  }

}
