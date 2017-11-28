import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PasswordResetRequestPageComponent} from './password-reset-request-page.component';
import {EmailFormComponent} from '../../shared/email-form/email-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {PasswordResetService} from '../password-reset.service';

describe('PasswordResetRequestPageComponent', () => {
  let component: PasswordResetRequestPageComponent;
  let fixture: ComponentFixture<PasswordResetRequestPageComponent>;

  const mockService = {
    requestPasswordResetLink: jasmine.createSpy('requestPasswordResetLink')
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
      declarations: [
        PasswordResetRequestPageComponent,
        EmailFormComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordResetRequestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('method: onSubmit', () => {
    it('should call requestPasswordResetLink method with input', () => {
      const testForm = {
        email: 'test@email.com'
      };

      component.onSubmit(testForm);

      expect(mockService.requestPasswordResetLink).toHaveBeenCalledWith(testForm);
    });
  });
});
