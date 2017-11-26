import {Component, HostBinding, OnInit} from '@angular/core';
import {PasswordResetService} from '../password-reset.service';

@Component({
  selector: 'app-password-reset-request-page',
  templateUrl: './password-reset-request-page.component.html',
  styleUrls: ['./password-reset-request-page.component.scss']
})
export class PasswordResetRequestPageComponent implements OnInit {
  @HostBinding('class') cssClass = 'content-container';

  constructor(private _service: PasswordResetService) {
  }

  ngOnInit() {
  }

  onSubmit(form) {
    this._service.requestPasswordResetLink(form);
  }
}
