import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-account-info-page',
  templateUrl: './account-info-page.component.html',
  styleUrls: ['./account-info-page.component.scss']
})
export class AccountInfoPageComponent implements OnInit {
  @HostBinding('class') cssClass = 'content-container';

  constructor() {
  }

  ngOnInit() {
  }

}
