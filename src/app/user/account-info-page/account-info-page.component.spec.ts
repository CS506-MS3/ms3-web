import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AccountInfoPageComponent} from './account-info-page.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {UserInfoService} from '../user-info.service';

describe('AccountInfoPageComponent', () => {
  const mockService = {
    get: jasmine.createSpy('get')
  };
  let component: AccountInfoPageComponent;
  let fixture: ComponentFixture<AccountInfoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {provide: UserInfoService, useValue: mockService}
      ],
      declarations: [AccountInfoPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
