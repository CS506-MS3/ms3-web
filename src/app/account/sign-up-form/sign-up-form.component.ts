import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

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
      email: ['', Validators.required, Validators.pattern("[^ @]*@[^ @]*"), emailDomainValidator],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      passwordVerify: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      phoneNumber: ['', Validators.required],
      notification: ['', Validators.required],
    });

    function emailDomainValidator(control: FormControl) {
      let email = control.value;
      if (email && email.indexOf("@") != -1) {
        let [_, domain] = email.split('@');
        if (domain !== 'wisc.edu') {
          return {
            emailDomain: {
              parsedDomain: domain
            }
          }
        }
      }
      return null;
    }
  }
}
