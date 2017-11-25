import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../../auth/auth.service';
import {WishlistService} from '../../user/wishlist.service';

describe('HeaderComponent', () => {
  const routerMock = {
    navigate: jasmine.createSpy('navigate')
  };
  class MockAuthService {
    auth$ = Observable.of({
      token: null,
      email: null
    });

    unauthenticate = jasmine.createSpy('unauthenticate');
  }
  class MockWishlistService {
    wishlist$ = Observable.of({
      list: []
    });

    remove = jasmine.createSpy('remove');
  }
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [
        {provide: Router, useValue: routerMock},
        {provide: AuthService, useClass: MockAuthService},
        {provide: WishlistService, useClass: MockWishlistService}
      ],
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
