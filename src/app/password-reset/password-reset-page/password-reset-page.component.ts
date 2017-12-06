import {Component, HostBinding, OnInit} from '@angular/core';
import {PasswordResetService} from '../password-reset.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-password-reset-page',
  templateUrl: './password-reset-page.component.html',
  styleUrls: ['./password-reset-page.component.scss']
})
export class PasswordResetPageComponent implements OnInit {
  @HostBinding('class') cssClass = 'content-container';
  passwordResetForm: FormGroup;

  constructor(private _service: PasswordResetService, private _fb: FormBuilder) {
    this.passwordResetForm = this._fb.group({
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit({value, valid}) {
    if (valid) {
      this._service.resetPassword(value);
    }
  }
}
