import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivationLinkRequestPageComponent } from './activation-link-request-page.component';
import {SignUpProgressComponent} from '../sign-up-progress/sign-up-progress.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {AccountService} from '../account.service';

describe('ActivationLinkRequestPageComponent', () => {
  const mockAccountService = {
    requestActivationLink: jasmine.createSpy('requestActivationLink')
  };
  let component: ActivationLinkRequestPageComponent;
  let fixture: ComponentFixture<ActivationLinkRequestPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [
        {provide: AccountService, useValue: mockAccountService}
      ],
      declarations: [
        SignUpProgressComponent,
        ActivationLinkRequestPageComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivationLinkRequestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
