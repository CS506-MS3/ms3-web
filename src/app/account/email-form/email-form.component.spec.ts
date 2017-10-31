import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EmailFormComponent} from './email-form.component';
import {ReactiveFormsModule} from '@angular/forms';

describe('EmailFormComponent', () => {
  let component: EmailFormComponent;
  let fixture: ComponentFixture<EmailFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [EmailFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.emailForm.constructor.name).toEqual('FormGroup');
  });

});
