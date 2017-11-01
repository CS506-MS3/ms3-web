import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DeactivateAccountComponent} from './deactivate-account.component';
import {AccountService} from '../../account/account.service';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';

describe('DeactivateAccountComponent', () => {
  const mockAccountService = {
    deactivate: jasmine.createSpy('deactivate')
  };
  let component: DeactivateAccountComponent;
  let fixture: ComponentFixture<DeactivateAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [
        {provide: AccountService, useValue: mockAccountService}
      ],
      declarations: [DeactivateAccountComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeactivateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
