import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AccountInfoPageComponent} from './account-info-page.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('AccountInfoPageComponent', () => {
  let component: AccountInfoPageComponent;
  let fixture: ComponentFixture<AccountInfoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
