import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessPurchasePageComponent } from './access-purchase-page.component';

describe('AccessPurchasePageComponent', () => {
  let component: AccessPurchasePageComponent;
  let fixture: ComponentFixture<AccessPurchasePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessPurchasePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessPurchasePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
