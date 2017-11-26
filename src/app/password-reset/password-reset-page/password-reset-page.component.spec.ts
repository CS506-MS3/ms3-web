import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PasswordResetPageComponent} from './password-reset-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {PasswordResetService} from '../password-reset.service';

describe('PasswordResetPageComponent', () => {
  let component: PasswordResetPageComponent;
  let fixture: ComponentFixture<PasswordResetPageComponent>;

  const mockService = {
    resetPassword: jasmine.createSpy('resetPassword')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [
        {provide: PasswordResetService, useValue: mockService}
      ],
      declarations: [PasswordResetPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordResetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('method: onSubmit', () => {
    it('should call resetPassword method with input', () => {
      component.passwordResetForm.controls.password.setValue('test');
      component.onSubmit(component.passwordResetForm);

      expect(mockService.resetPassword).toHaveBeenCalledWith({
        password: 'test'
      });
    });
  });
});
