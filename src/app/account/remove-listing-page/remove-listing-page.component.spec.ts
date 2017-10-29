import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RemoveListingPageComponent} from './remove-listing-page.component';
import {ReactiveFormsModule} from '@angular/forms';

describe('RemoveListingPageComponent', () => {
  let component: RemoveListingPageComponent;
  let fixture: ComponentFixture<RemoveListingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [RemoveListingPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveListingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
