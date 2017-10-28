import { Component, OnInit } from '@angular/core';
import {AccountService} from '../account.service';
// Empty page object (or could have a loading bar?) to provide inlet for activation link
@Component({
  selector: 'app-activate-page',
  templateUrl: './activate-page.component.html',
  styleUrls: ['./activate-page.component.scss']
})
export class ActivatePageComponent implements OnInit {

  constructor(private _account: AccountService) { }

  ngOnInit() {
    this._account.activate();
  }

}
