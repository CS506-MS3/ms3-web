import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SignInFormComponent } from './sign-in-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthService} from '../../auth/auth.service';

describe('SignInFormComponent', () => {
  let mockAuthService = {
    authenticate: jasmine.createSpy('authenticate')
  };
  let component: SignInFormComponent;
  let fixture: ComponentFixture<SignInFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      providers: [
        {provide: AuthService, useValue: mockAuthService}
      ],
      declarations: [
        SignInFormComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
