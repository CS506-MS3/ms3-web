import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatePageComponent } from './activate-page.component';
import {AccountService} from '../account.service';

describe('ActivatePageComponent', () => {
  let component: ActivatePageComponent;
  let fixture: ComponentFixture<ActivatePageComponent>;

  const mockAccount = {
    activate: jasmine.createSpy('activate')
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
