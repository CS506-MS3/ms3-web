import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RemoveListingPageComponent} from './remove-listing-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {PropertyService} from '../property.service';

describe('RemoveListingPageComponent', () => {
  const mockService = {
    remove: jasmine.createSpy('remove')
  };
  let component: RemoveListingPageComponent;
  let fixture: ComponentFixture<RemoveListingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [
        {provide: PropertyService, useValue: mockService}
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
