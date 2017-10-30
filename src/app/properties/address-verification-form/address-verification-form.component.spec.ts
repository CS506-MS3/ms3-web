import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressVerificationFormComponent } from './address-verification-form.component';

xdescribe('AddressVerificationFormComponent', () => {
  let component: AddressVerificationFormComponent;
  let fixture: ComponentFixture<AddressVerificationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressVerificationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressVerificationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
