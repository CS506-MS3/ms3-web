import {Component, HostBinding, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserInfoService} from '../user-info.service';

@Component({
  selector: 'app-user-info-edit-page',
  templateUrl: './user-info-edit-page.component.html',
  styleUrls: ['./user-info-edit-page.component.scss']
})
export class UserInfoEditPageComponent implements OnInit {
  @HostBinding('class') cssClass = 'content-container';

  userInfoEditForm: FormGroup;

  constructor(private _service: UserInfoService, private _fb: FormBuilder) {
    this._service.userInfo$.subscribe((userInfo) => {
      this.userInfoEditForm = this._fb.group({
        password: ['', Validators.compose([
          Validators.required
        ])],
        phone: [userInfo.phone,  Validators.compose([
          Validators.required,
          Validators.pattern(/[0-9]{10}/)
        ])],
        notification: [userInfo.notification, Validators.required]
      });
    });

  }

  ngOnInit() {
  }

  onSubmit({value, valid}) {
    if (valid) {
      this._service.update({
        password: value.password,
        phone: value.phone,
        notification: {
          marketing: value.notification
        }
      });
    }
  }
}
