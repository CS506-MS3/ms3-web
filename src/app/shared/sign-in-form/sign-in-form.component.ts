import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Credentials} from '../../_domains/credentials';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {
  credentials: FormGroup;
  @Output() onSignIn: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _auth: AuthService, private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.credentials = this._formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit({value, valid}: { value: Credentials, valid: boolean }) {
    if (valid) {

      this._auth.authenticate(value);
      this.onSignIn.emit({});
    }
  }
}
