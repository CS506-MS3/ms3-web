import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessPurchaseFormComponent } from './access-purchase-form.component';

describe('AccessPurchaseFormComponent', () => {
  let component: AccessPurchaseFormComponent;
  let fixture: ComponentFixture<AccessPurchaseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessPurchaseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessPurchaseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
