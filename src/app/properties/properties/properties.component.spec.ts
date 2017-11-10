import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PropertiesComponent} from './properties.component';

describe('PropertiesComponent', () => {
  let component: PropertiesComponent;
  let fixture: ComponentFixture<PropertiesComponent>;
  const testProperties = [
    {
      id: 1,
      title: 'Test Title',
      address: '123 Test Ave., Madison, WI',
      price: 500,
      startDate: '2017-10-01T00:00:00',
      duration: 6,
      thumbnailUrl: 'assets/images/eachProperty.jpg'
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PropertiesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesComponent);
    component = fixture.componentInstance;
    component.properties = testProperties;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.properties).toBeDefined();
  });

  describe('getMore', () => {
    it('should emit request more signal', () => {
      spyOn(component.requestMore, 'emit');

      component.getMore();

      expect(component.requestMore.emit).toHaveBeenCalled();
    });
  });
});
