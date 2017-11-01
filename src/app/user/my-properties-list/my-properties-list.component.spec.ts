import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPropertiesListComponent } from './my-properties-list.component';

describe('MyPropertiesListComponent', () => {
  let component: MyPropertiesListComponent;
  let fixture: ComponentFixture<MyPropertiesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPropertiesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPropertiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
