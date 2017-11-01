import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPropertiesCardComponent } from './my-properties-card.component';

describe('MyPropertiesCardComponent', () => {
  let component: MyPropertiesCardComponent;
  let fixture: ComponentFixture<MyPropertiesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPropertiesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPropertiesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
