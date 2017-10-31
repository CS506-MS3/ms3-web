import {Component, HostBinding, OnInit} from '@angular/core';
import {AccountService} from '../account.service';

@Component({
  selector: 'app-activation-link-request-page',
  templateUrl: './activation-link-request-page.component.html',
  styleUrls: ['./activation-link-request-page.component.scss']
})
export class ActivationLinkRequestPageComponent implements OnInit {
  @HostBinding('class') cssClass = 'content-container';

  constructor(private _accountService: AccountService) {
  }

  ngOnInit() {
  }

  onSubmit(form) {

    this._accountService.requestActivationLink(form);
  }
}
