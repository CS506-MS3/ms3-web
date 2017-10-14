import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivationLinkRequestPageComponent } from './activation-link-request-page.component';

describe('ActivationLinkRequestPageComponent', () => {
  let component: ActivationLinkRequestPageComponent;
  let fixture: ComponentFixture<ActivationLinkRequestPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivationLinkRequestPageComponent ]
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
