import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PersonalInfoComponent} from './personal-info.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Store} from '@ngrx/store';

describe('PersonalInfoComponent', () => {
  class MockStore {
    select(param) {
      if (param === 'auth') {
        return Observable.of({
          token: 'someToken',
          email: 'test@email.com',
          id: 1
        });
      } else if (param === 'userInfo') {
        return Observable.of({
          phone: '123-123-1234',
          notification: false
        });
      } else {
        return Observable.of({});
      }
    }
  }
  let component: PersonalInfoComponent;
  let fixture: ComponentFixture<PersonalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [
        {provide: Store, useClass: MockStore}
      ],
      declarations: [PersonalInfoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
