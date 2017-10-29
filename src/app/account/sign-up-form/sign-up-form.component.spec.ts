import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpFormComponent } from './sign-up-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AccountService} from '../account.service';

describe('SignUpFormComponent', () => {
  const mockAccountService = {
    create: jasmine.createSpy('create')
  };
  let component: SignUpFormComponent;
  let fixture: ComponentFixture<SignUpFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      providers: [
        {provide: AccountService, useValue: mockAccountService}
      ],
      declarations: [ SignUpFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
