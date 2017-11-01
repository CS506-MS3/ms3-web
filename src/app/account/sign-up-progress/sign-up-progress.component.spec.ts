import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpProgressComponent } from './sign-up-progress.component';

describe('SignUpProgressComponent', () => {
  let component: SignUpProgressComponent;
  let fixture: ComponentFixture<SignUpProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
