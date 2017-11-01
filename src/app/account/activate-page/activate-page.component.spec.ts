import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatePageComponent } from './activate-page.component';
import {AccountService} from '../account.service';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('ActivatePageComponent', () => {
  let component: ActivatePageComponent;
  let fixture: ComponentFixture<ActivatePageComponent>;

  const mockAccount = {
    activate: jasmine.createSpy('activate')
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      declarations: [ ActivatePageComponent ],
      providers: [
        {provide: AccountService, useValue: mockAccount}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create & call account.activate', () => {
    expect(component).toBeTruthy();
    expect(mockAccount.activate).toHaveBeenCalled();
  });
});
