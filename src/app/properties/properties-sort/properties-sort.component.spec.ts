import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesSortComponent } from './properties-sort.component';

describe('PropertiesSortComponent', () => {
  let component: PropertiesSortComponent;
  let fixture: ComponentFixture<PropertiesSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertiesSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
