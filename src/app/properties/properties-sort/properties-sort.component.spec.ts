import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PropertiesSortComponent} from './properties-sort.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('PropertiesSortComponent', () => {
  let component: PropertiesSortComponent;
  let fixture: ComponentFixture<PropertiesSortComponent>;
  const testInput = {
    sortBy: 'price',
    direction: 'UP'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      declarations: [PropertiesSortComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesSortComponent);
    component = fixture.componentInstance;
    component.sortInput = testInput;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive category & sort direction through input', () => {
    expect(component.sort).toEqual(testInput);
  });

  describe('Changing category', () => {
    it('should emit ', () => {
      spyOn(component.onSort, 'emit');

      component.onSelect('recent');
      expect(component.onSort.emit).toHaveBeenCalledWith({
        sortBy: 'recent',
        direction: 'UP'
      });
    });
  });

  describe('Clicking Up', () => {
    it('should change direction to UP', () => {
      spyOn(component.onSort, 'emit');
      component.sort.direction = 'DOWN';

      component.sortAscending();

      expect(component.onSort.emit).toHaveBeenCalledWith({
        sortBy: 'price',
        direction: 'UP'
      });
    });
  });

  describe('Clicking down', () => {
    it('should change direction to Down', () => {
      spyOn(component.onSort, 'emit');

      component.sortDescending();

      expect(component.onSort.emit).toHaveBeenCalledWith({
        sortBy: 'price',
        direction: 'DOWN'
      });
    });
  });
});
