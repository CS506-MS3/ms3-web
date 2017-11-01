import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  email: string;
  phone: string;
  notification: boolean;

  constructor(private _store: Store<any>) {
    this._store.select('auth').subscribe((auth) => {
      this.email = auth.email;
    });
    this._store.select('userInfo').subscribe((userInfo) => {
      this.phone = userInfo.phone;
      this.notification = userInfo.notification;
    });
  }

  ngOnInit() {
  }
}
