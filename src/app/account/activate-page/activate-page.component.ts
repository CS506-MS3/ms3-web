import {Component, HostBinding, OnInit} from '@angular/core';
import {AccountService} from '../account.service';

@Component({
  selector: 'app-activate-page',
  templateUrl: './activate-page.component.html',
  styleUrls: ['./activate-page.component.scss']
})
export class ActivatePageComponent implements OnInit {
  @HostBinding('class') cssClass = 'content-container';

  constructor(private _account: AccountService) { }

  ngOnInit() {
    this._account.activate();
  }

}
