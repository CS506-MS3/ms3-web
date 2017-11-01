import {Component, HostBinding, OnInit} from '@angular/core';
import {UserInfoService} from '../user-info.service';

@Component({
  selector: 'app-account-info-page',
  templateUrl: './account-info-page.component.html',
  styleUrls: ['./account-info-page.component.scss']
})
export class AccountInfoPageComponent implements OnInit {
  @HostBinding('class') cssClass = 'content-container';

  constructor(private _userInfoService: UserInfoService) {
    this._userInfoService.get();
  }

  ngOnInit() {

  }
}
