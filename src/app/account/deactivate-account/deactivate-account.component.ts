import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-deactivate-account',
  templateUrl: './deactivate-account.component.html',
  styleUrls: ['./deactivate-account.component.scss']
})
export class DeactivateAccountComponent implements OnInit {

  deactivateForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.deactivateForm = this._formBuilder.group({
      password: ['', Validators.required],
    });
  }

  onSubmit(deactivateForm: FormGroup) {

  }


}
