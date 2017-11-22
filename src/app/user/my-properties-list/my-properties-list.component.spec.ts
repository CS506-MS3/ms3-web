import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MyPropertiesListComponent} from './my-properties-list.component';
import {MyPropertiesCardComponent} from '../my-properties-card/my-properties-card.component';
import {PropertySummaryCardComponent} from '../../shared/property-summary-card/property-summary-card.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {RouterTestingModule} from '@angular/router/testing';
import {Store} from '@ngrx/store';

describe('MyPropertiesListComponent', () => {
  class MockStore {
    select(params) {
      return Observable.of({list: []});
    }
  }
  let component: MyPropertiesListComponent;
  let fixture: ComponentFixture<MyPropertiesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        {provide: Store, useClass: MockStore}
      ],
      declarations: [
        MyPropertiesListComponent,
        MyPropertiesCardComponent,
        PropertySummaryCardComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPropertiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
