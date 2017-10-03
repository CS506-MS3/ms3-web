import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.signUpForm = this._formBuilder.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
      passwordVerify: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      notification: ['', Validators.required],
    });
  }

}
