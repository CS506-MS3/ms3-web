import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {PropertySummary} from '../../_domains/property-summary';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-properties-list',
  templateUrl: './my-properties-list.component.html',
  styleUrls: ['./my-properties-list.component.scss']
})
export class MyPropertiesListComponent implements OnInit {
  properties: PropertySummary[];

  constructor(private _store: Store<any>, private _router: Router) {
    this._store.select('myProperties').subscribe((data) => {

      this.properties = data.list;
    });
  }

  ngOnInit() {
  }

  onRemove(id) {

    this._router.navigate(['properties', id, 'remove']);
  }
}
