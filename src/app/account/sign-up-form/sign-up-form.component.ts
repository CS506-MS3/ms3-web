import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AccountService} from '../account.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _account: AccountService) {
  }

  ngOnInit() {
    this.signUpForm = this._formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(/[0-9a-zA-Z\-_.]*@wisc\.edu/)])],
      passwords: this._formBuilder.group({
        password: ['', Validators.compose([
          Validators.required,
          Validators.pattern(/[a-zA-Z0-9!@#\$%\^&.]{8,32}/),
          Validators.pattern(/.*[A-Za-z]+.*/),
          Validators.pattern(/.*[0-9]+.*/)
        ])],
        passwordConfirm: ['']
      }, {validator: this.checkPasswords}),
      phoneNumber: [''],
      notification: [false, Validators.required],
    });
  }

  onSubmit({value, valid}: { value: any, valid: boolean }) {
    if (valid) {

      this._account.create({
        email: value.email,
        password: value.passwords.password,
        phone: value.phoneNumber,
        notification: {
          marketing: value.notification
        }
      });
    }
  }

  private checkPasswords = (group: FormGroup) => {
    const password = group.controls.password.value;
    const confirm = group.controls.passwordConfirm.value;

    return password === confirm ? null : {passwordConfirmError: true};
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get passwordFields() {
    return this.signUpForm.get('passwords');
  }

  get password() {
    return this.signUpForm.get('passwords').get('password');
  }

  get passwordConfirm() {
    return this.signUpForm.get('passwords').get('passwordConfirm');
  }

  get phoneNumber() {
    return this.signUpForm.get('phoneNumber');
  }
}
