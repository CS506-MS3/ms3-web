import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AlertActions} from '../../_actions/alert.actions';
import {AppAlert} from '../../_domains/app-alert';

@Component({
  selector: 'app-alert-bar',
  templateUrl: 'alert-bar.component.html',
  styleUrls: ['alert-bar.component.scss']
})
export class AlertBarComponent implements OnInit {
  private alertSubscription;

  alert: AppAlert = {
    show: false,
    type: null,
    message: null
  };

  constructor(private _store: Store<any>) {
    const store$ = this._store.select('alert');
    this.alertSubscription = store$
      .subscribe((payload: AppAlert) => this.alert = payload);
  }

  ngOnInit() {
  }

  onClose() {
    this._store.dispatch(new AlertActions.HideAlert());
  }
}
